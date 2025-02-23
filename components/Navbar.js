const navbar = document.getElementById("navbar");
navbar.classList.add("navbar");

Navbar();
function Navbar() {
  navbar.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("justify-");
  
  div.innerHTML = `
    <a class="navbar-brand brand-logo" href="./index.html">
                <img
                  class="img-fluid"
                  src="images/dscrutiny_cover-removebg-preview.png"
                  alt="DSCRUTINY"
                  srcset=""
                />
          </a>
          <button
            class="navbar-toggler rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="./aboutUs.html"
                  >About Us</a
                >
              </li>
              <li class="nav-item ms-md-1">
                <a class="nav-link" href="./service.html">Services</a>
              </li>
              <li class="nav-item ms-md-1">
                <a class="nav-link" href="./Blog.html">Blog</a>
              </li>
              <li class="nav-item mx-md-1">
                <a class="nav-link" href="./contact.html">Contact us</a>
              </li>
            </ul>
          </div>
    `;
  navbar.appendChild(div);
}