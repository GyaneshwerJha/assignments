import { useState } from "react";

const Login = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      margin: 0,
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    form: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "16px",
      boxSizing: "border-box",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      backgroundColor: "#4caf50",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="email" style={styles.label}>
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter Email..."
        style={styles.input}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <label htmlFor="password" style={styles.label}>
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter password..."
        style={styles.input}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Login;
