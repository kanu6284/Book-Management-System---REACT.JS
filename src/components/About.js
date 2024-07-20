// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const About = () => {
  const styles = `
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .heading {
      color: #333;
      margin-bottom: 20px;
    }

    .button {
      margin-top: 20px;
    }

    .cardContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .card {
      width: 30%;
    }

    .cardMedia {
      height: 200px;
    }

    .imageContainer {
      width: 100%;
      height: auto;
    }

    .image {
      width: 100%;
    }

    @media (max-width: 768px) {
      .card {
        width: 100%;
      }
    }
  `;

  return (
    <div className="container">
      <style>{styles}</style>
      <Typography variant="h2" className="heading"></Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/" className="button">
            Go to Home
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className="imageContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt06sAls3Wx-z37hZjMECBMrNy_rNK316zTFA07kNBZg&s" alt="Placeholder" className="image" />
        </Grid>
      </Grid>
      <Typography variant="h3" className="heading">Our Images</Typography>
      <div className="cardContainer">
        <Card className="card">
          <CardMedia
            className="cardMedia"
            component="img"
            src="https://imageio.forbes.com/blogs-images/forbesbooksauthors/files/2019/08/bigstock-183651688.jpg?format=jpg&height=600&width=1200&fit=bounds"
            alt="Image 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              preeti negi
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="cardMedia"
            component="img"
            src="https://img.freepik.com/free-photo/people-with-crossed-arms-medium-shot_23-2149008948.jpg"
            alt="Image 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              muskan
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="cardMedia"
            component="img"
            src="https://www.randrmagonline.com/ext/resources/2021/03/30/1-RR0421-Cline-high-performing-team-members-900x550.jpg?1617115896"
            alt="Image 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              ekta
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
