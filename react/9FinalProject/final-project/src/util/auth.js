import { redirect } from "react-router-dom";

export function checkAuthLoader() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(!isLoggedIn){
        return redirect('/auth?mode=login');
    }

    return null;
};