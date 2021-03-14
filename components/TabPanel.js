/* eslint-disable react/prop-types */
import Box from '@material-ui/core/Box';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`course-detail-${index}`}
      aria-labelledby={`course-detail-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export function a11yProps(index) {
  return {
    id: `course-detail-tab-${index}`,
    'aria-controls': `course-detail-tabpanel-${index}`,
  };
}
