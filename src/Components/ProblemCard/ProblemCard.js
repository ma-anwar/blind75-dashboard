import { Checkbox, FormControlLabel, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

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
    margin: "0.9rem 1rem 0 1rem",
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
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
    <Box
      component="span"
      display="flex"
      justifyContent="space-between"
      className={styles.header}>
      <Link noWrap={true} className={styles.link} href={link}>
        {title}
      </Link>
      <FormControlLabel
        className={styles.actions}
        control={<Checkbox name="checkedB" color="primary" />}
      />
    </Box>
  );
}
