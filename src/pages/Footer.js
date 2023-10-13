import React from "react";

function Footer() {
  return (
    <div className="mb-4">
      <div className="footer">
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
          <a href="tel:+74951234567">
            +7 (495) 123-45-67
          </a>
        </div>
        <div className="phone">
          <i className="bi bi-geo-alt-fill"></i>
          г. Москва, ул. Тверская, дом. 1
        </div>
      </div>
      <div className="d-flex align-content-center justify-content-center">
        @2023PetrovaVera
      </div>
    </div>
  )
};

export default Footer;
