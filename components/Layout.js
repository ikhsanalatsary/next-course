import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export function Layout({ children }) {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
