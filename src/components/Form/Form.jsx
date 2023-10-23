import "./Form.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Form = () => {
  const [formInput, setFormInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInput("");
    handleShowModal();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <p className="form-title">Email address:</p>
      <input
        type="email"
        className="register-email-input"
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
