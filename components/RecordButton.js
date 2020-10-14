const { Button } = require("@material-ui/core");
import MicIcon from "@material-ui/icons/Mic";

const RecordButton = (props) => {
  const { onRecordButtonClick } = props;
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<MicIcon />}
        onClick={onRecordButtonClick}
      >
        {" "}
        Record
      </Button>
    </div>
  );
};

export default RecordButton;
