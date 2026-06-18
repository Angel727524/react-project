import React from "react";

function About() {
return ( <div className="page"> <div className="card"> <h1>About React</h1>

    <img
  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  alt="React Logo"
  className="react-logo"
/>

    <p>
      React is a popular JavaScript library used
      for building modern user interfaces and
      single-page applications.
    </p>

    <p>
      It was developed by Meta (Facebook) and is
      widely used by developers around the world
      because of its flexibility, speed, and
      component-based architecture.
    </p>
  </div>

  <div className="card">
    <h2>Why React?</h2>

    <ul>
      <li>Reusable Components</li>
      <li>Fast Rendering with Virtual DOM</li>
      <li>Easy State Management</li>
      <li>Large Community Support</li>
      <li>Strong Industry Demand</li>
    </ul>
  </div>

  <div className="card">
    <h2>Topics Learned in This Course</h2>

    <ul>
      <li>JSX</li>
      <li>Components</li>
      <li>Props</li>
      <li>React Router</li>
      <li>useState Hook</li>
      <li>useEffect Hook</li>
      <li>localStorage</li>
      <li>Event Handling</li>
      <li>CSS Styling</li>
    </ul>
  </div>

  <div className="card">
    <h2>Component-Based Development</h2>

    <p>
      React applications are built using reusable
      components. Each component manages its own
      functionality and can be reused throughout
      the application, making development more
      efficient and organized.
    </p>
  </div>
</div>

);
}

export default About;
