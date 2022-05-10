import "video-react/dist/video-react.css"; // import css
import PdfReader from "./components/PdfReader";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <VideoPlayer />
      <PdfReader />
    </div>
  );
}

export default App;
