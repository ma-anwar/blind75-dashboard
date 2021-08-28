import { Paper, Typography, Box } from "@material-ui/core/";
import LoginButton from "../LoginButton/LoginButton";
import TitleCard from "../TitleCard/TitleCard";
import { categories } from "./data";
import Masonry from "react-masonry-css";
import { useStyles } from "./AppStyles.js";

function App() {
  const styles = useStyles();
  const breakpointObject = {
    default: 3,
    1000: 2,
    700: 1,
  };
  return (
    <div className="App">
      <Paper>
        <Typography className={styles.heading}>
          <h1>Blind 75 Leetcode </h1>
        </Typography>
        <LoginButton />
        <Masonry
          breakpointCols={breakpointObject}
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
