import React from "react";

function History() {
return ( <div className="page"> <div className="card"> <h1>Course Learning History</h1>

    <p>
      This page summarizes the important topics
      and skills learned throughout the React
      course during this semester.
    </p>
  </div>

  <div className="card">
    <h2>Week 1: Introduction to React</h2>

    <ul>
      <li>What is React?</li>
      <li>Installing React with Vite</li>
      <li>Project Structure</li>
      <li>JSX Basics</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 2: Components</h2>

    <ul>
      <li>Functional Components</li>
      <li>Component Reusability</li>
      <li>Import and Export</li>
      <li>Organizing Files</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 3: Props and Event Handling</h2>

    <ul>
      <li>Passing Data with Props</li>
      <li>Handling User Events</li>
      <li>Button Click Events</li>
      <li>User Interaction</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 4: useState Hook</h2>

    <ul>
      <li>State Management</li>
      <li>Updating UI Dynamically</li>
      <li>Counter Applications</li>
      <li>Interactive Components</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 5: useEffect Hook</h2>

    <ul>
      <li>Component Lifecycle</li>
      <li>Side Effects</li>
      <li>Timers and Intervals</li>
      <li>Data Fetching Concepts</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 6: React Router</h2>

    <ul>
      <li>Multi-Page Navigation</li>
      <li>Routes and Route Components</li>
      <li>Link Navigation</li>
      <li>Single Page Applications</li>
    </ul>
  </div>

  <div className="card">
    <h2>Week 7: localStorage</h2>

    <ul>
      <li>Saving User Data</li>
      <li>Persistent Storage</li>
      <li>Browser Storage APIs</li>
      <li>Notes Application</li>
    </ul>
  </div>

  <div className="card">
    <h2>Skills Gained</h2>

    <ul>
      <li>React Development</li>
      <li>Component Design</li>
      <li>State Management</li>
      <li>Routing and Navigation</li>
      <li>Browser Storage</li>
      <li>Responsive Web Design</li>
      <li>GitHub Version Control</li>
      <li>Project Deployment</li>
    </ul>
  </div>
</div>
);
}

export default History;
