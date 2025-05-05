// import { ArrowRightAlt } from '@mui/icons-material';

// function OutlinedButton({ children, onClick, disabled, type = "button", icon = <ArrowRightAlt /> }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className="btn-outline"
//     >
//       {children}
//       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-c-zinc">
//         {icon && <div className="text-white">{icon}</div>}
//       </span>
//     </button>
//   );
// }

// export default OutlinedButton;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 

const ButtonBgT = ({ text, to }) => {
  return (
    <div className="flex justify-center">
      <Link
        to={to}
        className="flex items-center justify-between w-40 h-12 border-1 border-[#05b4c4] rounded-full text-grey-600 font-semibold bg-white active:brightness-98 hover:scale-102 active:tracking-widest transition-all ease-in-out duration-150"
      >
        <span className="p-4 tracking-tighter">{text}</span>
        <span className="flex items-center justify-center p-2 m-1 bg-gradient-to-r from-[#05b4c4] to-[#0cdddb] rounded-full">
          <ArrowRight size={20} strokeWidth={2} className="text-white" />
        </span>
      </Link>
    </div>
  );
};

export default ButtonBgT;

