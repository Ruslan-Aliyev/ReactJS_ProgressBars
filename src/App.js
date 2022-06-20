import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() 
{
  const [progress, setProgress] = React.useState(0);

  async function startProgress() 
  {
    for (var i = 0; i < 100; i++) 
    {
      await sleep(500);
      setProgress(prev => prev + 1);
    } 
  }

  function sleep(ms) 
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className="App">
      <ProgressBar now={progress} label={`${progress}%`} />

      <button onClick={startProgress}>
        Start Progress
      </button>
    </div>
  );
}

export default App;
