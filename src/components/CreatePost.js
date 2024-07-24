import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Alert, Snackbar } from '@mui/material'

const CreatePost = () => {

  const author = localStorage.getItem('author')
  const id = localStorage.getItem('id')
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const PostHandler = (e) => {
    e.preventDefault();
    
    axios.post('https://restful-blog-api-gxyi.onrender.com/blog/post_blog', {
      author:author,
      authorId:id,
      title: e.target[0].value,
      description: e.target[1].value
    }, {
      headers: {
          Authorization:'Bearer '+localStorage.getItem('token')
      }
  })
      .then(result => {
        console.log(result)
        setAlert({ open: true, message: 'Your blog has been POSTED..!!', severity: 'success' });
        setTimeout(() => {
          navigate('/')
        }, 2000);
        e.target[0].value = "";    
        e.target[1].value = "";  
      })
      .catch(err => {
        console.log(err)
        setAlert({ open: true, message: 'Failed to post the Blog..', severity: 'error' });
      })
    
      
  }

  const handleClose = () => {
		setAlert({ ...alert, open: false });
	  };
  return (
      <>
          <div style={{
              // backgroundColor: "#1E1E1E",
              height: "90%",
              margin: "1%",
              borderRadius:"10px"
          }}>
              
              <h1 style={{ textAlign: "center", paddingTop: "1%" }}>Create Post</h1>


              <div style={{display:"flex",height:"100%",justifyContent:"center",marginRight:"5%",gap:"-100px"}}>
              <div style={{
                //   backgroundColor: "blue",
                  width: "54%",
                  height: "80%",
                  marginLeft: "3%",
                  marginTop:"-3%"

              }}>
                  <form onSubmit={PostHandler}>
                      
                      <input type='text' style={{
                          width: "88%", fontSize: "194%", backgroundColor: "#363636", border: "none",
                          color:"white",margin:"5%",padding:"1% 1%",overflow:"auto",borderRadius:"7px",outline:"none"}} placeholder='Enter your Title..'/>

                      <textarea type='text' placeholder="Description..." style={{
                          width: "86%", backgroundColor: "#363636", border: "none",fontSize:"144%",overflow:"hidden",resize:"none",
                          color:"white",margin:"5%",marginTop:"-4%",padding:"2% 2%",borderRadius:"7px",outline:"none",height:"360px"}} />  
                      <div style={{display:"flex",justifyContent:"space-between",margin:"5%",marginTop:"-2%"}}>
                          <input type='file' style={{height:"30px"}} />
                          <input type='submit' value="Post..!!"  style={{height:"30px",width:"65px",backgroundColor:"aqua",outline:"none",border:"none",borderRadius:"5px"}}/>

                    </div>


                  </form>


                </div>
                        {/* <div style={{width: "50%",
                  height: "80%",
                  marginLeft: "3%",
                      marginTop: "-3%",
                      backgroundColor: "red"
                  }}></div> */}

                </div>
      </div>
      <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      </>
  )
}

export default CreatePost
