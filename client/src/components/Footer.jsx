import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-dark text-center text-light">Copyright ⓒ {year}</footer>
  );
}

export default Footer;
