import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center">Contact YS Collections</h1>
        <p className="text-center text-muted">
          Reach out to us for any queries or product assistance.
        </p>
        <hr />

        <div className="row my-4">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form-group my-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group my-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div className="form-group my-3">
                <label>Message</label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <div className="text-center">
                <button className="btn btn-dark px-5 mt-2" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

