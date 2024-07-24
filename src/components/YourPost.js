import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './Post';

const YourPost = () => {

    const [YourPosts, setYourPosts] = useState([]);
    // const author = localStorage.getItem('author')
    const id = localStorage.getItem('id')
    useEffect(() => {
        axios.get("https://restful-blog-api-gxyi.onrender.com/blog//find_blog_by_author/"+id, {
          headers: {
              Authorization:'Bearer '+localStorage.getItem('token')
          }
      })
            .then(response => {
                console.log(response.data.blog)
                setYourPosts(response.data.blog);
            })
            .catch(err => {
            console.log(err);
        })
    },[id]);

  return (
    <div style={{
        height: "90%",
        width: "90%",
      //   backgroundColor: "red",
        margin: "auto",
        padding: "20px",
        overflow:"auto"
      }}>
          <h1 style={{textAlign:"center",color:"aquamarine"}}>Your Posts</h1>
    {YourPosts?.map((val, key) => {
        return (
            <Post key={key} data={val} />
        );
    })}
</div>
  )
}

export default YourPost
