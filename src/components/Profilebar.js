import React, { useEffect, useState } from 'react'
import photo from '../images/dummy.png'
import axios from 'axios'

const Profilebar = () => {

    const [data,setData] = useState({img:"",fullName:"",author:"" ,college:"N/A"})
    useEffect(()=>{
        const uid = localStorage.getItem('id');
        axios.get(`https://restful-blog-api-gxyi.onrender.com/detail/${uid}`,{
            headers: {
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        }).then((res) => {
            // console.log(res.data.result)
            var val = res.data.result.college
            if(val==="" || val==null) val = "N/A"
            setData({
                author: res.data.result.author,
                fullName: res.data.result.fullName,
                img: res.data.result?.img,
                college:val
            })
        })
            .catch(err => {
                console.log(err);
        })
    },[]);

  return (
      <>
          <img src={photo} alt="profile" style={{
                            height: "130px",
                            width: "130px",
                            objectFit: "cover",
                        }}></img>
                        <div style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#1E1E1E",
                            marginLeft: "3%"
                        }}>
          
                            <div style={{
                                fontSize: "130%",
                                color: "aqua",
                                fontWeight: "bold",
                                marginTop: "14%"
              
                            }}>
                                {data.fullName}
                            </div>
                            <div style={{
                                fontSize: "90%",
                                color: "whitesmoke",
                                marginTop: "8%"
              
                            }}>
                                {data.author}
                                <br />
                                {data.college===""?"N/A":data.college}
                            </div>
          
          
                        </div>
      </>
  )
}

export default Profilebar
