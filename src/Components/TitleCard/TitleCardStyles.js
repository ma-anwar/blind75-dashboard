import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
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
