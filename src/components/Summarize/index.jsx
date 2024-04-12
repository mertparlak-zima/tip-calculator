export default function Summarize({ tip, friendTip, bill }) {
  let controlledTip = tip.value !== undefined ? tip.value : tip;
  let controlledFriendTip =
    friendTip.value !== undefined ? friendTip.value : friendTip;

  function calculateTotalTipPercentage(controlledTip, controlledFriendTip) {
    console.log(controlledTip, controlledFriendTip);

    return (Number(controlledTip) + Number(controlledFriendTip)) / 2;
  }

  const billPrice = Number(bill);

  const tipPercentage = Number(
    calculateTotalTipPercentage(controlledTip, controlledFriendTip)
  );
  const totalTip = (billPrice * tipPercentage) / 100;
  const totalBill = billPrice + totalTip;

  return (
    <div>
      <h1>{`You pay $${totalBill.toFixed(
        2
      )} ($${billPrice} + $${totalTip.toFixed(2)})`}</h1>
    </div>
  );
}
