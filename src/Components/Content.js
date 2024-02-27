import React from "react";
import "./Content.css";
import videoFile from "./videos/full-video.mp4";
import advicePkgImage from "./images/advice_pkg_image.jpg";
import applicationPkg from "./images/application-pkg.jpg";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="container-fluid content my-4">
      <div className="video w-100 container">
        <video className="video-player" controls autoPlay muted>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className="pricing-section container">
        <h1 className="my-1">AFFORDABLE PRICES FOR JANUARY AND FEBRUARY:</h1>
        <br />
        <div
          className="row row-cols-1 row-cols-md-3 g-4 "
          style={{ marginBottom: "5px" }}
        >
          <div className="col">
            <div className="card h-100">
              <img src={advicePkgImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Advice Packages</h5>
                Price:
                <button className="btn btn-outline-success mx-2"> €100</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={applicationPkg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Application Packages:</h5>
                <p className="pkg-info">2 Consultations</p>
                Price:
                <button className="btn btn-outline-success mx-2">€150</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={advicePkgImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Premium Packages:</h5>
                <p className="pkg-info">
                  One Consultation faster following your deadline
                </p>
                Price:
                <button className="btn btn-outline-success mx-2">€150</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 info-section">
        <h3>Equality Immigration and Visa Services Ireland.</h3>
        <h4>What do we do?</h4>
        <p>
          Consultancy advice on Immigration, Employment (Critical Skills,
          General Employment and etc) and Visas in Ireland.
        </p>
        <h2>Why we are different?</h2>
        <p>
          We provide professional services with support, advice, and further
          information and the necessary representation required and will assist
          you in submitting your applications to the various governmental
          department
        </p>
        <h2>Why choose us?</h2>
        <p>
          Support, advice, information and the necessary representation.
          <br />
          Are you looking for a visa to enter, live, travel, work and invest in
          Ireland?
          <br />
          We are immigration consultants and assist our clients in submitting
          visa applications of the highest quality. Call us on (+353) 874797439
          for immediate support and advice with your immigration case. We can
          speak over the phone or by zoom call.
          <br />
          WhatsApp: +353874797439
        </p>
      </div>
      <div class="container-fluid text-light">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <Link to="contact-us" class="nav-link px-2 text-body-secondary">
                Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="faqs" class="nav-link px-2 text-body-secondary">
                FAQs
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about-us" class="nav-link px-2 text-body-secondary">
                About
              </Link>
            </li>
          </ul>
          <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Content;
