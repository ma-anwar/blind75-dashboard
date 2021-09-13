import { Checkbox, FormControlLabel, Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useStyles } from "./ProblemCardStyles";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProblemCard({ title, link, completed }) {
  const styles = useStyles();
  const [checked, setChecked] = useState(completed);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  function handleClick() {
    setChecked(!checked);
    if (isAuthenticated) fetchData();
  }

  async function fetchData() {
    const method = checked === false ? "POST" : "DELETE";
    const body = `{ "title": "${title}" }`;
    try {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_API_AUDIENCE,
      });
      const endpoint = `/api/v1/user/`;

      fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: method,
        body: body,
      });
    } catch (e) {
      console.log(e.message);
    }
  }

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
            checked={checked}
            onClick={() => handleClick()}
          />
        }
      />
    </Box>
  );
}
