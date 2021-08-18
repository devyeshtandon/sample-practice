const Wallet = ({ amount }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius: "12px 12px 0 0",
        padding: "8px",
        background: "black",
        color: "white"
      }}
    >
      <b>Crypto Wallet</b>
      <div>Amount: {amount}</div>
    </div>
  );
};

export default Wallet;
