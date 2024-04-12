import CustomInput from "../CustomInput";

export default function BillInput({ bill, setBill }) {
  return (
    <div>
      <h3>How much was the bill ?</h3>
      <CustomInput
        value={bill}
        onChange={(e) => setBill(() => e.target.value)}
        type={"number"}
      />
    </div>
  );
}
