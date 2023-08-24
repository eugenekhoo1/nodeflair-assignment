import "../../styles/jobCard.css";
import { formatDate } from "../../lib/utils";

export default function JobCard({ posting, active, onJobCardClick }) {
  const handleClick = () => {
    onJobCardClick();
  };

  return (
    <div style={{ padding: "5px" }} key={posting.pid}>
      <div
        className="job-listing-card"
        style={{
          border: active ? "2px solid #1fc76a" : "none",
          boxShadow: "0px 0px 2px #00000040",
        }}
        onClick={handleClick}
      >
        <div className="job-listing-card-container">
          <div className="job-listing-card-info">
            <img
              className="company-logo"
              src={posting.img}
              alt="company logo"
              height={45}
              width={45}
            />
            <div className="information-container">
              <p>
                <span>{posting.company}</span>
                {posting.companyRating ? (
                  <span style={{ marginLeft: "6px" }}>
                    {posting.companyRating} &#9733;
                  </span>
                ) : null}
              </p>
              <h2>{posting.title}</h2>
            </div>
            <div className="specialisation-container">
              <div className="specialisation-tag">{posting.specialisation}</div>
            </div>
          </div>
          <div className="job-listing-card-details">
            <div className="created-at-country">
              <span className="created-at">
                {formatDate(posting.createdAt)} ago
              </span>
              <div className="country">
                {"  "}
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#838383" }}
                />{" "}
                {posting.location}
              </div>
            </div>
            <p className="job-listing-card-salary">
              {posting.currency && posting.salaryMin && posting.salaryMax ? (
                <span>
                  {posting.currency +
                    posting.salaryMin +
                    " - " +
                    posting.currency +
                    posting.salaryMax +
                    " / mth "}
                </span>
              ) : null}
            </p>
          </div>
          <div className="job-listing-card-skills">
            {posting.skills
              ? posting.skills.map((skill) => (
                  <>
                    <span>{skill}</span>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
