import "../../styles/infoCard.css";

export default function InfoCard({ posting }) {
  return (
    <div className="scrollable-info-container">
      <div className="job-info-container">{posting.title}</div>
    </div>
  );
}
