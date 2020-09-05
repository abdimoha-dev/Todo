import React, { useState, useEffect } from "react";

const friendList = [
  { id: 1, name: "Phoebe" },
  { id: 2, name: "Rachel" },
  { id: 3, name: "Ross" },
];
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  });
}
const Recipient = () => {
  const [reciepientId, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(reciepientId);

  return (
    <>
      <div color={isRecipientOnline ? "green" : "red"} />
      <select
        value={reciepientId}
        onChange={(e) => setRecipientID(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Recipient;
