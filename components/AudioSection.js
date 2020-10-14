const { Button } = require("@material-ui/core");
import PlayAudioButton from "./PlayAudioButton";
import RecordButton from "./RecordButton";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const AudioSection = (props) => {
  const { recordedAudio, setRecordedAudio } = props;
  const [micAccessApproval, steMicAccessApproval] = useState(false);
  const classes = useStyles();

  //handling recording the audio
  const onRecordButtonClick = () => {
    console.log("in navigator mediadevices");
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setRecordedAudio(stream);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //stop recording the audio
  const onStopRecordButtonClick = () => {
    recordedAudio.getTracks().forEach((track) => {
      track.stop();
    });
    console.log(
      "recorded audio after it has been stopped",
      recordedAudio.getAudioTracks()
    );
  };

  const onPlayAudioClick = () => {
    //const audio = new Audio().srcObject(recordedAudio.getAudioTracks());
    //play some audio here;
  };

  return (
    <div>
      <div className={classes.button}>
        <RecordButton onRecordButtonClick={onRecordButtonClick} />
      </div>
      <Button
        onClick={onStopRecordButtonClick}
        variant="contained"
        className={classes.button}
      >
        {" "}
        Stop
      </Button>
      <div className={classes.button}>
        <PlayAudioButton onPlayAudioButtonClick={onPlayAudioClick} />
      </div>
    </div>
  );
};

//add some styling to buttons
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    //minWidth: 200,
  },
}));

export default AudioSection;
