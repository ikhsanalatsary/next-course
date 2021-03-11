/* eslint-disable react/prop-types */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/More';
import CircularProgress from '@material-ui/core/CircularProgress';

let genders = ['men', 'women'];

function getRandomInt(max = 0) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getGender() {
  return genders[getRandomInt(2)];
}

function getProfileImage() {
  return `https://randomuser.me/api/portraits/${getGender()}/${getRandomInt(
    99
  )}.jpg`;
}

/**
 * @type {React.NamedExoticComponent<{ students: Array<object> }>} props - React Props
 */
export let StudentListComponent = React.memo(
  ({ students }) => {
    return (
      <List disablePadding>
        {students.map((row, index) =>
          React.cloneElement(
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar random user ${index + 1}`}
                    src={getProfileImage()}
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
    );
  },
  (existingProps, incomingProps) => {
    return existingProps.students === incomingProps.students;
  }
);

/**
 * @typedef {object} Props - react props
 * @property {function} fetchMore - a function from useQuery
 * @property {number} first - a number
 * @property {object} students - students connection
 */

/**
 * @type {React.NamedExoticComponent<Props>} props - React Props
 */
export let StudentList = React.memo(
  ({ fetchMore, first, students }) => {
    const [loadingMore, setLoadingMore] = React.useState(false);

    let handleLoadMore = React.useCallback(() => {
      setLoadingMore(true);
      if (students.pageInfo.hasNextPage) {
        fetchMore({
          variables: {
            first,
            after: students.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newStudents = fetchMoreResult.courseEvent.students.edges;
            // eslint-disable-next-line prefer-destructuring
            const pageInfo = fetchMoreResult.courseEvent.students.pageInfo;
            const {
              students: prevStudents,
              ...rest
            } = previousResult.courseEvent;

            return {
              courseEvent: {
                ...rest,
                // Merging the student list
                students: {
                  edges: [...prevStudents.edges, ...newStudents],
                  pageInfo,
                  __typename: prevStudents.__typename,
                },
              },
            };
          },
        })
          .then(() => setLoadingMore(false))
          .catch(() => setLoadingMore(false));
      }
    }, [fetchMore, first, students]);

    return (
      <>
        <StudentListComponent students={students.edges} />
        {students.pageInfo.hasNextPage && (
          <Box m={2} display="flex" justifyContent="center">
            <Button
              size="medium"
              color="secondary"
              variant="outlined"
              startIcon={
                loadingMore ? (
                  <CircularProgress color="secondary" size={20} />
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
      </>
    );
  },
  (existingProps, incomingProps) => {
    return existingProps.students === incomingProps.students;
  }
);
