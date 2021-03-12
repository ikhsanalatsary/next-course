/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import { initializeApollo } from '../lib/apolloClient';

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

/** @typedef {import('../generated/graphql').CourseEventsConnection} CourseEvents */
/** @typedef {import('@apollo/client').QueryResult<{courseEvents: CourseEvents}>} Result */

/**
 * @param {Props} props - react props
 */
export default function Home({ courseEvents }) {
  const classes = useStyles();

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
          {courseEvents.edges.map((elem) => (
            <Grid item xs={12} sm={6} key={elem.node.id}>
              <Card>
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

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elem.node.course.name}
                  </Typography>
                  <Typography>{elem.node.course.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" color="primary">
                    <Link href={`/${elem.node.id}`}>
                      <a>View</a>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

/** @typedef {import('next').GetStaticPropsContext} GetStaticPropsContext  */
/** @typedef {import('next').InferGetStaticPropsType<typeof getStaticProps>} Props  */

/**
 * @param {GetStaticPropsContext} context - props context
 */
export async function getStaticProps(context) {
  let client = initializeApollo();
  /** @type {Result} */
  let result = await client.query({
    query: COURSE_EVENTS_CONNECTION,
  });

  return {
    props: { courseEvents: result.data.courseEvents },
  };
}
