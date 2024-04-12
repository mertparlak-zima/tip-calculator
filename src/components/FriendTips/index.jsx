import CustomSelectInput from "../CustomSelectInput";

export default function FriendTips({ myOptions, friendTip, setFriendTip }) {
  return (
    <div>
      <h3>How did your friend like the service ?</h3>
      <CustomSelectInput
        options={myOptions}
        setTip={setFriendTip}
        value={friendTip}
      />
    </div>
  );
}
