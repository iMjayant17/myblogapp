import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardNormal from "./components/DashboardNormal";
import CreatePost from "./components/CreatePost";
import YourPost from "./components/YourPost";
import YourProfile from "./components/YourProfile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AllPost from "./components/AllPost"
import { isLogin } from "./utils/checkAuth";


const router = createBrowserRouter([
	{	
		path: "/",loader:isLogin,element: <DashboardNormal/>,
		children: [
			{ path: "/", element:<AllPost/> },
			{ path: "/createPost", element: <CreatePost /> },
			{ path: "/post", element: <YourPost /> },
			{ path: "/profile", element: <YourProfile /> },
		],
	},
	{path:"/login" ,element:<Login/>
	}
	,
	{ path: "/signup", element: <Signup />, },
	{path:"*",element:<p>This page doesn't exist !!! </p>}
	
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
