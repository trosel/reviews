export default function Input({
    value,
    placeholder,
    label,
    onChange,
  }: {
    value: string;
    placeholder: string;
    label: string;
    onChange: (value: string) => void;
  }) {
    return (
      <div>
        <label>
          {label}
        </label>
        <div >
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
  