import Form from './components/Form'
import './App.css';
import React from "react";

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
      <Form state={state} setState={setState} />
    </div>
  );
}

export default App;