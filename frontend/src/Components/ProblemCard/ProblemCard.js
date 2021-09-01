import { Checkbox, FormControlLabel, Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useStyles } from "./ProblemCardStyles";
import { useState } from "react";

export default function ProblemCard({ title, link }) {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  return (
    <Box
      component="span"
      display="flex"
      justifyContent="space-between"
      className={styles.header}>
      <Link
        noWrap={true}
        className={checked ? styles.clicked_link : styles.link}
        href={link}>
        {title}
      </Link>
      <FormControlLabel
        className={styles.actions}
        control={
          <Checkbox
            name="checkedB"
            color="primary"
            onClick={() => setChecked(!checked)}
          />
        }
      />
    </Box>
  );
}
