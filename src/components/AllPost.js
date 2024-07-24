import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './Post';
import { Alert, Snackbar } from '@mui/material';




const AllPost = () => {
    const [allpost, setallpost] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });


    const size = 37; // control the size
const c = "#0000, #282828 0.5deg 119.5deg, #0000 120deg";
const g1 = `conic-gradient(from 60deg at 56.25% calc(425% / 6), ${c})`;
const g2 = `conic-gradient(from 180deg at 43.75% calc(425% / 6), ${c})`;
const g3 = `conic-gradient(from -60deg at 50% calc(175% / 12), ${c})`;

const containerStyle = {
  width: '100%',
  height: '100%',
  background: `${g1}, ${g1} ${size}px calc(1.73 * ${size}px), ${g2}, ${g2} ${size}px calc(1.73 * ${size}px), ${g3} ${size}px 0, ${g3} 0 calc(1.73 * ${size}px) #1e1e1e`,
  backgroundSize: `calc(2 * ${size}px) calc(3.46 * ${size}px)`,
    };
    
    const mystyle = {
        height: "90%",
        width: "90%",
      // //   backgroundColor: "red",
        margin: "auto",
        padding: "20px",
        //   overflow: "auto"
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        boxSizing: 'border-box',
        WebkitOverflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        overflow: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        scrollbarColor: 'rgba(0, 0, 0, 0)',
        borderRadius:'15px'
        
    };



        
    useEffect(() => {
        axios.get("https://restful-blog-api-gxyi.onrender.com/blog/all_blog", {
            headers: {
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data.blogs)
                setallpost(response.data.blogs);
                setAlert({ open: true, message: 'All Post fetched Successfully', severity: 'success' });
            })
            .catch(err => {
                console.log(err);
                setAlert({ open: true, message: 'Failed to get your Post', severity: 'error' });
        })
    }, []);
    
    const handleClose = () => {
        setAlert({ ...alert, open: false });
      };
  return (
      <>
          <div style={{...mystyle , ...containerStyle} }>
          {allpost.map((val, key) => {
              return (
                  <Post key={key} data={val} />
                  
              );
          })}
          </div>
          <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      </>
  )
}

export default AllPost
