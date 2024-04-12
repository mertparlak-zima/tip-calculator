import BillInput from "../Billinput";
import FriendTips from "../FriendTips";
import Reset from "../Reset/Reset";
import Summarize from "../Summarize";
import YourTips from "../YourTips";
import { useState } from "react";
import myOptions from "../../data/options.js";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(myOptions[0]);
  const [friendTip, setFriendTip] = useState(myOptions[0]);

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <YourTips tip={tip} setTip={setTip} myOptions={myOptions} />
      <FriendTips
        myOptions={myOptions}
        friendTip={friendTip}
        setFriendTip={setFriendTip}
      />
      <Summarize />
      <Reset />
    </div>
  );
}

export default App;
