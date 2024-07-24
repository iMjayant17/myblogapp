import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [author, setAuthor] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setfullName] = useState("");
	const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		axios
      .post("https://restful-blog-api-gxyi.onrender.com/signup", {
        email: email,
        fullName: fullName,
        author: author,
        password: password,
      })
      .then((result) => {
        console.log(result);
        setEmail('');
        setfullName('');
        setAuthor('');
        setPassword('');
        
        setAlert({ open: true, message: 'Signup successful!', severity: 'success' });

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setEmail('');
        setfullName('');
        setAuthor('');
        setPassword('');

        setAlert({ open: true, message: 'Signup failed. Please try again.', severity: 'error' });
      });
  };

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
					onSubmit={submitHandler}
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
						Signup
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
							onChange={(e) => {
								setEmail(e.target.value);
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
							width="18"
							height="18"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<path
									d="M13 7L3 7"
									stroke="#ffffff"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>{" "}
								<path
									d="M10 12H3"
									stroke="#ffffff"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>{" "}
								<path
									d="M8 17H3"
									stroke="#ffffff"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>{" "}
								<path
									d="M11.3161 16.6922C11.1461 17.07 11.3145 17.514 11.6922 17.6839C12.07 17.8539 12.514 17.6855 12.6839 17.3078L11.3161 16.6922ZM16.5 7L17.1839 6.69223C17.0628 6.42309 16.7951 6.25 16.5 6.25C16.2049 6.25 15.9372 6.42309 15.8161 6.69223L16.5 7ZM20.3161 17.3078C20.486 17.6855 20.93 17.8539 21.3078 17.6839C21.6855 17.514 21.8539 17.07 21.6839 16.6922L20.3161 17.3078ZM19.3636 13.3636L20.0476 13.0559L19.3636 13.3636ZM13.6364 12.6136C13.2222 12.6136 12.8864 12.9494 12.8864 13.3636C12.8864 13.7779 13.2222 14.1136 13.6364 14.1136V12.6136ZM12.6839 17.3078L17.1839 7.30777L15.8161 6.69223L11.3161 16.6922L12.6839 17.3078ZM21.6839 16.6922L20.0476 13.0559L18.6797 13.6714L20.3161 17.3078L21.6839 16.6922ZM20.0476 13.0559L17.1839 6.69223L15.8161 7.30777L18.6797 13.6714L20.0476 13.0559ZM19.3636 12.6136H13.6364V14.1136H19.3636V12.6136Z"
									fill="#ffffff"
								></path>{" "}
							</g>
						</svg>
						<input
							autocomplete="off"
							placeholder="Full Name"
							style={{
								background: "none",
								border: "none",
								outline: "none",
								width: "100%",
								color: "#d3d3d3",
							}}
							type="text"
							onChange={(e) => {
								setfullName(e.target.value);
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
							<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
						</svg>
						<input
							autocomplete="off"
							placeholder="Author"
							style={{
								background: "none",
								border: "none",
								outline: "none",
								width: "100%",
								color: "#d3d3d3",
							}}
							type="text"
							onChange={(e) => {
								setAuthor(e.target.value);
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
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
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
								width: "auto",
								padding: "0.5em",
								paddingLeft: "1.1em",
								paddingRight: "1.1em",
								borderRadius: "5px",
								marginRight: "0.5em",
								border: "none",
								outline: "none",
								transition: "0.4s ease-in-out",
								backgroundColor: "#252525",
								color: "white",
								marginBottom: "75px",
							}}
							type="submit"
							value="   Signup   "
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
								backgroundColor: "#252525",
								color: "white",
								marginBottom: "75px",
							}}
							onClick={() => {
								navigate("/login");
							}}
						>
							Login
						</button>
					</div>
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

export default Signup;
