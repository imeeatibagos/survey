export default function Login() {
  return (
    <>
      <h2 className="login">Sign in to your account</h2>

      <div className="login-form">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="email">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="email-box"
              />
            </div>
          </div>

          <div>
            <div className="pass">
              <label htmlFor="password" className="pass-label">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="password">
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
                className="current-pass"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="submit-form
                "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
