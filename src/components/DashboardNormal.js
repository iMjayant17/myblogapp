import React, { useState } from 'react'
// import photo from '../images/dummy.png'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import Profilebar from './Profilebar';



// import { useNavigate } from 'react-router-dom';

const DashboardNormal = () => {

    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div style={{
                backgroundColor: "black",
                color: "white",
                height: "100vh",
                display: "flex",
                padding: "1%",
                gap: "1%",
                overflowY: "hidden",
            }}>
      
                <div style={{
                    backgroundColor: "#121212",
                    width: "30%",

                    borderRadius: "15px"
                }}>
                    <Link to="/" style={{textDecoration:"none",color:"white"}}>
                    <div style={{
                        backgroundColor: "#1E1E1E",
                        height: "10%",
                        display: "flex",
                        fontSize: "212%",
                        paddingLeft: "10%",
                        borderRadius: "5px",
                        alignItems: "center"
                        }}>Placements Talk's</div>    
                    </Link>
                    
                    <div style={{
                        marginTop: "5%",
                        backgroundColor: "#1E1E1E",
                        height: "20%",
                        padding: "2%",
                        margin: "3%",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2%"
          
                    }}>
                        <Profilebar/>
                    </div>



                    <Link to="/profile" style={{textDecoration:"none",color:"white"}}>
                    <div style={{
                        backgroundColor: "#1E1E1E",
                        margin: "3%",
                        height: "8%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // paddingLeft:"4%",
                        paddingRight: "4%",
                        borderRadius: "7px"
                    }}>
                        <div><ul><li>Your Profile</li></ul></div>
                        <div>:)</div>
                    </div>
                    </Link>
                    <Link to="/post" style={{textDecoration:"none",color:"white"}}>
                    <div style={{
                        backgroundColor: "#1E1E1E",
                        margin: "3%",
                        height: "8%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // paddingLeft:"4%",
                        paddingRight: "4%",
                        borderRadius: "7px"
                    }}>
                        <div><ul><li>Your Posts!</li></ul></div>
                        <div>:)</div>
                    </div>
                    </Link>

                    <Link to="/createPost" style={{textDecoration:"none",color:"white"}}>
                    <div style={{
                        backgroundColor: "#1E1E1E",
                        margin: "3%",
                        height: "8%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // paddingLeft:"4%",
                        paddingRight: "4%",
                        borderRadius: "7px"
                    }}>
                        <div><ul><li>Create new Post!</li></ul></div>
                        <div>:)</div>
                    </div>

                    </Link>

                    <button
						style={{
							
							padding: "0.5em",
							borderRadius: "5px",
							border: "none",
							outline: "none",
							transition: "0.4s ease-in-out",
                            backgroundColor: hover ? "red" : "crimson",
                            color: "white",
                            marginLeft: "41%",
                            marginTop:"60%"
						}}

						onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        
                        onClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('author');
                            localStorage.removeItem('fullName');
                            localStorage.removeItem('id');
                            navigate('/login')
                        }}
					>
						Logout
					</button>
                </div>
      

                <div style={{
                    backgroundColor: "#121212",
                    width: "100%",
                    borderRadius: "10px",

                }}>
                    <Outlet/>
                    {/* <AllPost/> */}
                </div>
            </div>
        </>
    );
}

export default DashboardNormal
