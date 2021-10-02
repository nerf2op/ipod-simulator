import { PlayCircleFilled } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;
  const styles={
    'font-size' : '30px',
  }
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleFilled style={styles}  />
    </button>
  );
}
