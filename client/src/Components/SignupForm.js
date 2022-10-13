import React, { useState } from "react";

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (

    <div className="container">
        <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Acccount</h2>
                </div>
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="username">
                        <label className="label">Username</label>
                        <input
                            className="input"
                            type="text"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input
                            className="input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="passord">
                        <label className="label">Password Confirmation</label>
                        <input
                            className="input"
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="bio">
                        <label className="label">Bio</label>
                        <textarea
                            className="input"
                            rows="3"
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="submit" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                    </div>
                    <div>
                        {errors.map((err) => (
                        <error key={err}>{err}</error>
                        ))}
                    </div>

                </form>
                  
        </div>
    </div>
  );
}

export default SignupForm;
