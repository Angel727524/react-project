import React from "react";
import Notes from "../component/Notes";

function StorageDemo() {
return ( <div className="page"> <div className="card"> <h1>localStorage Demonstration</h1>

    <p>
      localStorage allows data to be stored
      in the browser even after the page is
      refreshed or closed.
    </p>
  </div>

  <Notes />

  <div className="card">
    <h2>How localStorage Works</h2>

    <pre>
```

{`localStorage.setItem("myNote", note);

const savedNote =
localStorage.getItem("myNote");

localStorage.removeItem("myNote");`} </pre>

```
    <p>
      The Notes component saves user data into
      the browser's localStorage. When the page
      loads again, the saved note is retrieved
      automatically.
    </p>
  </div>

  <div className="card">
    <h2>Benefits of localStorage</h2>

    <ul>
      <li>Stores data permanently in the browser</li>
      <li>No database required</li>
      <li>Easy to use</li>
      <li>Improves user experience</li>
      <li>Useful for settings and notes</li>
    </ul>
  </div>

  <div className="card">
    <h2>Real-World Applications</h2>

    <ul>
      <li>To-do list applications</li>
      <li>Theme preferences</li>
      <li>User settings</li>
      <li>Shopping carts</li>
      <li>Personal notes and reminders</li>
    </ul>
  </div>
</div>

);
}

export default StorageDemo;
