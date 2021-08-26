import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Column, Row, Item } from "@mui-treasury/components/flex";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
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
    margin: "0 20px",
  },
}));

export default function ProblemCard({ title, link }) {
  const styles = useStyles();
  return (
    <Column p={0} gap={0} className={styles.card}>
      <Row wrap p={2} alignItems={"baseline"} className={styles.header}>
        <Item stretched className={styles.headline}>
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
