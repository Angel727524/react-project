import React from "react";
import Clock from "../component/Clock";

function EffectDemo() {
return ( <div className="page"> <div className="card"> <h1>useEffect Demonstration</h1>

    <p>
      The useEffect Hook allows React components
      to perform side effects such as fetching data,
      updating the DOM, and running timers.
    </p>
  </div>

  <Clock />

  <div className="card">
    <h2>How useEffect Works</h2>

    <pre>
```

{`useEffect(() => {
const timer = setInterval(() => {
setTime(new Date());
}, 1000);

return () => clearInterval(timer);
}, []);`} </pre>

```
    <p>
      In the Clock component, useEffect creates a
      timer that updates the current time every
      second. When the component is removed,
      the timer is automatically cleared.
    </p>
  </div>

  <div className="card">
    <h2>Benefits of useEffect</h2>

    <ul>
      <li>Runs code after rendering</li>
      <li>Handles API requests</li>
      <li>Manages timers and intervals</li>
      <li>Performs cleanup operations</li>
      <li>Improves component lifecycle control</li>
    </ul>
  </div>

  <div className="card">
    <h2>Real-World Uses</h2>

    <ul>
      <li>Fetching data from servers</li>
      <li>Displaying live clocks</li>
      <li>User authentication checks</li>
      <li>Monitoring user activity</li>
      <li>Updating dashboards in real time</li>
    </ul>
  </div>
</div>


);
}

export default EffectDemo;
