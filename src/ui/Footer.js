import logo from "./logo.svg";

function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
        </a>
        <a className="navbar-brand" href="/">
          <b>Eicon</b>
        </a>
        <p className="nav-item nav-link active">
          © 2020 <a href="/">Eicon</a>. All Rights Reserved.
        </p>
      </nav>
    </div>
  );
}

export default Footer;
