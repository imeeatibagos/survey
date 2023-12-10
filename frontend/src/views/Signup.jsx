export default function Signup() {
  return (
    <>
      <h2 className="signup">Sign up for free</h2>

      <div className="signup-form">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="sign-email">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="signup-email-box"
              />
            </div>
          </div>

          <div>
            <div className="sign-pass">
              <label htmlFor="password" className="sign-label">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="sign-password">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="sign-current"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="signup-button
                "
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
