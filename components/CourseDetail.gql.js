/* eslint-disable import/no-mutable-exports */
import { gql } from '@apollo/client';

export let STUDENT_TO_COURSE_FRAGMENT = gql`
  fragment studentToCourseFragment on courseEvents {
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
`;

export let COURSE_EVENTS_DETAIL = gql`
  ${STUDENT_TO_COURSE_FRAGMENT}
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
        ...studentToCourseFragment
      }
    }
  }
`;

export let REGISTER_STUDENT_TO_EVENT = gql`
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
