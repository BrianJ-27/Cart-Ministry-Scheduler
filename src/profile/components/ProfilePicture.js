import React from 'react';
import { makeStyles } from '@material-ui/styles';

export default function ProfilePicture({ profilePicture }) {
  const classes = useStyles();

  return (
    <div className={classes.pictureContainer}>
      <img data-testid="picture" className={classes.picture} src={profilePicture} />
    </div>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    ...theme,
    pictureContainer: {
      flex: '1',
    },
    picture: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
  'ProfilePicture'
);
