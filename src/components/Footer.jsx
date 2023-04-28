function Footer() {
  return (
    <footer className="page-footer   lime darken-1">
      <div className="container"></div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Alex-Deina/Food"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
