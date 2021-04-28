import './App.css';
import my1stImage from "./imageInSrc.jpg";
import './style.css'
import ReactPlayer from "react-player";

function App() {
  return (
     <>
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">ASLM</h1>
        <br/>
        <img src={my1stImage} alt="1stimagee" style={{width:320, height:300}}></img>
        <br/>
        <img src="/imageInpublic.jpg" alt="2ndimage" style={{width:320, height:300}} />
       </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9GtB5G2xGTY" type="video/mp4" width={320} height={240} controls 
      />
    </>
  );
}

export default App;
