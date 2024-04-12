import CustomSelectInput from "../CustomSelectInput";
import { useState } from "react";

export default function FriendTips() {
  const options = [
    { text: "It was normal (0%)", value: 0 },
    { text: "It was good (10%)", value: 10 },
    { text: "It's good (20%)", value: 20 },
    { text: "It's very good (30%)", value: 30 },
  ];

  const [friendTip, setFriendTip] = useState(options[0]);

  return (
    <div>
      <h3>How did your friend like the service ?</h3>
      <CustomSelectInput
        options={options}
        setTip={setFriendTip}
        value={friendTip}
      />
    </div>
  );
}
