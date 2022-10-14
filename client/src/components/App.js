import React, { useState, useEffect} from "react";
import "../Css/App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import PostArticle from "./PostArticle";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

	return (
		<div className="App">
      <Navbar  user={user} setUser={setUser} />
			<Routes>
      <Route exact path='/account' element={<Home/>}/>
      <Route exact path='/sign_up' element={<Signup/>}/>
      <Route exact path='/post_blog' element={<PostArticle/>}/>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      </Routes>
		</div>
	);
}

export default App;
