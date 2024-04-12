export default function CustomInput({
  type,
  text,
  value,
  onChange,
  placeHolder,
}) {
  return (
    <input
      type={type}
      text={text}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
}
