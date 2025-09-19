
import { Link } from "react-router-dom";
import "./Styling/LandingScreen.css";
export const LandingScreen = () => {
  return (
    <div className="landing-screen">
      <div className="welcome-text">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <div className="buttons">
        <Link to= "/Register" className="btn-primary">Create Account </Link>
        <Link to="/LoginPage" className="btn-secondary">Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
