import React, { useEffect, useState } from "react";

const PyodideComponent = () => {
  const [pyodide, setPyodide] = useState(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const loadPyodide = async () => {
      // Load Pyodide
      const pyodideInstance = await window.loadPyodide();
      setPyodide(pyodideInstance);
    };

    loadPyodide();
  }, []);

  const runPythonCode = async () => {
    if (pyodide) {
      // Run Python code
      const result = await pyodide.runPython(`
        def greet(name):
          return f"Hello, {name}!"
        greet("Caio")
      `);
      setOutput(result);
    }
  };

  return (
    <div>
      <h1>Pyodide in React</h1>
      <button onClick={runPythonCode}>Run Python</button>
      <p>{output}</p>
    </div>
  );
};

export default PyodideComponent;
