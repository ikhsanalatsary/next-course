import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Skeleton from "@material-ui/lab/Skeleton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/More";
import CircularProgress from "@material-ui/core/CircularProgress";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as dayjs from "dayjs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import { Layout } from "../components/Layout";
import { TabPanel, a11yProps } from "../components/TabPanel";

dayjs.extend(customParseFormat);

let COURSE_EVENTS_DETAIL = gql`
  query CourseEventDetailQuery($id: ID!, $first: Int = 10, $after: String) {
    courseEvent: node(id: $id) {
      id
      ... on courseEvents {
        id
        course {
          id
          name
          description
        }
        startDate
        startTime
        endDate
        endTime
        location {
          id
          name
          address
          latitude
          longitude
        }
        teacher {
          id
          name
          skill
        }
        students: studentToCourseEvents_connection(
          first: $first
          after: $after
        ) {
          edges {
            cursor
            node {
              id
              student {
                id
                name
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    paper: {
      padding: "8px",
    },
  };
});

let genders = ["men", "women"];

function getRandomInt(max = 0) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * @param {Props} props - react props
 */
export default function CourseDetail(props) {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const first = 10;
  const [loadingMore, setLoadingMore] = React.useState(false);
  const { data, error, fetchMore } = useQuery(COURSE_EVENTS_DETAIL, {
    variables: {
      id,
      first,
      after: null,
    },
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let handleLoadMore = React.useCallback(() => {
    setLoadingMore(true);
    fetchMore({
      variables: {
        first,
        after: data.courseEvent.students.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newStudents = fetchMoreResult.courseEvent.students.edges;
        const pageInfo = fetchMoreResult.courseEvent.students.pageInfo;
        const { students, ...excludeStudent } = previousResult.courseEvent;
        setLoadingMore(false);

        return {
          courseEvent: {
            ...excludeStudent,
            // Merging the student list
            students: {
              edges: [...students.edges, ...newStudents],
              pageInfo,
              __typename: students.__typename,
            },
          },
        };
      },
    });
  }, [fetchMore, data]);
  let students = data?.courseEvent?.students?.edges ?? [];
  if (error) {
    return (
      <div className={classes.root}>
        <Layout>
          <Paper square className={classes.paper}>
            <Typography> Error loading courses.</Typography>
          </Paper>
        </Layout>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            {data ? (
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://picsum.photos/500"
                  title={data.courseEvent.course.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.courseEvent.course.name}
                  </Typography>
                  <Typography>{data.courseEvent.course.description}</Typography>
                </CardContent>
                <AppBar
                  position="static"
                  color="inherit"
                  component="header"
                  elevation={0}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="Course detail"
                  >
                    <Tab label="Waktu tanggal" {...a11yProps(0)} />
                    <Tab label="Lokasi" {...a11yProps(1)} />
                    <Tab label="Pengajar" {...a11yProps(2)} />
                    <Tab label="Peserta" {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Typography>
                    Mulai:{" "}
                    {dayjs(data.courseEvent.startDate).format("DD MMMM YYYY")}
                  </Typography>
                  <Typography>
                    Sampai:{" "}
                    {dayjs(data.courseEvent.endDate).format("DD MMMM YYYY")}
                  </Typography>
                  <Typography>
                    Jam:{" "}
                    {dayjs(data.courseEvent.startTime, "HH:mm").format("HH:mm")}{" "}
                    - {dayjs(data.courseEvent.endTime, "HH:mm").format("HH:mm")}
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography>{data.courseEvent.location.address}</Typography>
                  <div>
                    <Typography variant="h6" component="h3">
                      Peta:
                    </Typography>
                    <Typography>
                      {data.courseEvent.location.latitude}
                    </Typography>
                    <Typography>
                      {data.courseEvent.location.longitude}
                    </Typography>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography>{data.courseEvent.teacher.name}</Typography>
                  <Typography variant="inherit" component="strong">
                    {data.courseEvent.teacher.skill}
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <List disablePadding>
                    {students.map((row, index) =>
                      React.cloneElement(
                        <>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar
                                alt={`Avatar random user ${index + 1}`}
                                src={`https://randomuser.me/api/portraits/${
                                  genders[getRandomInt(2)]
                                }/${index + 1}.jpg`}
                              />
                            </ListItemAvatar>
                            <ListItemText primary={row.node.student.name} />
                          </ListItem>
                          <Divider variant="middle" component="li" />
                        </>,
                        {
                          key: row.node.id + index,
                        }
                      )
                    )}
                  </List>
                  <Box m={2} display="flex" justifyContent="center">
                    <Button
                      size="medium"
                      color="secondary"
                      variant="outlined"
                      startIcon={
                        loadingMore ? (
                          <CircularProgress size={20} />
                        ) : (
                          <MoreIcon />
                        )
                      }
                      onClick={handleLoadMore}
                    >
                      Load More
                    </Button>
                  </Box>
                </TabPanel>
              </Card>
            ) : (
              <Card>
                <Skeleton variant="rect" width="100%" height={500} />
                <CardContent>
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Box>
                </CardContent>
              </Card>
            )}
          </Grid>
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
