import React from "react";
import "./About.css";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic, MdVerified } from "react-icons/md";

const stats = [
  { icon: "🏪", value: "10.5k", label: "Sellers active our site" },
  { icon: "💰", value: "33k",   label: "Monthly Product Sale",  highlight: true },
  { icon: "🛍️", value: "45.5k", label: "Customer active in our site" },
  { icon: "📈", value: "25k",   label: "Annual gross sale in our site" },
];

const team = [
  { name: "Tom Cruise",    role: "Founder & Chairman",  img: "/imgs/Frame 684img.svg" },
  { name: "Emma Watson",   role: "Managing Director",   img: "/imgs/Frame 685imgright.svg" },
  { name: "Will Smith",    role: "Product Designer",    img: "/imgs/Frame 686dslkmksmdf;klam.svg" },
];

const services = [
  { icon: <TbTruckDelivery />,  title: "FREE AND FAST DELIVERY",   desc: "Free delivery for all orders over $140" },
  { icon: <MdHeadsetMic />,     title: "24/7 CUSTOMER SERVICE",    desc: "Friendly 24/7 customer support" },
  { icon: <MdVerified />,       title: "MONEY BACK GUARANTEE",     desc: "We return money within 30 days" },
];

function About() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="about-page">
        <div className="container">

          {/* Breadcrumb */}
          <div className="about-breadcrumb">
            <span>Home</span> / <span className="active">About</span>
          </div>

          {/* Story */}
          <div className="about-story">
            <div className="about-story-left">
              <h1>Our Story</h1>
              <p>
                Launched in 2015, Exclusive is South Asia's premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer electronics to fashion.
              </p>
            </div>
            <div className="about-story-right">
              <img src="/imgs/girlsimg.svg" alt="Our Story" />
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className={`about-stat-card ${s.highlight ? "highlight" : ""}`} key={i}>
                <div className="stat-icon">{s.icon}</div>
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="about-team">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-socials">
                  <FiTwitter />
                  <FiInstagram />
                  <FiLinkedin />
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="about-services">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
