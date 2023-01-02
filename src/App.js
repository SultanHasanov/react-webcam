import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webRef = useRef();
  const [img, setImage] = useState("");
  console.log(img);

  const handleScrin = () => {
    let image = webRef.current.getScreenshot();
    setImage(image);
    console.log(image);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webRef} className="webCam" />
      </header>
      <button onClick={handleScrin}>Скрин</button>
      <div>
        <img src={img} />
      </div>
    </div>
  );
}

export default App;
