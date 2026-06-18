import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

const increase = () => {
setCount(count + 1);
};

const decrease = () => {
setCount(count - 1);
};

const reset = () => {
setCount(0);
};

return ( <div className="card"> <h2>useState Counter Demo</h2>

  <h1>{count}</h1>

  <div className="button-group">
    <button onClick={increase}>
      Increase
    </button>

    <button onClick={decrease}>
      Decrease
    </button>

    <button onClick={reset}>
      Reset
    </button>
  </div>

  <p>
    This component demonstrates the useState Hook
    by updating the counter value whenever a button
    is clicked.
  </p>
</div>

);
}

export default Counter;
