import { useContext } from "react";
import NewsContext from "context/NewsContext";
import { useNavigate } from "react-router";
import { SiteWrapper } from "../components/SiteWrapper";
import { Box, Text, Image, createStyles } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  contentWrapper: {
    width: "50%",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
  content: {
    margin: "auto",
    color: "black",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 80,
    zIndex: 20,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  author: {
    fontWeight: 900,
    fontSize: theme.fontSizes.xl,
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  title: {
    fontWeight: 800,
    fontSize: theme.fontSizes.lg,
    marginBottom: 50,
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.md,
    },
  },
  text: {
    fontSize: theme.fontSizes.md,
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.sm,
    },
  },
  date: {
    fontSize: theme.fontSizes.sm,
    [theme.fn.smallerThan("md")]: {
      marginBottom: 30,
    },
  },
  backBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: 50,
    height: 50,
    position: "absolute",
    color: "white",
    backgroundColor: "black",
    top: 30,
    left: 30,
    borderRadius: 50,
  },
}));
export const SingleNews = () => {
  const { selectedNews } = useContext(NewsContext);
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <SiteWrapper>
      {selectedNews && (
        <Box className={classes.content}>
          <Box className={classes.contentWrapper}>
            <Text className={classes.author}>{selectedNews.source.name}</Text>
            <Text className={classes.title}>{selectedNews.title}</Text>
            <Text className={classes.text}>{selectedNews.description}</Text>
            <Text className={classes.date}>{new Date(selectedNews.publishedAt).toDateString()}</Text>
          </Box>
          <Image radius='md' maw={600} src={selectedNews.urlToImage} />
        </Box>
      )}
      <Box onClick={() => navigate(-1)} className={classes.backBtn}>
        <IconChevronLeft size={18} />
      </Box>
    </SiteWrapper>
  );
};
