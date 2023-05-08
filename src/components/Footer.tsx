import { Box, Grid, Image, Container, Text, createStyles } from "@mantine/core";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 400,
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
    },
  },
  contentWrapper: {
    height: "100%",
    margin: "auto",
  },
  textWrapper: {
    [theme.fn.smallerThan("md")]: {
      marginTop: 20,
    },
  },
  contactUs: {
    fontSize: theme.fontSizes.xl,
    lineHeight: "1em",
    fontWeight: 600,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  letsTalk: {
    fontSize: theme.fontSizes.xl,

    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  subtitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 40,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 0,
      marginTop: 40,
    },
  },
  linkWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
    },
  },
  links: {
    display: "flex",
    fontSize: theme.fontSizes.sm,
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
}));
export const Footer = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper} fluid>
      <Grid className={classes.contentWrapper} justify='space-around' align='center' gutter='xl'>
        <Grid.Col md={8} lg={3}>
          <Box className={classes.textWrapper}>
            <Text className={classes.contactUs}>Contact us.</Text>
            <Text className={classes.letsTalk}>Let's Talk.</Text>
          </Box>
        </Grid.Col>
        <Grid.Col md={8} lg={5}>
          <Box className={classes.links}>
            <Box>
              <Text className={classes.subtitle}>Resource</Text>
              <Text my={10}>NewsApi.org</Text>
            </Box>
            <Box>
              <Text className={classes.subtitle}>Where we are</Text>
              <Text my={10}>
                <Box className={classes.linkWrapper}>
                  <IconMapPin style={{ color: "#93bd32", marginRight: 5 }} size={20} /> Test Location
                </Box>
              </Text>
            </Box>
            <Box>
              <Text className={classes.subtitle}>Out contact info</Text>
              <Text my={10}>
                <Box className={classes.linkWrapper}>
                  <IconPhone style={{ color: "#93bd32", marginRight: 5 }} size={20} />
                  +61548489485
                </Box>
              </Text>
              <Text my={10}>
                <Box className={classes.linkWrapper}>
                  <IconMail style={{ color: "#93bd32", marginRight: 5 }} size={20} /> random@email.com
                </Box>
              </Text>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
