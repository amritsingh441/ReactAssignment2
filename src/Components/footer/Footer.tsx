import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <footer>
          <Container maxWidth="lg">
            <Typography id="footer1" variant="subtitle1" color="textSecondary" align="center" gutterBottom>
             Copyright info @Telegraph
            </Typography>
            <Typography id="footer2" variant="subtitle1" align="center" color="textSecondary" component="p">
                  All Rights Reserved @The Telegraph & co. 2020.                                 
            </Typography>
          </Container>
        </footer>
      );
}

export default Footer;