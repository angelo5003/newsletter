import "./RegisterInfo.css";
import Form from "../Form/Form";

const RegisterInfo = () => {
  return (
    <section className="register-outer-container">
      <div className="register-container">
        <h2 className="register-title">Stay updated!</h2>
        <p className="register-text">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="register-list-items-outer-container">
          <ul className="register-list-items-container">
            <li className="register-list-items">
              Product discovery and building what matters
            </li>
            <li className="register-list-items">
              Measuring to ensure updates are a success
            </li>
            <li className="register-list-items">And much more!</li>
          </ul>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default RegisterInfo;
