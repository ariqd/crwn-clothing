import { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  //   const [displayName, setDisplayName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setState(initialState);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={(e) => handleChange(e)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          onChange={(e) => handleChange(e)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={(e) => handleChange(e)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
