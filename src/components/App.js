import AppRouter from "components/Router";
import React, {useState} from "react"
import {authService} from "fb";
import Home from "routes/Home";


function App() {
    console.log("approuter")
    
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    console.log(authService.currentUser);
    return <AppRouter />;
}

export default App;
