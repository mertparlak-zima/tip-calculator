import BillInput from "../Billinput";
import FriendTips from "../FriendTips";
import Reset from "../Reset/Reset";
import Summarize from "../Summarize";
import YourTips from "../YourTips";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <YourTips />
      <FriendTips />
      <Summarize />
      <Reset />
    </div>
  );
}

export default App;
