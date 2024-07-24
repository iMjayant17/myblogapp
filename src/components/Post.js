import React from 'react'
import '../components/Post.css'

const Post = ({ data }) => {
    
    const mydata = data;
  return (
      <>
    <div class="card">
        <div class="tools">
          <span class="tool">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
            </div>
          </span>
          
          <span>
            <div style={{ color: "grey" }}>~{ mydata.author}</div></span>
              </div>
              
              <div class="card__title">
                  <h3 > {mydata.title}</h3>
              </div>
              <div class="card__content">
                 {mydata.description}
  </div>
</div>
      </>
  )
}

export default Post

