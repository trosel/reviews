export default function Button({
    label,
    onClick,
    disabled = false,
  }: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }