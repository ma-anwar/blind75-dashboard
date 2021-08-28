import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Link, Divider, Typography } from "@material-ui/core";
import ProblemCard from "../ProblemCard/ProblemCard";
import { problems } from "../App/data";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 12,
    boxShadow: "0 4px 10px 0 #BDC9D7",
    overflow: "hidden",
  },
  header: {
    fontFamily: "Barlow, san-serif",
    backgroundColor: "#fff",
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  headline: {},
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 1px",
  },
}));




export default function TitleCard({ title }) {
  const [hide, setHide]=useState(false)
  const toggleHide = () => {setHide(!hide)}
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
        <button onClick={() => toggleHide()}>{hide?"Show":"Hide"}</button>
      </Box>
      {getProblems().map((problem, i) => (
        <div>
          {!hide && <ProblemCard link={problem.link} title={problem.title} />}
          <Divider variant={"middle"} className={styles.divider} />
        </div>
      ))}
    </Box>
  );
}
