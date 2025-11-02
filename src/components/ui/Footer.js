const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <span>Copyright</span>
      <strong className="px-1 sitename">Toni Stuckey</strong>
      <span>All Rights Reserved</span>
      <div className="credits">
        Designed by <a href="https://www.squarespace.com/">Squarespace</a>
      </div>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;
