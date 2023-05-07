import { Box, Text, Grid, createStyles } from "@mantine/core";
import { NewsCard } from "./core/NewsCard";
import Navigation from "./core/Navigation";
import useNewsPerCategory from "hooks/useNewsPerCategory";
const useStyles = createStyles((theme) => ({}));
export const NewsList = () => {
  const { data } = useNewsPerCategory("business");

  console.log(data);

  const { classes } = useStyles();
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Text sx={{ fontSize: "3rem", fontWeight: 700 }} my={30}>
        Popular Headlines
      </Text>
      <Navigation />

      <Grid grow>
        {data.map((d, key: number) => (
          <Grid.Col md={6} lg={3} key={key}>
            <NewsCard data={d} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
