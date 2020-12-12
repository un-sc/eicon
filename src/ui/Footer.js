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
          Eicon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-item nav-link active" href="#">
              © 2020 <a href="/">Eicon</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
