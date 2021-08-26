import "./App.css";
import { Paper, Typography, Box } from "@material-ui/core/";
import LoginButton from "../LoginButton/LoginButton";
import TitleCard from "../TitleCard/TitleCard";
import { categories } from "./data";
import { makeStyles } from "@material-ui/core/styles";
import Masonry from "react-masonry-css";

const useStyles = makeStyles(() => ({
  masonryGrid: {
    display: "flex",
  },
  masonryColumn: {
    paddingLeft: "30px" /* gutter size */,
    backgroundClip: "padding-box",
  },
}));

function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <Paper>
        <Typography>
          <h1>Blind 75 Leetcode </h1>
        </Typography>
        <LoginButton />
        <Masonry
          breakpointCols={3}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}>
          {categories.map((category, i) => (
            <TitleCard title={category} />
          ))}
        </Masonry>
      </Paper>
    </div>
  );
}

export default App;
