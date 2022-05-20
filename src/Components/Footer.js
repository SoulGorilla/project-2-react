import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="bijon">
      <h4 id="b">Join over 30 Million People Who Use Currency!</h4>
      <p>(Just Kidding)</p>
      <button class="btn btn-outline-success" type="link">
        <Link to="/SignUp">Sign up For Free.</Link>
      </button>
    </div>
  );
};

export default Footer;

/* <button class="btn btn-outline-success" type="link">
  <Link className="crncy" to="/about">
    Currency
  </Link>
</button>; */
