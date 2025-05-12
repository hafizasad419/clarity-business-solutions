import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PrimaryButton = ({
  to,
  text,
  iconSize = 16,
  className = "",
  type = "button", // can be "link" or "button"
  onClick,
}) => {
  if (type === "link") {
    return (
      <Link to={to} className={`btn-primary ${className}`}>
        <span>{text}</span>
        <span className="ml-3 p-2 bg-amber-50 rounded-full text-c-zinc">
          <ArrowRight size={iconSize} strokeWidth={2} />
        </span>
      </Link>
    );
  }

  if (type === "button" || type === "submit") {
    return (
      <button
        type={type}
        className={`btn-primary ${className}`}
        onClick={onClick}
      >
        <span>{text}</span>
        <span className="ml-3 p-2 bg-amber-50 rounded-full text-c-zinc">
          <ArrowRight size={iconSize} strokeWidth={2} />
        </span>
      </button>
    );
  }

  return null;
};

export default PrimaryButton;
