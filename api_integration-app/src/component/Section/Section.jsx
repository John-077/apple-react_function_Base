import React from "react";
import "../css/styles.css";
import "../css/bootstrap.css";
// import "../js/bootstrap.js";
import mac from "../images/home/mac-laptop.jpg";
import watch from "../images/icons/watch-series5-logo.png";
import apple from "../images/icons/apple-card-logo.png";
import tv1 from "../images/icons/apple-tv-logo.png";
import servant from "../images/icons/servant-logo.png";
import tipad from "../images/icons/new-ipad-logo.png";
import YouTubeApi from "../YouTubeApi/YouTubeApi";

function Section() {
  return (
    <>
      <section className="first-section container-fluid">
        <div className="first-wrapper text-center">
          <div className="model">16-inch model</div>
          <div className="mac">MacBook Pro</div>
          <div className="brightest">The best for the brightest</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-pro-og-202410?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1728658184478"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section-2 container-fluid">
        <div className="secnde-wrapper text-center">
          <div className="iphone pt-5">iPhone 11 Pro</div>
          <div className="cameras">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="from">From $24.95/mo. or $599 with trade-in.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-3 container-fluid">
        <div className="links-wrapper-3 text-center">
          <div className="iphone pt-5">iPhone 11</div>
          <div className="just">Just the right amount of evreything.</div>
          <div className="from">
            From $16.62/mo. or $399 with trade trade-in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-4 container-fluid text-center row">
        <div className="watch col-md-6">
          <div className="watchjpg pt-1">
            <img src={watch} alt="" />
          </div>
          <div className="new pt-3">
            With the new Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Card col-md-6">
          <div className="watchjpg pt-1">
            <img src={apple} alt="" />
          </div>
          <div className="new pt-3">
            Get 3% Daily Cash on purchases from
            <br />
            Apple using Apple Card.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-5 container-fluid text-center row">
        <div className="left-wrapper col-md-6">
          <div className="tv pt-5">
            <img src={tv1} alt="" />
          </div>
          <div className="servant">
            <img src={servant} alt="" />
          </div>
          <div className="wach">
            <a href="#">wach the trailer</a>
          </div>
        </div>
        <div className="airpod pt-5 col-md-6">
          <div className="air">AirPods Pro</div>
          <div className="you">Magic like you’ve never heard.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-6 container-fluid text-center row">
        <div className="inch pt-5 col-md-6">
          <div className="model ">16-inch model</div>
          <div className="macBook">MacBook Pro</div>
          <div className="best">The best for the brightest.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="iPad pt-5 col-md-6">
          <div className="">
            <img src={tipad} alt="" />
          </div>
          <div className="like pt-3">Like a computer. Unlike any computer.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <YouTubeApi/>
    </>
  );
}

export default Section;
