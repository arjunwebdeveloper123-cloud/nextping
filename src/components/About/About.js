import React from "react";
import "./About.css";

const features = [
  {
    icon: "bi-lightbulb",
    label: "Simplified Learning",
    colorClass: "icon-purple",
  },
  {
    icon: "bi-person-workspace",
    label: "Expert Trainers",
    colorClass: "icon-green",
  },
  {
    icon: "bi-trophy",
    label: "Big Experience",
    colorClass: "icon-orange",
  },
  {
    icon: "bi-infinity",
    label: "Lifetime Access",
    colorClass: "icon-blue",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&crop=face",
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ===== LEFT SIDE — Image Gallery ===== */}
          <div className="col-lg-6">
            <div className="about-gallery">

              {/* Main Image */}
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Students collaborating in a modern classroom"
                />
              </div>

              {/* Floating Video */}
              <div className="about-video-float">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
                />
              </div>

              {/* Stats Badge */}
              <div className="about-stats-badge">
                <span className="stats-number">50K+</span>
                <span className="stats-label">Active Learners</span>
              </div>

              {/* Experience Badge */}
              <div className="about-experience-badge">
                <div className="exp-icon">
                  <i className="bi bi-award"></i>
                </div>
                <div className="exp-text">
                  <strong>10+ Years</strong>
                  <span>Teaching Excellence</span>
                </div>
              </div>

            </div>
          </div>

          {/* ===== RIGHT SIDE — Content ===== */}
          <div className="col-lg-6">
            <div className="about-content">

              {/* Subtitle */}
              <div className="about-subtitle">
                <i className="bi bi-mortarboard"></i>
                About Us
              </div>

              {/* Heading */}
              <h2 className="about-heading">
                We Maximize Your{" "}
                <span className="heading-highlight">Learning Growth</span>{" "}
                With Expert Guidance
              </h2>

              {/* Description */}
              <p className="about-description">
                We provide a modern Learning Management System designed to
                simplify online education, track real-time progress, and
                enhance meaningful student-instructor collaboration — all in
                one powerful platform.
              </p>

              {/* Feature Cards */}
              <div className="about-features">
                {features.map((feature, index) => (
                  <div key={index} className="about-feature-card">
                    <div className={`about-feature-icon ${feature.colorClass}`}>
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <span className="feature-label">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="about-cta-wrapper">
                <a href="#explore" className="about-btn-primary">
                  Explore Courses
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#learn-more" className="about-btn-outline">
                  <i className="bi bi-play-circle"></i>
                  Watch Demo
                </a>
              </div>

              {/* Trusted By */}
              <div className="about-trusted">
                <div className="about-trusted-label">Trusted by thousands</div>
                <div className="about-trusted-avatars">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Learner ${i + 1}`}
                      className="avatar-circle"
                    />
                  ))}
                  <div className="avatar-more">+5K</div>
                </div>
                <div className="about-trusted-info">
                  <div className="about-trusted-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span>4.8</span>
                  </div>
                  <span className="about-trusted-count">
                    from 2,400+ reviews
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
