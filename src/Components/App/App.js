import "./App.css";
import "@fontsource/roboto";
import { Paper, Typography } from "@material-ui/core/";
import LoginButton from "../LoginButton/LoginButton";
import ProblemCard from "../ProblemCard/ProblemCard";

function App() {
  return (
    <div className="App">
      <Paper>
        <Typography>
          <h1>Blind 75 Leetcode </h1>
        </Typography>
        <LoginButton />
        <ProblemCard link="test" title="problem" />
      </Paper>
    </div>
  );
}

export default App;
