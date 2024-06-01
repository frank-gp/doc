// React component example
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello, React!');

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Button clicked!')}>
        Click me
      </button>
    </div>
  );
}

export default App;
