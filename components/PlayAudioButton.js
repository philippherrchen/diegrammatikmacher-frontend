import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";

const PlayAudioButton = (props) => {
  const { onPlayAudioButtonClick } = props;
  return (
    <div>
      <Button
        variant="contained"
        onClick={onPlayAudioButtonClick}
        startIcon={<PlayArrowIcon />}
      >
        Play
      </Button>
    </div>
  );
};

export default PlayAudioButton;
