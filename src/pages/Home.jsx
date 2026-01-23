const Home = () => {
  return (
    <div className="container">
      <h1 className="title-lg">React Learning Projects</h1>
      <p className="text-muted" style={{ marginBottom: "20px" }}>
        A growing collection of React mini-apps built during my continuous
        learning journey. <br />
        Each project focuses on practicing specific React concepts and patterns
        through hands-on development.
      </p>

      <div
        className="info-box"
        style={{ background: "#fce5fdb1", borderLeftColor: "#f50bf190" }}
      >
        <p>
          <strong>🌱 This repository is actively growing!</strong>
        </p>
        <p style={{ marginBottom: 0 }}>
          As I continue learning React, I'll be adding more mini-apps to
          practice new concepts and solidify my understanding.
        </p>
      </div>

      <div className="info-box">
        <p>
          <strong>📋 Current Projects Include:</strong>
        </p>
        <ul
          style={{
            textAlign: "left",
            marginLeft: "20px",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          <li>
            <strong>OTP Generator</strong> - Secure one-time passwords with
            countdown timer
          </li>
          <li>
            <strong>Character Counter</strong> - Real-time counting with
            validation
          </li>
          <li>
            <strong>Superhero Form</strong> - Dynamic form with state management
          </li>
          <li>
            <strong>Event RSVP</strong> - Event registration with validation
          </li>
          <li>
            <strong>Shopping List</strong> - Add, edit, and remove items
            dynamically
          </li>
        </ul>
      </div>

      <div className="info-box">
        <p>
          <strong>🎯 Key React Concepts Practiced:</strong>
        </p>
        <p style={{ marginBottom: 0 }}>
          State management • Side effects • Event handling • Conditional
          rendering • Component composition • Form handling • Routing
        </p>
      </div>
    </div>
  );
};

export default Home;
