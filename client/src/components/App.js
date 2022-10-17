import React, { useState, useEffect} from "react";
import "../Css/App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import PostArticle from "./PostArticle";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import UserAccount from "./UserAccount";


function App() {

  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setUserPosts(user.posts)
        });
       
      }
    });
    
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

	return (
		<div className="App">
      <Navbar  user={user} setUser={setUser} />
			<Routes>
      <Route exact path='/account' element={<Home/>}/>
      <Route exact path='/sign_up' element={<Signup setUser={setUser}/>}/>
      <Route exact path='/post_blog' element={<PostArticle/>}/>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/login' element={<LoginForm setUser={setUser}/>}/>
      <Route exact path='/user' element={<UserAccount user={user} userPosts={userPosts}/>}/>
      </Routes>
		</div>
	);
}

export default App;
