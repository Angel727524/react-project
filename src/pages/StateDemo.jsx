import React from "react";
import Counter from "../component/Counter";

function StateDemo() {
return ( <div className="page"> <div className="card"> <h1>useState Demonstration</h1>

    <p>
      The useState Hook allows React components
      to store and update data dynamically.
      Whenever the state changes, React
      automatically re-renders the component.
    </p>
  </div>

  <Counter />

  <div className="card">
    <h2>How useState Works</h2>

    <p>
      In the Counter component, useState is used
      to store the current counter value.
    </p>

    <pre>
```

{`const [count, setCount] = useState(0);`} </pre>

```
    <p>
      The variable <strong>count</strong> stores
      the current value, while
      <strong> setCount()</strong> updates it.
    </p>
  </div>

  <div className="card">
    <h2>Benefits of useState</h2>

    <ul>
      <li>Manages component data</li>
      <li>Updates UI automatically</li>
      <li>Simple and easy to use</li>
      <li>Supports interactive applications</li>
    </ul>
  </div>
</div>

);
}

export default StateDemo;
