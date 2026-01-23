const About = () => {
  return (
    <div className="container">
      <h1 className="title-md">About This Project</h1>
      <p className="text-muted" style={{ marginBottom: "20px" }}>
        A growing collection of React mini-apps built during my continuous
        learning journey. <br />
        Each project focuses on practicing specific React concepts and patterns
        through hands-on development.
      </p>

      <div className="info-box">
        <p>
          <strong>🛠️ Technologies Used:</strong>
        </p>
        <ul
          style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px" }}
        >
          <li>
            <strong>React (via Vite)</strong> - Modern React development with
            hooks (useState, useEffect, useRef)
          </li>
          <li>
            <strong>React Router</strong> - Client-side routing and navigation
          </li>
          <li>
            <strong>HTML5 & CSS3</strong> - Structure and responsive styling
          </li>
          <li>
            <strong>JavaScript ES6+</strong> - Core functionality
          </li>
          <li>
            <strong>Vite</strong> - Development server and build tool
          </li>
        </ul>
      </div>

      <div className="info-box">
        <p>
          <strong>📚 Learning Approach:</strong>
        </p>
        <p style={{ marginTop: "10px" }}>
          This repository represents my ongoing journey to master React through
          practical application. Each mini-app is built using different learning
          methods:
        </p>
        <ul
          style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px" }}
        >
          <li>Online courses (FreeCodeCamp, tutorials)</li>
          <li>AI-assisted learning (ChatGPT guidance)</li>
          <li>Documentation deep-dives</li>
          <li>Hands-on experimentation</li>
        </ul>
      </div>

      <div className="info-box">
        <p>
          <strong>📝 Key React Concepts Practiced:</strong>
        </p>
        <ul
          style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px" }}
        >
          <li>State management with useState</li>
          <li>Side effects with useEffect</li>
          <li>Ref handling with useRef</li>
          <li>Event handling & conditional rendering</li>
          <li>Component composition & modularization</li>
          <li>Form handling and validation</li>
          <li>Routing with React Router</li>
        </ul>
      </div>

      <div
        className="info-box"
        style={{ background: "#daf9f0b4", borderLeftColor: "#54cbadff" }}
      >
        <p>
          <strong>🎯 What's Next?</strong>
        </p>
        <p style={{ marginTop: "10px" }}>
          Based on my FreeCodeCamp curriculum, upcoming topics include:
        </p>
        <ul
          style={{
            textAlign: "left",
            marginLeft: "20px",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          <li>Debugging Strategies</li>
          <li>Performance Optimization</li>
          <li>Testing React components</li>
          <li>CSS Libraries & Frameworks</li>
          <li>Data Visualization with D3</li>
          <li>TypeScript Fundamentals</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
