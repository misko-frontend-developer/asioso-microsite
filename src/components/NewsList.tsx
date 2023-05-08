import { useContext, useEffect } from "react";
import { Box, Text, Grid, Skeleton, createStyles } from "@mantine/core";
import { NewsCard } from "./core/NewsCard";
import Navigation from "./core/Navigation";
import NewsContext from "context/NewsContext";
import useNewsPerCategory from "hooks/useNewsPerCategory";
import NewsArticle from "interfaces/Article";
const useStyles = createStyles((theme) => ({
  wrapper: { width: "80%", margin: "auto" },
  titleWrapper: {
    height: 100,
    marginTop: 100,
    [theme.fn.smallerThan("md")]: {
      marginTop: 50,
    },
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    letterSpacing: "-1px",
    lineHeight: "0.8rem",
    color: "gray",
    fontWeight: 900,
    textTransform: "uppercase",
    opacity: 0.2,
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  skeleton: {
    height: 400,
    width: 280,
    margin: 10,
  },
}));

interface NewsCategoryIF {
  loading: boolean;
  error: string;
  data: Array<NewsArticle>;
}
export const NewsList = () => {
  const { category, handleHeroDisplay } = useContext(NewsContext);
  const { data, loading, error }: NewsCategoryIF = useNewsPerCategory(category);

  const { classes } = useStyles();

  useEffect(() => {
    handleHeroDisplay(data[0]);
    console.log(data[0]);
  }, [data, handleHeroDisplay]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titleWrapper}>
        <Text className={classes.title}>{category ?? "General"}</Text>
      </Box>
      <Navigation />
      {error && <Text>{error}</Text>}
      <Grid grow>
        {loading
          ? Array.from(Array(20).keys()).map((m, key) => <Skeleton className={classes.skeleton} key={key} radius='md' />)
          : data.map((news: any, key: number) => (
              <Grid.Col md={6} lg={3} key={key}>
                <NewsCard data={news} />
              </Grid.Col>
            ))}
      </Grid>
    </Box>
  );
};
