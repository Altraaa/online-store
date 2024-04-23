type TextFieldProps = {
  label?: string;
  placeholder?: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
};

const TextField = (props: TextFieldProps) => {
  const { label, placeholder, type, name, className, defaultValue, disabled } = props;

  return (
    <div className="flex  gap-1 flex-col">
      {label && (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className={`border-2 disabled:opacity-50 text-sm px-2 py-1 outline-red-600 rounded-xl ${className}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        required
      />
    </div>
  );
};

export default TextField;
