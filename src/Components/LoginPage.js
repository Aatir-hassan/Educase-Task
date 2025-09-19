import "./Styling/LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="main">
      <div className="login-container">
        <h2>
          Signin to your <br />
          PopX account
        </h2>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form>
          <div className="form-group">
            <input
              type="text"
              id="email"
              placeholder=""
              required
            />
            <label for="email">Email address*</label>
          </div>

          <div class="form-group">
            <input type="password" id="password" placeholder="" required />
            <label for="email">Password*</label>
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
