import React , {useState } from "react";
import "./App.css";
import avatar from "./images/avatar.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";


const eye = < AiOutlineEye/>;




function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  return (
    <div className="App">
      <div className="form-container">
        <div className="icon">
          <IoChevronBackCircleOutline />
          <label> Back </label>
        </div>
        <div className="image-details">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="avatar-content">
          <h5> Personal account </h5>
          <h2> Andrew@polka.io </h2>
        </div>
        <div className="form-content">
          <label> Password </label>
          <form>
            <input 
            name="password"
            type={passwordShown ? "text" : "password"} 
            /> 
            <i onClick={togglePasswordVisiblity}>{eye}</i>
            <h6>
              {" "}
              Forgot Password? <span> Reset </span>
            </h6>
          </form>
        </div>
        <div className="form-submit">
          <div>
            <input type="checkbox" id="sign-in" name="sign-in" checked />
            <label for="sign-in"> Stay signed in </label>
          </div>

          <button> Sign in </button>
        </div>

        <div className="footer">
          <hr />
          <h6>
            This site is protected by reCAPTCHA and the Google <br /> Privacy
            Policy and Terms of Service apply.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
