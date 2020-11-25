import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import UserContext from "./Context/userContext";
import Axios from 'axios';
import Admindash from './Admin/MainView';
function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData}}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" exact component={Signup} />
            <Route path="/admindash" component={Admindash} />
          </Switch>
          </UserContext.Provider>
      </BrowserRouter>
    
         
    </div>
  );
}

export default App;
