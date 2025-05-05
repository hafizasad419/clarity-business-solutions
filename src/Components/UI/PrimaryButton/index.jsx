import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SolidButton = ({ to, text, iconSize = 16 }) => {
  return (
    <div className="flex justify-center">
      <Link
        to={to}
        className="btn-primary inline-flex items-center px-6 py-3 bg-[#05b4c4] text-white rounded-full font-semibold transition-all duration-150 ease-in-out hover:scale-105 active:brightness-95 whitespace-nowrap"
      >
        <span>{text}</span>
        <span className="ml-3 p-2 bg-amber-50 rounded-full text-c-zinc">
          <ArrowRight size={iconSize} strokeWidth={2} />
        </span>
      </Link>
    </div>
  );
};

export default SolidButton;

// import { ArrowRightAlt } from '@mui/icons-material';

// function SolidButton({ children, onClick, disabled, type = "button", icon = <ArrowRightAlt /> }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className="btn-primary"
//     >
//       {children}
//       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
//         {icon && <div className="text-c-zinc">{icon}</div>}
//       </span>
//     </button>
//   );
// }

// export default PrimaryButton;
