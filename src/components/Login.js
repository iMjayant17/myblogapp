import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [loggined, setloggined] = useState(false)
	const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
	const [isHovered, setIsHovered] = useState({login:false , signup:false,forget:false});

    const navigate = useNavigate();

	const SubmitHandler = (e) => {
		e.preventDefault();
		console.log(email,password);
		axios.post("https://restful-blog-api-gxyi.onrender.com/login/", {
			email: email,
			password: password
		}).then((result) => {
			console.log("signin Success....")
			setEmail("")
			setPassword("")
			console.log(result.data)
			localStorage.setItem("token", result.data.Token)
			localStorage.setItem("author", result.data.author)
			localStorage.setItem("fullName", result.data.fullName)
			localStorage.setItem("id", result.data._id)
			setAlert({ open: true, message: 'Login successful!', severity: 'success' });

        setTimeout(() => {
          navigate('/');
        }, 2000);
		})
			.catch(err => {

				console.log(err);
        if (err.response) {
          // Server responded with a status other than 200 range
          console.log('Error response:', err.response.data);
          console.log('Error status:', err.response.status);
          console.log('Error headers:', err.response.headers);
        } else if (err.request) {
          // Request was made but no response received
          console.log('Error request:', err.request);
        } else {
          // Something happened in setting up the request
          console.log('Error message:', err.message);
				}
				
				setloggined(true);
				console.log("login unsuccessful")
				// console.log(err);
				setEmail("");
				setPassword("");
				setAlert({ open: true, message: err.response.data.msg +'. Please try again.', severity: 'error' });
			})
	};

	// const buttonStyle = {
	// 	backgroundColor: isHovered ? 'lightblue' : 'blue',
	// 	color: 'white',
	// 	padding: '10px 20px',
	// 	border: 'none',
	// 	borderRadius: '5px',
	// 	cursor: 'pointer'
	//   };
	
	const handleClose = () => {
		setAlert({ ...alert, open: false });
	  };

	return (
		<>
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#121212",
				}}
			>
                <form
                    onSubmit={SubmitHandler}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						paddingLeft: "2em",
						paddingRight: "2em",
						paddingBottom: "0.4em",
						backgroundColor: "#171717",
						borderRadius: "25px",
						transition: "0.4s ease-in-out",
					}}
				>
					<p
						style={{
							textAlign: "center",
							margin: "2em",
							color: "white",
							fontSize: "1.2em",
						}}
					>
						Login
					</p>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "0.5em",
							borderRadius: "25px",
							padding: "0.6em",
							border: "none",
							outline: "none",
							color: "white",
							backgroundColor: "#171717",
							boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
						}}
					>
						<svg
							style={{
								fill: "white",
								height: "1.3em",
								width: "1.3em",
							}}
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 82.51 82.51"
							xmlSpace="preserve"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<g>
									<path d="M42.551,0.033C42.298,0.019,42.047,0,41.792,0c-0.066,0-0.132,0.008-0.198,0.009C41.481,0.008,41.369,0,41.255,0 C18.507,0,0,18.507,0,41.254C0,64.003,18.507,82.51,41.255,82.51S82.51,64.003,82.51,41.254C82.51,18.942,64.7,0.721,42.551,0.033z M41.902,76.464c-0.037,0.001-0.072,0.006-0.109,0.006s-0.073-0.005-0.109-0.006H41.902z M38.254,75.688 c-4.167-1.849-7.83-6.869-10.326-13.708c3.254-0.796,6.729-1.313,10.326-1.518V75.688z M38.254,54.457 c-4.179,0.221-8.233,0.83-12.038,1.786c-0.884-3.708-1.453-7.755-1.639-11.988h13.677V54.457z M24.575,38.255 c0.203-4.68,0.877-9.13,1.924-13.15c3.716,0.91,7.672,1.482,11.755,1.694v11.456H24.575z M38.254,20.789 c-3.418-0.201-6.751-0.687-9.894-1.431c2.477-6.258,5.96-10.832,9.894-12.576V20.789z M44.254,26.852 c4.453-0.162,8.78-0.76,12.829-1.754c1.048,4.022,1.723,8.474,1.926,13.157H44.254V26.852z M44.254,20.845V6.38 c4.378,1.337,8.278,6.167,10.979,13.005C51.776,20.2,48.074,20.695,44.254,20.845z M56.943,9.695 c3.135,1.565,6.003,3.583,8.523,5.968c-1.401,0.731-2.896,1.391-4.467,1.978C59.85,14.679,58.486,12.01,56.943,9.695z M22.59,17.628c-1.837-0.683-3.559-1.468-5.152-2.339c2.848-2.614,6.125-4.762,9.712-6.334C25.4,11.43,23.863,14.349,22.59,17.628z M20.733,23.35c-1.207,4.544-1.957,9.571-2.162,14.904H6.137c0.584-6.893,3.156-13.225,7.145-18.421 C15.547,21.19,18.05,22.365,20.733,23.35z M18.572,44.255c0.191,4.896,0.843,9.528,1.885,13.769 c-2.839,1.061-5.461,2.335-7.808,3.8c-3.627-5.03-5.959-11.048-6.512-17.568L18.572,44.255L18.572,44.255z M22.187,63.763 c1.357,3.746,3.049,7.057,5.007,9.813c-3.964-1.731-7.549-4.169-10.597-7.156C18.301,65.419,20.181,64.534,22.187,63.763z M44.254,76.09V60.406c3.966,0.16,7.813,0.702,11.399,1.582C52.945,69.405,48.862,74.681,44.254,76.09z M44.254,54.396V44.255 h14.753c-0.186,4.222-0.752,8.258-1.632,11.957C53.259,55.182,48.842,54.559,44.254,54.396z M65.013,44.255h11.36 c-0.535,6.32-2.742,12.169-6.181,17.104c-2.158-1.287-4.523-2.411-7.059-3.36C64.172,53.763,64.821,49.139,65.013,44.255z M65.014,38.255c-0.206-5.334-0.955-10.361-2.162-14.906c2.395-0.879,4.643-1.912,6.708-3.086 c3.802,5.113,6.245,11.289,6.813,17.992H65.014z M56.903,72.836c1.741-2.601,3.256-5.653,4.493-9.067 c1.743,0.669,3.387,1.428,4.904,2.271C63.576,68.791,60.403,71.093,56.903,72.836z"></path>
								</g>
							</g>
						</svg>
						<input
							autocomplete="off"
							placeholder="Email"
							style={{
								background: "none",
								border: "none",
								outline: "none",
								width: "100%",
								color: "#d3d3d3",
							}}
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setloggined(false)
                            }}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "0.5em",
							borderRadius: "25px",
							padding: "0.6em",
							border: "none",
							outline: "none",
							color: "white",
							backgroundColor: "#171717",
							boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
						}}
					>
						<svg
							style={{ height: "1.3em", width: "1.3em", fill: "white" }}
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
						</svg>
						<input
							placeholder="Password"
							style={{
								background: "none",
								border: "none",
								outline: "none",
								width: "100%",
								color: "#d3d3d3",
							}}
                            type="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value);
                                setloggined(false)
                            }}
						/>
                    </div>
                    
                    {loggined && <span style={{color:"red",fontSize:"80%"}}>*Wrong Email/Password</span>}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "row",
							marginTop: "2.5em",
						}}
					>
						<input
							style={{
								padding: "0.5em",
								paddingLeft: "1.1em",
								paddingRight: "1.1em",
								borderRadius: "5px",
								marginRight: "0.5em",
								border: "none",
								outline: "none",
								transition: "0.4s ease-in-out",
								backgroundColor: isHovered.login ? "green":"#252525",
								color: "white",
							}}
							
							onMouseEnter={() => setIsHovered({login:true,signup:false,forget:false})}
          					onMouseLeave={() => setIsHovered({...isHovered ,login:false})}
                            type="submit"
                            value="     Login     "
						/>
							
						<button
							style={{
								padding: "0.5em",
								paddingLeft: "2.3em",
								paddingRight: "2.3em",
								borderRadius: "5px",
								border: "none",
								outline: "none",
								transition: "0.4s ease-in-out",
								backgroundColor: isHovered.signup ? '#08BFA8' : '#252525',
								// backgroundColor: "#252525",
								color: "white",
                            }}
                            onMouseEnter={() => setIsHovered({signup:true,login:false,forget:false})}
          					onMouseLeave={() => setIsHovered({...isHovered ,signup:false})}
                            onClick={() => {
                                navigate("/signup")
                            }}
						>
							Sign Up
						</button>
					</div>
					<button
						style={{
							marginBottom: "3em",
							padding: "0.5em",
							borderRadius: "5px",
							border: "none",
							outline: "none",
							transition: "0.4s ease-in-out",
							backgroundColor: isHovered.forget? "#DC443B" : "#252525",

							color: "white",
						}}

						onMouseEnter={() => setIsHovered({forget:true, login:false,signup:false})}
						onMouseLeave={() => setIsHovered({...isHovered ,forget:false})}
					>
						Forgot Password
					</button>
				</form>
			</div>

			<Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
		</>
	);
};

export default Login;
