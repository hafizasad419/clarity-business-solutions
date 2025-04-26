import { ArrowRightAlt } from '@mui/icons-material';

function PrimaryButton({ children, onClick, disabled, type = "button", icon = <ArrowRightAlt /> }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn-primary"
    >
      {children}
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
        {icon && <div className="text-c-zinc">{icon}</div>}
      </span>
    </button>
  );
}

export default PrimaryButton;
