import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/More';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Modal from '@material-ui/core/Modal';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Layout } from '../components/Layout';
import { TabPanel, a11yProps } from '../components/TabPanel';

dayjs.extend(customParseFormat);

/**
 * convertBase64ToArray
 * @param {string} value Base64 string
 * @returns {[string, string, string, string]} List of strings
 */
function convertBase64ToArray(value) {
  return JSON.parse(atob(value));
}

let STUDENT_MUTATION = gql`
  mutation RegisterStudentToEvent($courseEventId: bigint!, $name: String!) {
    insertStudentToCourseEvent(
      objects: {
        student: { data: { name: $name } }
        courseEventId: $courseEventId
      }
    ) {
      affected_rows
      returning {
        id
        createdAt
        student {
          id
          name
        }
      }
    }
  }
`;

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
          order_by: { createdAt: desc }
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

function updateExistingRecord(store, result, { id, first }) {
  let {
    data: {
      insertStudentToCourseEvent: { returning },
    },
  } = result;
  // console.log(store, returning);
  const data = store.readQuery({
    query: COURSE_EVENTS_DETAIL,
    variables: {
      id,
      first,
      after: null,
    },
  });
  // console.log('data', data);
  let students = data.courseEvent.students.edges;
  let newData = Array.isArray(returning) ? returning[0] : returning;
  let studentToCourseEventCreatedAt = newData.createdAt;
  let studentToCourseEventId = newData.id;
  let studentToCourseEventIntId = convertBase64ToArray(newData.id)[3];
  let newRawCursor = {
    created_at: studentToCourseEventCreatedAt,
    id: studentToCourseEventIntId,
  };
  let newCursor = btoa(JSON.stringify(newRawCursor));
  // console.log('addStudent -> newData', newData);
  // console.log('students', students);
  students = [...students].slice(0, -1);
  // console.log('after', students);
  let mergedData = {
    ...data,
    courseEvent: {
      ...data.courseEvent,
      students: {
        ...data.courseEvent.students,
        edges: [
          {
            cursor: newCursor,
            node: {
              id: studentToCourseEventId,
              student: {
                id: newData.student.id,
                name: newData.student.name,
                __typename: 'students',
              },
              __typename: 'studentToCourseEvents',
            },
            __typename: 'studentToCourseEventsEdge',
          },
          ...students,
        ],
        pageInfo: {
          ...data.courseEvent.students.pageInfo,
          startCursor: newCursor,
          endCursor: students[students.length - 1].cursor,
          hasNextPage: true,
        },
      },
    },
  };
  // console.log('mergedData', mergedData);
  store.writeQuery({
    query: COURSE_EVENTS_DETAIL,
    data: mergedData,
    variables: {
      id,
      first,
      after: null,
    },
  });
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    paper: {
      padding: '8px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 0,
    },
    input: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2, 6, 4),
      outline: 0,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  };
});

let genders = ['men', 'women'];

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
  const { data, error, fetchMore } = useQuery(COURSE_EVENTS_DETAIL, {
    variables: {
      id,
      first,
      after: null,
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let [addStudent] = useMutation(STUDENT_MUTATION);
  let inputRef = React.createRef(null);
  let saveBtnRef = React.createRef(null);
  let handleSubmit = React.useCallback(
    async (event) => {
      event.preventDefault();
      if (inputRef.current?.value) {
        // eslint-disable-next-line prefer-destructuring
        let value = inputRef.current.value;
        inputRef.current.value = '';
        try {
          await addStudent({
            variables: {
              courseEventId: convertBase64ToArray(data.courseEvent.id)[3],
              name: value,
            },
            update: (store, result) =>
              updateExistingRecord(store, result, { id, first }),
          });
        } catch (e) {
          console.error('err', e.message);
        }
        handleClose();
      }
    },
    [addStudent, data, id, inputRef]
  );
  const [loadingMore, setLoadingMore] = React.useState(false);
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
        // eslint-disable-next-line prefer-destructuring
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
  let courseEvent = data?.courseEvent ?? {};
  let students = courseEvent.students?.edges ?? [];
  let hasNextPage = courseEvent.students?.pageInfo?.hasNextPage ?? false;
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
                    Mulai:{' '}
                    {dayjs(data.courseEvent.startDate).format('DD MMMM YYYY')}
                  </Typography>
                  <Typography>
                    Sampai:{' '}
                    {dayjs(data.courseEvent.endDate).format('DD MMMM YYYY')}
                  </Typography>
                  <Typography>
                    Jam:{' '}
                    {dayjs(data.courseEvent.startTime, 'HH:mm').format('HH:mm')}{' '}
                    - {dayjs(data.courseEvent.endTime, 'HH:mm').format('HH:mm')}
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
                  <Box m={1} display="flex" justifyContent="flex-end">
                    <Button
                      size="medium"
                      color="secondary"
                      variant="outlined"
                      startIcon={<AddIcon />}
                      onClick={handleOpen}
                    >
                      Register
                    </Button>
                  </Box>
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
                          key: row.node.id,
                        }
                      )
                    )}
                  </List>
                  {hasNextPage && (
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
                  )}
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
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="register-student-modal"
        aria-describedby="register-student-to-course-event-modal"
      >
        <form
          className={classes.input}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            inputRef={inputRef}
            id="outlined-name"
            label="Name"
            type="text"
            variant="outlined"
          />
          <Box m={1} display="flex" justifyContent="flex-end">
            <Button
              ref={saveBtnRef}
              type="submit"
              size="medium"
              color="secondary"
              variant="outlined"
              startIcon={<SendIcon />}
            >
              Register
            </Button>
          </Box>
        </form>
      </Modal>
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
