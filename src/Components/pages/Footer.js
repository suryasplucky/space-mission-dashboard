import React from "react";

const Footer = () => {
  return (
    <footer class="bg-body-tertiary text-center">
      <div class="container p-0 pb-0">
        <section class="mb-1">
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#3b5998'}}
            href="/"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#55acee'}}
            href="/"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#dd4b39'}}
            href="/"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#ac2bac'}}
            href="/"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#0082ca'}}
            href="/"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#333333'}}
            href="/"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
      >
        © 2024 Copyright:
        <a class="text-body" href="/">
          Space Mission Project
        </a>
      </div>
    </footer>
  );
};

export default Footer;
