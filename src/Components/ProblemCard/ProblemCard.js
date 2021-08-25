import { Card, CardContent, Typography, Box } from "@material-ui/core";

export default function ProblemCard({ title, link }) {
  return (
    <Card>
      <CardContent>
        <Box component="span" display="inline">
          <Typography>
            <a href={link}> {title} </a>{" "}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
