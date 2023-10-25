import "./Form.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Form = () => {
  const [formInput, setFormInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null); // Initializing state for error messages.

  // Function to check if the input value is a valid email.
  const checkValidEmail = (formInput) => {
    return /\S+@\S+\.\S+/.test(formInput);
  };

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error messages.

    if (checkValidEmail(formInput)) {
      setFormInput("");
      handleShowModal();
    } else {
      setError(`Valid email is requierd!`); // Set an error message.
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} noValidate>
      <div className="form-title-container">
        <p className="form-title">Email address:</p>
        {
          error && <p className="error-message">{error} </p> // Display the error message if there is an error.
        }
      </div>

      <input
        type="email"
        className={`register-email-input ${error ? "error" : ""}`} // Apply a class if there's an error.
        placeholder="email@company.com"
        value={formInput}
        onChange={handleChange}
      />

      <button type="submit" className="form-btn">
        Subscribe to monthly newsletter
      </button>

      {showModal ? <Modal handleShowModal={handleShowModal} /> : null}
    </form>
  );
};
export default Form;
