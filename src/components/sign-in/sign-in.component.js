import { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const defaultValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [state, setState] = useState(defaultValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setState(defaultValue);
    } catch (error) {
      console.error(error);
    }

    setState(defaultValue);
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
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={(e) => handleChange(e)}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={(e) => handleChange(e)}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
