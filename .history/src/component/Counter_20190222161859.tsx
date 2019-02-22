import React from "react";

interface ICounterProps {
  value: any;
  onIncrement: any;
  onDecrement: any;
  onIncrementAsync: any;
}
function Counter({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync
}: ICounterProps) {
  console.log(value);
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
}

export default connect(
  (state: IRootStore) => {
    return {
      daCuCard: state.daCuCard ? state.daCuCard.list : []
    };
  },
  { jumpLink, sendMta }
)(Counter);
