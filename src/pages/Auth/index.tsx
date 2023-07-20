export const Auth = () => {
  return (
    <section className="auth">
      <h1 className="auth__login">Login</h1>
      <div className="auth__content">
        <input type="email" placeholder="Email" className="auth__email" />
        <input
          type="password"
          placeholder="Password"
          className="auth__password"
        />
        <a className="auth__forgot" href="">
          forgot your password
        </a>
        <button className="auth__signin">Sign in</button>
        <a className="auth__create" href="">
          Create account
        </a>
      </div>
    </section>
  );
};
