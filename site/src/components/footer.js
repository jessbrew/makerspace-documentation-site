import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className=" bg-dark text-white mt-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className="mb-0">&copy; Wisconsin Lutheran College 2024</p>
          <p className="mb-0">Empowering students to lead and serve.</p>
        </div>
      </div>
    </footer>
  );
}
