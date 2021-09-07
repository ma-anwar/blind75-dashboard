import { Paper, Typography } from "@material-ui/core/";
import AppBar from "../AppBar/AppBar";
import TitleCard from "../TitleCard/TitleCard";
import { categories } from "./data";
import Masonry from "react-masonry-css";
import React, { useEffect, useState } from "react";
import { useStyles } from "./AppStyles.js";
import { problems } from "../App/data";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { getAccessTokenWithPopup, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isLoading || !isAuthenticated) {
      setData(problems.map((item) => ({ ...item, completed: false })));
      return;
    }
    async function getCompletedProblems() {
      try {
        const accessToken = await getAccessTokenWithPopup({
          audience: process.env.REACT_APP_API_AUDIENCE,
        });
        const endpoint = `http://localhost:4001/api/v1/user/`;

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: "GET",
        });

        return await response.json();
      } catch (error) {
        console.log(error.message);
        return null;
      }
    }

    (async function generateProblemSet() {
      const completedProblems = await getCompletedProblems();
      if (!completedProblems) {
        setData(problems.map((item) => ({ ...item, completed: false })));
        return;
      }
      console.log(completedProblems);

      const problemSet = await problems.map((item) => ({
        ...item,
        completed: completedProblems.problems.includes(item.title),
      }));
      console.log(problemSet);
      setData(problemSet);
    })();
  }, [getAccessTokenWithPopup, isAuthenticated, isLoading]);

  const styles = useStyles();
  const breakpointObject = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <div className="App">
      <AppBar />
      <Paper>
        <Masonry
          breakpointCols={breakpointObject}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}>
          {categories.map((category) => (
            <TitleCard title={category} problems={data} key={category} />
          ))}
        </Masonry>
      </Paper>
    </div>
  );
}

export default App;
