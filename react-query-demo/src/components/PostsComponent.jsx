import React from 'react'
import { useQuery } from 'react-query'

//Function to handle data fetching
const fetchData = async () => {
    console.log("Fetching data from API...");
    const apiData = await fetch('https://jsonplaceholder.typicode.com/posts')
    return apiData.json();
}

// PostsComponent: Uses useQuery to manage fetching, loading, and error states
//refetch Allows us to manually trigger a refetch with a button or a trigger

    function PostsComponent() {
    const { fetchPosts, isError, isLoading, refetch } = useQuery('mycache', fetchData, {
        staleTime: 60000,
        cacheTime: 300000,
        refetchOnWindowFocus: true,
        keepPreviousData: true,

    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading data</div>
    }
  return (
    <div>
        <button type='button' onClick={() => refetch()} disabled={isLoading}>Refresh Data</button>
        {isLoading && <div>Refreshing...</div>}
        {fetchPosts.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
  )
}

export default PostsComponent;