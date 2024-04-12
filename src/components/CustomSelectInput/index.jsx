export default function CustomSelectInput({ options, value, setTip }) {
  return (
    <select value={value.value} onChange={(e) => setTip(e.target.value)}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
}
