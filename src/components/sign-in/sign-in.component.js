import { useState } from "react";

const SignIn = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="email"
          type="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
