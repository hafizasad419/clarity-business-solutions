import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OutlinedButton = ({ text, to, type = "button", onClick }) => {
  if (type === "link") {
    return (
      <Link
        to={to}
        className="btn-outline">
        <span className="p-4 tracking-tighter">{text}</span>
        <span className="flex items-center justify-center p-2 m-1 bg-gradient-to-r from-[#05b4c4] to-[#0cdddb] rounded-full">
          <ArrowRight size={20} strokeWidth={2} className="text-white" />
        </span>
      </Link>
    );
  }

  if (type === "button" || type === "submit") {
    return (
      <button
        type={type}
        className="btn-outline">
        <span className="p-4 tracking-tighter">{text}</span>
        <span className="flex items-center justify-center p-2 m-1 bg-gradient-to-r from-[#05b4c4] to-[#0cdddb] rounded-full">
          <ArrowRight size={20} strokeWidth={2} className="text-white" />
        </span>
      </button>
    );
  }

  return null;
};

export default OutlinedButton;
