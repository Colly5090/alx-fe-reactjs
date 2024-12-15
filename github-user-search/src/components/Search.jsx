import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const resultsPerPage = 10;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim()) {
            setLoading(true);
            setError('');
            setUserData(null);
            setPage(1);
            try {
                const data = await fetchUserData(username, location, minRepos);
                setUserData(data);
            } catch (error) {
                setError("Looks like we can't find the user.");
            } finally {
                setLoading(false);
                setUsername('');
                setLocation('');
                setMinRepos('');
            }
        }
    };

    const handleLoadMore = async () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg p-6 space-y-4 flex flex-col items-center"
            >
                <div>
                    <input
                        type="text"
                        value={username}
                        placeholder="Enter GitHub Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <h2 className="text-xl font-bold text-blue-600 underline mb-2">
                    Advanced Search
                </h2>
                <div>
                    <input
                        type="text"
                        value={location}
                        placeholder="Enter Location (Optional)"
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={minRepos}
                        placeholder="Enter Min Repositories (Optional)"
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-64 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-center text-blue-500 my-4">Loading...</p>}

            {error && <p className="text-center text-red-500 my-4">{error}</p>}

            {userData?.items?.length > 0 && userData.items ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {userData.items.slice(0, page * resultsPerPage).map((user) => (
                        <div 
                            key={user.id} 
                            className="bg-white shadow rounded-lg p-4 space-y-2"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <p className="text-center font-semibold">{user.name || 'No Name Provided'}</p>
                            <p className="text-center text-sm text-gray-500">{user.location || 'Location not provided'}</p>
                            <p className="text-center text-sm text-gray-500">Public Repositories: {user.public_repos}</p>
                            <p className="text-center">
                                <a 
                                    href={user.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 hover:underline"
                                >
                                    View GitHub Profile
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            ) : userData && (
                <div className="bg-white shadow rounded-lg p-6 mt-6">
                    <img
                        src={userData.avatar_url}
                        alt={userData.name}
                        className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h3 className="text-center text-xl font-bold">{userData.name || 'No Name Provided'}</h3>
                    <p className="text-center text-gray-600 mt-2">
                        <a 
                            href={userData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline"
                        >
                            View GitHub Profile
                        </a>
                    </p>
                    <p className="text-center text-sm text-gray-500">Public Repositories: {userData.public_repos}</p>
                    <p className="text-center text-sm text-gray-500">Followers: {userData.followers}</p>
                    <p className="text-center text-sm text-gray-500">Following: {userData.following}</p>
                </div>
            )}

            {userData?.items?.length > page * resultsPerPage && (
                <div className="text-center mt-6">
                    <button 
                        onClick={handleLoadMore} 
                        disabled={loading}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Search;