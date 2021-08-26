import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Column, Row, Item } from "@mui-treasury/components/flex";

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
    margin: "0 0rem 0 1rem",
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "50%",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
}));

export default function ProblemCard({ title, link }) {
  const styles = useStyles();
  return (
    <Column p={0} gap={0} className={styles.card}>
      <Row wrap p={1} alignItems={"baseline"} className={styles.header}>
        <Item stretched className={styles.headline} textOverflow="ellipsis">
          <Link className={styles.link} href={link}>
            {title}
          </Link>
        </Item>
        <Item className={styles.actions}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
          />
        </Item>
      </Row>
    </Column>
  );
}
