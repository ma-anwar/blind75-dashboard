import React, { useState } from "react";
import { Box, Link, Divider, Typography } from "@material-ui/core";
import ProblemCard from "../ProblemCard/ProblemCard";
import { problems } from "../App/data";
import { useStyles } from "./TitleCardStyles";

export default function TitleCard({ title }) {
  const [hide, setHide] = useState(false);
  const toggleHide = () => {
    setHide(!hide);
  };
  function getProblems() {
    const items = problems.reduce((filtered, item) => {
      if (item.category === title) {
        filtered.push(item);
      }
      return filtered;
    }, []);
    return items;
  }
  function getTitle(title) {
    return title.charAt(0).toUpperCase() + title.slice(1) + " Problems";
  }
  const styles = useStyles();
  return (
    <Box m={2} className={styles.card}>
      <Box display="flex" mx={1} mt={1} justifyContent="space-between">
        <Typography variant="h6" noWrap className={styles.header}>
          {getTitle(title)}{" "}
        </Typography>
        <button onClick={() => toggleHide()}>{hide ? "Show" : "Hide"}</button>
      </Box>
      {getProblems().map((problem, i) => (
        <div className={hide? styles.hidden : null}>
          {<ProblemCard link={problem.link} title={problem.title} />}
          {<Divider variant={"middle"} className={styles.divider} />}
        </div>
      ))}
    </Box>
  );
}
