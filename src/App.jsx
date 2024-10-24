import React, { useState } from 'react';
import Form from './components/Form';
import SuccessMessage from './components/SuccessMessage';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      {isSubmitted ? <SuccessMessage /> : <Form onSuccess={handleSuccess} />}
    </div>
  );
}

export default App;
