import { Portal } from "react-portal";
import "./Modal.css";
import { modalPropTypes } from "../../utils/PropValidation";

const Modal = ({ handleShowModal }) => {
  return (
    <>
      <Portal>
        <div className="succes-modal">
          <div className="modal-container">
            <img
              src="/assets/images/icon-success.svg"
              className="succes-icon"
              alt="success-icon"
            />

            <h1 className="succes-message-title">Thanks for subscribing!</h1>
            <p className="succes-message">
              A confirmation email has been sent to ash@loremcompany.com. Please
              open it and click the button inside to confirm your subscription.
              Dismiss message
            </p>
            <button
              id="close-btn"
              className="form-btn"
              onClick={handleShowModal}
            >
              Dismiss Message
            </button>
          </div>
        </div>
      </Portal>
    </>
  );
};

Modal.propTypes = modalPropTypes;

export default Modal;
