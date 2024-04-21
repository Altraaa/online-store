type TextFieldProps = {
  label?: string;
  placeholder?: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  className?: string;
};

const TextField = (props: TextFieldProps) => {
  const { label, placeholder, type, name, className } = props;

  return (
    <div className="flex gap-1 flex-col">
      {label && 
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      }
      <input
        type={type}
        name={name}
        id={name}
        className={`border-2 text-sm px-2 py-1 outline-red-600 rounded-xl ${className}`}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextField;
