import "../style/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footerContainer">
      <p>copyright {currentYear}</p>
    </div>
  );
}

export default Footer;
