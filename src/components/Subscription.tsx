import { Box, Container, Text, TextInput, Button, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 400,
    display: "flex",
    justifyContent: "space-evenly",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(147,189,50,1) 0%, rgba(147,189,50,1) 41%, rgba(97,129,23,1) 75%)",
    color: "white",
    marginTop: 100,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  textWrapper: {
    width: "30%",
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    marginBottom: "auto",
    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
      margin: "auto",
      textAlign: "center",
    },
  },
  button: {
    backgroundColor: "#93bd32",
    height: 40,
    fontWeight: 500,
    letterSpacing: 2,
    fontSize: 14,
    marginLeft: 20,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      marginLeft: 0,
      marginTop: 10,
    },
  },
  formWrapper: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
      flexDirection: "column",
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
    <Container fluid className={classes.wrapper}>
      <Box className={classes.textWrapper}>
        <Text sx={{ fontSize: "2.5rem", fontWeight: 600 }}>Subscribe to our </Text>
        <Text sx={{ fontSize: "2.5rem", fontWeight: 900 }}>Newsletter!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </Box>
      <Box className={classes.formWrapper}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Box sx={{ display: "flex" }}>
            <TextInput {...form.getInputProps("email")} placeholder='Your email address' size='md' />
            <Button type='submit' radius='sm' className={classes.button}>
              Subscribe
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
