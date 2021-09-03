import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  masonryGrid: {
    display: "flex",
  },
  masonryColumn: {
    paddingLeft: "5px" /* gutter size */,
    backgroundClip: "padding-box",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
  },
}));
