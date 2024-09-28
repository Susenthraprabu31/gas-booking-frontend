import React from "react";
import aboutImage from "./About.jpg";

const About = () => {
  return (
    <div>
      <section className="bg-dark">
        <div className="container">
          <div className="py-5">
            <div className="row align-items-center justify-content-evenly">
              <p className="text-white display-4 py-3 text-center">About Us</p>
              <div className="col-lg-6 text-center">
                <img
                  src={aboutImage}
                  alt="About CloudNiine"
                  className="about-img shadow-lg img-fluid rounded-3"
                />
              </div>
              <div className="col-lg-6">
                <div className="mx-1">
                  <p className="display-2 text-white font-curv text-start">
                  PLESANT ENERGY
                  </p>
                  <p className="text-white m-4">
                    At Plesant Energy, we're committed to transforming the way you
                    refuel. Our innovative gas slot booking app is designed to
                    eliminate the hassles of traditional refueling by providing
                    a seamless, efficient, and stress-free experience. With
                    Energy, you can book your gas slots in advance, skip the
                    long lines, and enjoy peace of mind knowing that you'll
                    never run out of gas. Our mission is to deliver convenience,
                    reliability, and satisfaction to every driver, ensuring that
                    your journey is always smooth and enjoyable. Join us at
                    Plesant Energy and elevate your refueling experience to new
                    heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
