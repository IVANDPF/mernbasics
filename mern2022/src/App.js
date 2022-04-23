import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import Form from './components/Form'
import React from "react";
import Dashboard from './components/Dashboard';


function App() {
  const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: ""
  });

  return (
    <div className="App">
      <h1>WELCOME TO THE CACAO WEB PAGE</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Form state={state} setState={setState}/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;