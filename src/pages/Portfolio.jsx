import React from "react";

function Portfolio() {
return ( <div className="page"> <div className="card"> <h1>Project Portfolio</h1>

```
    <p>
      This React Portfolio Website was developed
      as a final project to demonstrate React
      fundamentals including React Router,
      useState, useEffect, localStorage,
      reusable components, and responsive design.
    </p>
  </div>

  <div className="card">
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      alt="Project Screenshot"
      className="portfolio-image"
    />

    <h2>Project Overview</h2>

    <p>
      This project demonstrates modern React
      development techniques learned throughout
      the semester. The application uses
      component-based architecture and provides
      multiple pages using React Router.
    </p>
  </div>

  <div className="card">
    <h2>Main Features</h2>

    <ul>
      <li>React Router Navigation</li>
      <li>Reusable Components</li>
      <li>useState Counter Demo</li>
      <li>useEffect Clock Demo</li>
      <li>localStorage Notes App</li>
      <li>Responsive Design</li>
      <li>Modern User Interface</li>
    </ul>
  </div>

  <div className="card">
    <h2>Technologies Used</h2>

    <ul>
      <li>React</li>
      <li>React Router DOM</li>
      <li>JavaScript ES6</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Vite</li>
    </ul>
  </div>

  <div className="card">
    <h2>Team Members</h2>

    <ul>
      <li>Angel Rumba Lama (2530059)
      </li>
      <li>Siwani Thapa Magar(2530082)</li>
    </ul>
  </div>

  <div className="card">
    <h2>What We Learned</h2>

    <p>
      Through this project we learned how to
      build React applications using reusable
      components, manage state with useState,
      perform side effects with useEffect,
      store browser data using localStorage,
      and create multi-page applications using
      React Router.
    </p>
  </div>

  <div className="card">
    <h2>Future Improvements</h2>

    <ul>
      <li>Add API Integration</li>
      <li>Add Authentication System</li>
      <li>Create Dark Mode</li>
      <li>Improve Mobile Responsiveness</li>
      <li>Add More Interactive Features</li>
    </ul>
  </div>

  <div className="card">
    <h2>GitHub Repository</h2>

    <p>
      Add your GitHub repository link before
      submitting the project.
    </p>

    <p>
      https://github.com/yourusername/react-portfolio
    </p>
  </div>
</div>

);
}

export default Portfolio;
