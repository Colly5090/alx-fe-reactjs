import axios from 'axios';

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users"
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY


export const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        let url = `${GITHUB_API_URL}/${username}`;

        if (location || minRepos) {
            let query = '';
            if (location) query += `location:${location}`;
            if (minRepos) {
                if (query) query += '+';
                query += `repos:>=${minRepos}`;
            }
            url = `${GITHUB_SEARCH_API_URL}?q=${query}`
        }

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_KEY}`,
            },
        });
        const data = response.data;

        if (data.items) {
            const detailedData = await Promise.all(
                data.items.map(async (user) => {
                    const userDetails = await axios.get(`${GITHUB_API_URL}/${user.login}`, {
                        headers: {
                            Authorization: `Bearer ${GITHUB_API_KEY}`,
                        },
                    });
                    return userDetails.data;
                })
            );
            return { items: detailedData };
        }

        return data;
    } catch (error) {
        throw new Error(
            error.response?.status === 404 ? "User not found" : "An error occured while fetching user"
        )
    }
};

