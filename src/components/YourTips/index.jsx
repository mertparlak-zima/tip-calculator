import CustomSelectInput from "../CustomSelectInput";

export default function YourTips({ myOptions, tip, setTip }) {
  return (
    <div>
      <h3>How did you like the service ?</h3>
      <CustomSelectInput options={myOptions} setTip={setTip} value={tip} />
    </div>
  );
}
