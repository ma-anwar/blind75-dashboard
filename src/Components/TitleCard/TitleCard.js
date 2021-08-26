import { Column, Row, Item } from "@mui-treasury/components/flex";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import ProblemCard from "../ProblemCard/ProblemCard";
import { problems } from "../App/data";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    overflow: "hidden",
  },
  header: {
    fontFamily: "Barlow, san-serif",
    backgroundColor: "#fff",
  },
  headline: {
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
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
    <Column p={0} gap={0} className={styles.card} m={1}>
      <Row wrap p={2} alignItems={"baseline"} className={styles.header}>
        <Item stretched className={styles.headline}>
          {getTitle(title)}
        </Item>
        <Item className={styles.actions}>
          <Link className={styles.link}>Hide</Link>
        </Item>
      </Row>
      {getProblems().map((problem, i) => (
        <div>
          <ProblemCard link={problem.link} title={problem.title} />
          <Divider variant={"middle"} className={styles.divider} />
        </div>
      ))}
    </Column>
  );
}
