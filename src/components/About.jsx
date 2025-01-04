import { useEffect, useState } from "react";
import { FaHeadset, FaThumbsUp, FaTruck } from "react-icons/fa";
const About = () => {
    const [loading,setLoading] = useState (true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])
  return (
    <main className=" flex justify-center py-40">
      {loading ? (
        <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-32"></div>
      ) : (
        <section className="container">
          <h1 className="text-center">About Us</h1>
          <section className="mb-5">
            <h2>Who Am I</h2>
            <p>My name is Tola Study at RUPP I'm a Full Stack developer</p>
          </section>
          <section className="mb-5">
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Customer Focus:</strong> We put our customers at the
                center of everything we do.
              </li>
              <li>
                <strong>Quality Products:</strong> We partner with trusted
                suppliers to offer the best products.
              </li>
              <li>
                <strong>Innovation:</strong> We continuously improve our
                platform to provide a top-notch shopping experience.
              </li>
            </ul>
          </section>
          <section className="mb-5">
            <h2>Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-4 d-flex flex-col justify-content-center align-items-center">
                <FaTruck size={40} className="text-center text-primary mb-2" />
                <h4>Fast Delivery</h4>
                <p className="text-center">
                  Get your orders delivered quickly with our reliable shipping
                  options.
                </p>
              </div>
              <div className="col-md-4 d-flex flex-col justify-content-center align-items-center">
                <FaThumbsUp size={40} className="text-primary mb-2" />
                <h4>Trusted Quality</h4>
                <p className="text-center">
                  We ensure every product meets our high standards of quality
                  and reliability.
                </p>
              </div>
              <div className="col-md-4 d-flex flex-col justify-content-center align-items-center">
                <FaHeadset size={40} className="text-primary mb-2" />
                <h4>24/7 Support</h4>
                <p className="text-center">
                  Our customer support team is available around the clock to
                  assist you.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-5">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:support@ecommerce.com">
                  saroeuntola123@gmail.com
                </a>
              </li>
              <li>Phone: +855 88 899 0692</li>
              <li>Address: st1988, Khan Sensok, Phnom Penh</li>
            </ul>
          </section>
        </section>
      )}
    </main>
  );
}

export default About;