import { useState, useContext, useEffect } from "react";
import { Box, Button, Select, createStyles } from "@mantine/core";
import NewsContext from "context/NewsContext";
const useStyles = createStyles((theme) => ({
  buttons: {
    display: "block",
    marginBottom: 40,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  select: {
    display: "none",
    paddingBottom: 40,
    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },
}));
const Navigation = () => {
  const { classes } = useStyles();
  const navigation = [
    { label: "General", value: "general", color: "red" },
    { label: "Business", value: "business", color: "teal" },
    { label: "Entertainment", value: "entertainment", color: "pink" },
    { label: "Health", value: "health", color: "cyan" },
    { label: "Science", value: "science", color: "green" },
    { label: "Sports", value: "sports", color: "orange" },
    { label: "Technology", value: "technology", color: "violet" },
  ];
  const [category, setLocalCategory] = useState<string | null>("general");
  const { handleSetCategory } = useContext(NewsContext);

  useEffect(() => handleSetCategory(category), [handleSetCategory, category]);

  return (
    <>
      <Box className={classes.select}>
        <Select value={category} onChange={setLocalCategory} data={navigation} />
      </Box>
      <Box className={classes.buttons}>
        {navigation.map((n, key) => (
          <Button key={key} color={n.color} sx={{ fontSize: 15 }} mx={20} onClick={() => setLocalCategory(n.value)}>
            # {n.label}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Navigation;
