import { redirect } from "react-router-dom";

export function isLogin() {
    
    const token = localStorage.getItem('token');
    if (!token) {
        return redirect('/login');
    }
    else return null;

}