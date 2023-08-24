import "../../styles/shareModal.css";

export default function ShareModal({ posting, isOpen, onClose }) {
  return !isOpen ? null : (
    <div className="share-modal-container">
      <div className="share-modal-content">
        <div className="share-modal-header">
          <p>Share this job post: {posting.title}</p>
          <div className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark" style={{ color: "#000000" }} />
          </div>
        </div>
        <div className="share-modal-footer">
          <div>Share this:</div>
          <div>FB | Twitter | LinkedIn | WhatsApp</div>
        </div>
      </div>
    </div>
  );
}
