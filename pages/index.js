import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';

let COURSE_EVENTS_CONNECTION = gql`
  query Course {
    courseEvents: courseEvents_connection(first: 10) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          publicId
          course {
            name
            description
          }
        }
      }
    }
  }
`;

const picsumLoader = ({ src, width }) => {
  return `${src}/${width}`;
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  };
});

/**
 * @param {Props} props - react props
 */
export default function Home(props) {
  const classes = useStyles();
  const { data, error, loading } = useQuery(COURSE_EVENTS_CONNECTION);
  if (error) return <div>Error loading courses.</div>;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {(loading ? Array.from({ length: 2 }) : data.courseEvents.edges).map(
            (elem, index) => (
              <Grid item xs={12} sm={6} key={elem ? elem.node.id : index}>
                <Card>
                  {elem ? (
                    <CardMedia>
                      <Image
                        loader={picsumLoader}
                        layout="responsive"
                        src="https://picsum.photos"
                        alt={elem.node.course.name}
                        width={500}
                        height={300}
                      />
                    </CardMedia>
                  ) : (
                    <Skeleton variant="rect" width={500} height={300} />
                  )}

                  <CardContent>
                    {elem ? (
                      <>
                        <Typography gutterBottom variant="h5" component="h2">
                          {elem.node.course.name}
                        </Typography>
                        <Typography>{elem.node.course.description}</Typography>
                      </>
                    ) : (
                      <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="80%" />
                        <Skeleton width="60%" />
                      </Box>
                    )}
                  </CardContent>

                  {elem && (
                    <CardActions>
                      <Button size="medium" color="primary">
                        <Link href={`/${elem.node.id}`}>
                          <a>View</a>
                        </Link>
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  );
}

/** @typedef {import('next').GetServerSidePropsContext} GetServerSidePropsContext  */
/** @typedef {import('next').InferGetServerSidePropsType} InferGetServerSidePropsType  */
/** @typedef {InferGetServerSidePropsType<typeof getServerSideProps>} Props  */

/**
 * @param {GetServerSidePropsContext} ctx - GetServerSidePropsContext
 */
export async function getServerSideProps(ctx) {
  // Pass data to the page via props
  return { props: {} };
}
