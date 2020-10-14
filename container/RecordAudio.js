import { Button, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import AudioSection from "../components/AudioSection";
import EmailInput from "../components/EmailInput";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Container managing the components for the audio recording and playing section
 * @param {*} props
 */
const RecordAudio = (props) => {
  const [email, setEmail] = useState("");
  const [recordedAudio, setRecordedAudio] = useState(null);
  const classes = useStyles();

  //send audio file and email to api layer
  const submitAudio = async (event) => {
    event.preventDefault();

    const response = await axios.post("/api/checkGrammar", {
      audio: recordedAudio,
      email: email,
    });
    if (response.status === 200) {
      console.log("we checked your grammar ");
    }
  };

  return (
    <div align="center">
      <form onSubmit={submitAudio}>
        <Paper className={classes.paper}>
          <div className={classes.emailField}>
            <EmailInput email={email} setEmail={setEmail} />
          </div>
          <AudioSection
            recordedAudio={recordedAudio}
            setRecordedAudio={setRecordedAudio}
          />
          <Button type="submit" variant="contained" className={classes.button}>
            Send Audio
          </Button>
        </Paper>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  emailField: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  paper: {
    width: "30vw",
  },
}));

export default RecordAudio;
