import { Box, Grid, Container, Text, TextInput, Button, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 400,
    marginTop: 100,
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(147,189,50,1) 0%, rgba(147,189,50,1) 41%, rgba(97,129,23,1) 75%)",
    color: "white",
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
    },
  },

  button: {
    backgroundColor: theme.colors.asiosoGreen[0],
    height: 50,
    fontWeight: 500,
    letterSpacing: 2,
    fontSize: 15,
    marginLeft: 20,
    borderRadius: 10,
    [theme.fn.smallerThan("md")]: {
      width: "70%",
      marginTop: 10,
      marginLeft: 0,
      backgroundColor: theme.colors.dark[3],
    },
    "&:hover": {
      backgroundColor: theme.colors.asiosoGreen[0],
    },
  },
  contentWrapper: { height: "100%", margin: "auto" },
  innerForm: {
    display: "flex",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  input: { width: "70%" },
  subscribe: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 600,
    lineHeight: "1em",
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  newsletter: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
}));
export const Subscription = () => {
  const form = useForm<{ email: string }>({
    initialValues: { email: "" },
    validate: (values) => ({
      email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email address",
    }),
  });
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} fluid>
      <Grid className={classes.contentWrapper} justify='space-around' align='center' gutter='xl'>
        <Grid.Col md={8} lg={4}>
          <Text className={classes.subscribe}>Subscribe to our </Text>
          <Text className={classes.newsletter}>Newsletter!</Text>
          <Text mt={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
        </Grid.Col>
        <Grid.Col md={8} lg={4}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Box className={classes.innerForm}>
              <TextInput className={classes.input} {...form.getInputProps("email")} placeholder='Your email address' size='lg' />
              <Button type='submit' radius='sm' className={classes.button} mb={form.errors.email ? 20 : 0}>
                Subscribe
              </Button>
            </Box>
          </form>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
