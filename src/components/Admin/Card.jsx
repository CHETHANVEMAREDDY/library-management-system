import React from "react";
import "../CSS/cards.css";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="sec1">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2018/10/DSC_0838-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="card c0">
          <p style={{ color: "grey", fontSize: "0.9rem" }}>EXPLORE</p>
          <p className="heading">E-books</p>
          <p className="fs-sm">
            OverDrive Download thousands of eBooks directly to your device,
            including the hard-to-get ebook Express Collection. Check out up to
            20 items and hold up to 15 items. Explore OverDrive
          </p>
        </div>
      </div>
      <div className="sec1">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2021/11/LinkedInLearning-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="card c1">
          <p style={{ color: "grey", fontSize: "0.9rem" }}>EXPLORE</p>
          <p className="heading"> Digital Learning</p>
          <p className="fs-sm">
            LinkedIn Learning (formerly Lynda) is an online educational site
            that features thousands of courses and video tutorials where you can
            discover, complete, and track courses related to your field and
            interests.
          </p>
        </div>
      </div>
      <div className="sec1">
        <div className="img">
          <img
            src="https://www.greenwichlibrary.org/wp-content/uploads/2018/10/DSC_0824-1024x400.jpg"
            alt=""
          />
        </div>
        <div className="card c2">
          <p style={{ color: "grey", fontSize: "0.9rem" }}>EXPLORE</p>
          <p className="heading">Magazines</p>
          <p className="fs-sm">
            Magazines For your convenience, thousands of magazines are available
            now to borrow through OverDrive and Libby. This includes hot titles
            like The Economist and Bon Appetit. (Formerly available through
            RBdigital.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
