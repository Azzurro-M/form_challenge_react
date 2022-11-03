import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "oleg", password: "111111" },
  ]);

  const userExists = (user, pass) => {
    for (let account of accounts) {
      if (account.username === user && account.password === pass) {
        return true;
      }
      return false;
    }
  };

  const onSubmit = (e) => {
    // alert('submit')
    //YOUR CODE HERE
    if (userExists(username, password)) {
      alert("Logged in Successfully!");
    } else if (username.lenght > 6 && password.lenght > 6) {
      setAccounts([...accounts, { username, password }]);
      alert("new account created");
    } else {
      alert("username and password need to be above 6 carachters");
    }
    setUsername("");
    setPassword("");
  };

  const onUsernameChange = (e) => {
    e.target.value.length < 20
      ? setUsername(e.target.value)
      : alert("Username too long.");
  };

  const onPasswordChange = (e) => {
    e.target.value.length < 20
      ? setPassword(e.target.value)
      : alert("Username too long.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <Form
        username={username}
        password={password}
        onSubmit={onSubmit}
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
      />
    </div>
  );
}

export default App;
