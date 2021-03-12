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
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Modal from '@material-ui/core/Modal';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import Image from 'next/image';
import { Layout } from '../components/Layout';
import { TabPanel, a11yProps } from '../components/TabPanel';
import {
  COURSE_EVENTS_DETAIL,
  REGISTER_STUDENT_TO_EVENT as STUDENT_MUTATION,
} from '../components/CourseDetail.gql';
import { StudentList } from '../components/StudentList';

dayjs.extend(customParseFormat);

/**
 * convertBase64ToArray
 * @param {string} value Base64 string ArrayLike '[1, ..., ..., intId]'
 * @returns {[string, string, string, string]} List of strings
 */
function convertBase64ToArray(value) {
  return JSON.parse(atob(value));
}

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

const picsumLoader = ({ src, width }) => {
  return `${src}/${width}`;
};

/** @typedef {import('../generated/graphql').Node} Node */
/** @typedef {import('../generated/graphql').Scalars['String']} Cursor */

/**
 * @typedef {object} CourseEventsVariable
 * @property {Node["id"]} id - params id
 * @property {number} first - pick first records in total
 * @property {Cursor | null} after - cursor node id
 */

/** @typedef {import('../generated/graphql').CourseEvents} CourseEvents */
/** @typedef {CourseEvents & {students: CourseEvents['studentToCourseEvents_connection']}} EnhancedCourseEvents */
/** @typedef {import('@apollo/client').QueryResult<{courseEvent: EnhancedCourseEvents }, CourseEventsVariable>} Result */

/**
 * @param {Props} props - react props
 */
export default function CourseDetail(props) {
  const router = useRouter();
  /** @type {{ id: Node['id'] }} - params id */
  const { id } = router.query;
  const classes = useStyles();
  const first = 10;
  /** @type {Result} - Query result for courseEvent */
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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /** @type {EnhancedCourseEvents} - pick courseEvent object */
  let courseEvent = data?.courseEvent ?? { courseEvent: {} };
  let startDate = React.useMemo(
    () => dayjs(courseEvent.startDate).format('DD MMMM YYYY'),
    [courseEvent.startDate]
  );
  let endDate = React.useMemo(
    () => dayjs(courseEvent.endDate).format('DD MMMM YYYY'),
    [courseEvent.endDate]
  );
  let startTime = React.useMemo(
    () => dayjs(courseEvent.startTime, 'HH:mm').format('HH:mm'),
    [courseEvent.startTime]
  );
  let endTime = React.useMemo(
    () => dayjs(courseEvent.endTime, 'HH:mm').format('HH:mm'),
    [courseEvent.endTime]
  );
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
          <Grid item xs={12} md={8}>
            {data ? (
              <Card>
                <CardMedia>
                  <Image
                    loader={picsumLoader}
                    layout="responsive"
                    src="https://picsum.photos"
                    alt={data.courseEvent.course.name}
                    width={500}
                    height={300}
                  />
                </CardMedia>
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
                    variant="scrollable"
                  >
                    <Tab label="Waktu tanggal" {...a11yProps(0)} />
                    <Tab label="Lokasi" {...a11yProps(1)} />
                    <Tab label="Pengajar" {...a11yProps(2)} />
                    <Tab label="Peserta" {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Typography>Mulai: {startDate}</Typography>
                  <Typography>Sampai: {endDate}</Typography>
                  <Typography>
                    Jam: {startTime} - {endTime}
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
                      color="primary"
                      variant="outlined"
                      startIcon={<PersonAddIcon />}
                      onClick={handleOpen}
                    >
                      Register
                    </Button>
                  </Box>
                  <StudentList
                    fetchMore={fetchMore}
                    first={first}
                    students={courseEvent.students}
                  />
                </TabPanel>
              </Card>
            ) : (
              <Card>
                <Skeleton variant="rect" width="100%" height={300} />
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
              color="primary"
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
