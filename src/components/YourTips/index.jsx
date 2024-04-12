import CustomSelectInput from "../CustomSelectInput";
import { useState } from "react";

export default function YourTips() {
  const options = [
    { text: "It was normal (0%)", value: 0 },
    { text: "It was good (10%)", value: 10 },
    { text: "It's good (20%)", value: 20 },
    { text: "It's very good (30%)", value: 30 },
  ];

  const [tip, setTip] = useState(options[0]);

  return (
    <div>
      <h3>How did you like the service ?</h3>
      <CustomSelectInput options={options} setTip={setTip} value={tip} />
    </div>
  );
}
