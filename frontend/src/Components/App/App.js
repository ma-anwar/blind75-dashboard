import { Paper, Typography } from "@material-ui/core/";
import LoginButton from "../LoginButton/LoginButton";
import TitleCard from "../TitleCard/TitleCard";
import { categories } from "./data";
import Masonry from "react-masonry-css";
import React, { useEffect, useState } from "react";
import { useStyles } from "./AppStyles.js";
import { problems } from "../App/data";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCompletedProblems() {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://b75db`,
        });
        const endpoint = `http://localhost:4001/api/v1/user/`;

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: "GET",
        });

        const responseBody = await response.json();
        return responseBody;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    }

    (async function generateProblemSet() {
      console.log("Running");
      const completedProblems = await getCompletedProblems();
      if (!completedProblems) {
        setData(problems.map((item) => ({ ...item, completed: false })));
        console.log("failed");
        return;
      }

      const problemSet = await problems.map((item) => ({
        ...item,
        completed: completedProblems.problems.includes(item.title),
      }));
      setData(problemSet);
    })();
  }, [getAccessTokenSilently]);

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
            <TitleCard title={category} problems={data} />
          ))}
        </Masonry>
      </Paper>
    </div>
  );
}

export default App;
