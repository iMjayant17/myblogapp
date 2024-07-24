import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const YourProfile = () => {
	const [activeTab, setActiveTab] = useState("account-general");
	const [formData, setFormData] = useState({
		author: "ksdjflka",
		fullName: "jsndfljas",
		college: "Company Ltd.",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		birthday: "May 3, 1995",
		country: "Canada",
		phone: "+0 (123) 456 7891",
		website: "",
		twitter: "https://twitter.com/user",
		facebook: "https://www.facebook.com/user",
		googlePlus: "",
		linkedIn: "",
		instagram: "https://www.instagram.com/user",
	});
	const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
	const navigate = useNavigate();
	const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
		setFormData({
			...formData,
			[name]: value,
		});
	};

  useEffect(() => {
    const id = localStorage.getItem('id')
    axios.get("https://restful-blog-api-gxyi.onrender.com/detail/"+id, {
      headers: {
          Authorization:'Bearer '+localStorage.getItem('token')
      }
  })
		.then(response => {
			var val = response.data.result.college
			if(val == null || val==="") val = "N/A"
          setFormData({...formData , author:response.data.result.author,fullName:response.data.result.fullName,college:val})
            console.log(response.data.result)
        })
        .catch(err => {
        console.log(err);
    })
  }, [])

  const updateHandler = () => {
    const id = localStorage.getItem('id')
    console.log("clicked")
    const data = {fullName:formData.fullName , author:formData.author,college:formData.college}
    axios.post("https://restful-blog-api-gxyi.onrender.com/detail/" + id, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
		  console.log(response.data)
		  setAlert({ open: true, message: 'Profile Updated Successfully', severity: 'success' })
		  setTimeout(() => {
			  navigate("/");
		  }, 2000);
		  
      })
      .catch(err => {
		  console.log(err) 
		  setAlert({ open: true, message: 'Error Updating Profile', severity: 'error' })
        })
  }
  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };
	return (<>
		<div style={styles.container}>
			<h4 style={styles.header}>Account settings</h4>
			<div style={styles.card}>
				<div style={styles.row}>
					<div style={styles.sidebar}>
						<div style={styles.listGroup}>
							<Link
								style={{
									...styles.listGroupItem,
									...(activeTab === "account-general" ? styles.activeTab : {}),
								}}
								onClick={() => setActiveTab("account-general")}
							>
								General
							</Link>
							<Link
								style={{
									...styles.listGroupItem,
									...(activeTab === "account-change-password"
										? styles.activeTab
										: {}),
								}}
								onClick={() => setActiveTab("account-change-password")}
							>
								Change password
							</Link>
							<Link
								style={{
									...styles.listGroupItem,
									...(activeTab === "account-info" ? styles.activeTab : {}),
								}}
								onClick={() => setActiveTab("account-info")}
							>
								Info
							</Link>
						</div>
					</div>
					<div style={styles.content}>
						<div>
							{activeTab === "account-general" && (
								<div style={styles.tabContent}>
									<div style={styles.media}>
										<img
											src="https://bootdey.com/img/Content/avatar/avatar1.png"
											alt="Avatar"
											style={styles.avatar}
										/>
										<div style={styles.mediaBody}>
											<label style={styles.uploadLabel}>
												Upload new photo
												<input type="file" style={styles.fileInput} />
											</label>
											<button style={styles.resetButton}>Reset</button>
										</div>
									</div>
									<hr style={styles.divider} />
									<div style={styles.formGroup}>
										<label style={styles.formLabel}> Author</label>
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
											<input
                        placeholder="author"
                        name="author"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value={formData.author}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Full Name</label>
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
											<input
                        placeholder="Full Name"
                        name="fullName"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value={formData.fullName}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>College</label>
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
											<input
                        placeholder="College"
                        name="college"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value={formData.college}
												onChange={handleInputChange}
											/>
										</div>
									</div>
								</div>
							)}
							{activeTab === "account-change-password" && (
								<div style={styles.tabContent}>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Current password</label>
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
											<input
												placeholder="Password"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value="safs"
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>New password</label>
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
											<input
												placeholder="Password"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value="safs"
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Repeat new password</label>
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
											<input
												placeholder="Password"
												style={{
													background: "none",
													border: "none",
													outline: "none",
													width: "100%",
													color: "#d3d3d3",
												}}
												type="text"
												value="safs"
												onChange={handleInputChange}
											/>
										</div>
									</div>
								</div>
							)}
							{activeTab === "account-info" && (
								<div style={styles.tabContent}>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Bio</label>
										<textarea
											style={styles.textArea}
											rows="5"
											value={formData.bio}
											name="bio"
											onChange={handleInputChange}
										></textarea>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Birthday</label>
										<input
											type="text"
											style={styles.formControl}
											value={formData.birthday}
											name="birthday"
											onChange={handleInputChange}
										/>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Country</label>
										<select
											style={styles.select}
											value={formData.country}
											name="country"
											onChange={handleInputChange}
										>
											<option>USA</option>
											<option>Canada</option>
											<option>UK</option>
											<option>Germany</option>
											<option>France</option>
										</select>
									</div>
									<hr style={styles.divider} />
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Phone</label>
										<input
											type="text"
											style={styles.formControl}
											value={formData.phone}
											name="phone"
											onChange={handleInputChange}
										/>
									</div>
									<div style={styles.formGroup}>
										<label style={styles.formLabel}>Website</label>
										<input
											type="text"
											style={styles.formControl}
											value={formData.website}
											name="website"
											onChange={handleInputChange}
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
      </div>
      <button style={{
        width: '10%',
        fontSize:"110%",
        backgroundColor: "grey",
        margin: "auto",
        border: "1px solid grey",
        borderRadius: "4px",
        color: "white",
        marginLeft: "45%",
        marginTop: "2%",
        cursor: "pointer",
      }} onClick={updateHandler}>Update</button>
		</div>
		<Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
		</>
		
	);
};

const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		maxWidth: "1000px",
		margin: "0 auto",
		padding: "20px",
	},
	header: {
		fontWeight: "bold",
		paddingBottom: "20px",
		borderBottom: "2px solid #e0e0e0",
	},
	card: {
		border: "1px solid #e0e0e0",
		borderRadius: "5px",
		overflow: "hidden",
		boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
	},
	row: {
		display: "flex",
		flexDirection: "row",
	},
	sidebar: {
		flex: "1",
		borderRight: "1px solid #e0e0e0",
	},
	listGroup: {
		listStyleType: "none",
		padding: "0",
		margin: "0",
	},
	listGroupItem: {
		padding: "15px 20px",
		cursor: "pointer",
		textDecoration: "none",
		color: "white",
		display: "block",
		borderBottom: "1px solid #e0e0e0",
	},
	activeTab: {
		backgroundColor: "grey",
		fontWeight: "bold",
	},
	content: {
		flex: "3",
		padding: "20px",
	},
	tabContent: {
		padding: "20px",
		backgroundColor: "#1E1E1E",
		borderRadius: "10px",
	},
	media: {
		display: "flex",
		alignItems: "center",
		marginBottom: "20px",
	},
	avatar: {
		borderRadius: "50%",
		width: "80px",
		height: "80px",
	},
	mediaBody: {
		marginLeft: "20px",
	},
	uploadLabel: {
		display: "inline-block",
		padding: "10px 20px",
		border: "1px solid #007bff",
		borderRadius: "5px",
		color: "white",
		cursor: "pointer",
	},
	fileInput: {
		display: "none",
	},
	resetButton: {
		marginLeft: "10px",
		padding: "10px 20px",
		border: "1px solid green",
		borderRadius: "5px",
		color: "white",
		cursor: "pointer",
		backgroundColor: "green",
	},
	allowedFormats: {
		marginTop: "10px",
		color: "white",
		fontSize: "12px",
	},
	divider: {
		border: "0",
		height: "1px",
		backgroundColor: "white",
		margin: "20px 0",
	},
	formGroup: {
		marginBottom: "20px",
	},
	formLabel: {
		display: "block",
		marginBottom: "5px",
		fontWeight: "bold",
	},
	formControl: {
		width: "100%",
		padding: "10px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		fontSize: "14px",
	},
	textArea: {
		width: "100%",
		padding: "10px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		fontSize: "14px",
	},
	select: {
		width: "100%",
		padding: "10px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		fontSize: "14px",
	},
	alert: {
		marginTop: "10px",
		padding: "10px",
		borderRadius: "5px",
		backgroundColor: "brown",
		color: "#a94442",
		fontSize: "14px",
	},
	connectButton: {
		padding: "10px 20px",
		border: "1px solid #007bff",
		borderRadius: "5px",
		color: "red",
		cursor: "pointer",
		marginBottom: "20px",
	},
	connectionInfo: {
		marginBottom: "20px",
	},
	connectionHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "10px",
	},
	removeConnection: {
		color: "#d9534f",
		cursor: "pointer",
	},
	connectionIcon: {
		marginRight: "10px",
		color: "#007bff",
	},
	notifications: {
		marginBottom: "20px",
	},
};

export default YourProfile;
