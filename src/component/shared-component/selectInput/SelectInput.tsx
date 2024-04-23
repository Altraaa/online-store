type Option = {
  label: string;
  value: string;
};

type SelectInputProps = {
  name: string;
  label?: string;
  options: Option[];
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
};

const SelectInput = (props: SelectInputProps) => {
  const { name, label, options, defaultValue, disabled, className } = props;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className={`border-2 disabled:opacity-50 text-sm px-2 py-1 outline-red-600 rounded-xl ${className}`}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
