import { Box, Text, Grid, Divider } from "@mantine/core";
import jsonData from "../news.json";
import { NewsCard } from "./core/NewsCard";
import Navigation from "./core/Navigation";
export const NewsList = () => {
  //   console.log(jsonData);
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Text sx={{ fontSize: "3rem", fontWeight: 700 }} my={30}>
        Popular Headlines
      </Text>
      <Navigation />
      {/* <Divider my={20} /> */}
      <Grid grow>
        {jsonData.map((d, key: number) => (
          <Grid.Col md={6} lg={3} key={key}>
            <NewsCard data={d} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

{
  /* <iframe
  src='https://www.youtube.com/embed/Dorf8i6lCuk'
  title='YouTube video player'
  frameBorder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowFullScreen
/> */
}
