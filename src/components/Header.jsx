import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className=" deep-purple darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Alex-Deina/Food"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
