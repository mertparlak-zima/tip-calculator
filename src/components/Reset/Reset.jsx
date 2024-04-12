export default function Reset({ setBill, setFriendTip, setTip, myOptions }) {
  function handleReset() {
    setBill(0);
    setTip(myOptions[0]);
    setFriendTip(myOptions[0]);
  }
  return <button onClick={handleReset}>Reset</button>;
}
