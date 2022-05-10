import { Player, ControlBar, PlayToggle } from "video-react";

function VideoPlayer() {
  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>Video Player</h2>
      <Player
        playsInline
        // poster=""
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      >
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player>
    </div>
  );
}

export default VideoPlayer;
