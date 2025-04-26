import { ArrowRightAlt } from '@mui/icons-material';

function OutlinedButton({ children, onClick, disabled, type = "button", icon = <ArrowRightAlt /> }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn-outline"
    >
      {children}
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-c-zinc">
        {icon && <div className="text-white">{icon}</div>}
      </span>
    </button>
  );
}

export default OutlinedButton;
