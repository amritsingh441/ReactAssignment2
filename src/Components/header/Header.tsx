import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#b3b3b3'
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (<header className={classes.header}>
        <Container maxWidth="lg">
        <Typography id = "tHeader1" component="div" variant="h3" align="center" gutterBottom> 
        The Telegraph Header 1
        </Typography>
        <Typography id = "tHeader2"component="div" variant="h5" align="center" gutterBottom> 
        The Telegraph Header 2
        </Typography>
      </Container>
    </header>);
}

export default Header;