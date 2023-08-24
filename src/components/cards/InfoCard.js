import "../../styles/infoCard.css";
import { formatDate } from "../../lib/utils";
import { useState } from "react";
import ShareModal from "../modals/ShareModal";

export default function InfoCard({
  posting,
  modalStatus,
  openModal,
  closeModal,
}) {
  return (
    <div className="scrollable-info-container">
      <div className="job-info-container">
        <div className="job-info-top-card">
          <img
            className="job-info-company-logo"
            src={posting.img}
            alt="company logo"
            width={65}
            height={65}
          />

          <div>
            <div className="job-info-top">
              <div className="job-info-company-info">
                <p>
                  <span>{posting.company}</span>
                  {posting.companyRating ? (
                    <span style={{ marginLeft: "6px" }}>
                      {posting.companyRating} &#9733;
                    </span>
                  ) : null}
                </p>
                <span>
                  <a href="http://www.google.com" target="_blank">
                    Go to Company Page
                  </a>
                </span>
              </div>
              <div className="job-info-title">
                <a href="/" target="_blank">
                  {posting.title}
                </a>
              </div>
              <div className="job-info-created-at-country">
                <span>{formatDate(posting.createdAt)} ago</span>
                <div className="country">
                  {"  "}
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#838383" }}
                  />{" "}
                  {posting.location}
                </div>
              </div>
              <div className="job-info-cta-buttons">
                <a href="https://www.google.com" target="_blank">
                  <div className="apply-btn">
                    <i
                      className="fa-solid fa-up-right-from-square"
                      style={{ color: "#ffffff" }}
                    />
                    Apply
                  </div>
                </a>
                <button className="save-btn">Save</button>
                <div className="share-btn" onClick={openModal}>
                  <i
                    className="fa-solid fa-share-nodes"
                    style={{ color: "#1fc76a" }}
                  />
                </div>
                <ShareModal
                  posting={posting}
                  isOpen={modalStatus}
                  onClose={() => closeModal()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="breakline"></div>
        <div className="job-info-details">
          {posting.currency && posting.salaryMin && posting.salaryMax ? (
            <div>
              <b>Salary</b>
              <div style={{ marginBottom: "2px" }}>
                {posting.currency +
                  posting.salaryMin +
                  " - " +
                  posting.currency +
                  posting.salaryMax}{" "}
                / Monthly
              </div>
            </div>
          ) : null}

          <div className="full">
            <b>Tech Stacks</b>
            <div style={{ marginBottom: "2px" }}>
              {posting.skills.map((skill) => (
                <span className="gray-block">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="breakline"></div>
        <div className="job-info-description-content">
          <div className="job-info-description-title">Job Description</div>
          <div className="job-info-description-text">
            We pioneer innovative solutions that treat and keep people out of
            the hospital, empowering them to live healthier, higher-quality
            lives. Our digital health technologies and cloud-connected medical
            devices transform care for people with sleep apnea, COPD and other
            chronic diseases. Our comprehensive out-of-hospital software
            platforms support the professionals and caregivers who help people
            stay healthy in the home or care setting of their choice. By
            enabling better care, we improve quality of life, reduce the impact
            of chronic disease and lower costs for consumers and healthcare
            systems in more than 140 countries.
          </div>
        </div>
        <a className="search-similar-jobs-btn" href="https://www.google.com">
          Search Similar Jobs
        </a>
      </div>
    </div>
  );
}
