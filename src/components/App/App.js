import BillInput from "../Billinput/BillInput";
import FriendTips from "../FriendTips/FriendTips";
import Reset from "../Reset/Reset";
import Summarize from "../Summarize/Summarize";
import YourTips from "../YourTips/YourTips";

function App() {
  return (
    <div>
      <BillInput />
      <YourTips />
      <FriendTips />
      <Summarize />
      <Reset />
    </div>
  );
}

export default App;
