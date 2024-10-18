import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
