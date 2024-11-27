import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const { id } = useParams();
  return (
    <div>
        <h2>Blog Post {id}</h2>
        <p>Here is the content for the blog post with ID {id}. (You can fetch and display the blog content here.)</p>
    </div>
  )
}

export default BlogPost