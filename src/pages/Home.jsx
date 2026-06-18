import React from "react";

function Home() {
return ( <div className="page"> <section className="hero"> <div className="hero-text"> <h1>React Portfolio Website</h1>

      <h2>Final Project</h2>

      <p>
        Welcome to our React Portfolio Website.
        This project demonstrates the concepts
        learned throughout the semester including
        React Router, useState, useEffect,
        localStorage, reusable components,
        and CSS styling.
      </p>

      <button>
        Explore Project
      </button>
    </div>

    <div className="hero-image">
   <img
  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  alt="Developer Workspace"
/>
    </div>
  </section>

  <section className="card">
    <h2>Team Members</h2>

    <ul>
      <li>Student 1: ANGEL RUMBA LAMA (2530059)</li>
      <li>Student 2: SIWANI THAPA MAGAR (2530082)
      </li>
    </ul>
  </section>

  <section className="card">
    <h2>Project Objectives</h2>

    <p>
      This portfolio website was developed as a
      final React project to demonstrate practical
      understanding of React fundamentals and
      modern web development techniques.
    </p>
  </section>

  <section className="card">
    <h2>Technologies Used</h2>

    <ul>
      <li>React</li>
      <li>React Router</li>
      <li>JavaScript</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>localStorage</li>
      <li>GitHub</li>
      <li>GitHub Pages</li>
    </ul>
  </section>
</div>

);
}

export default Home;
