import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import './Wrapper.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        boxShadow: 'none',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Wrapper() {

    const classes = useStyles();
    const [chipData1] = React.useState([
        { key: 0, label: 'React' },
        { key: 1, label: 'Sass' },
        { key: 2, label: 'Material-UI' },
    ]);
    const [chipData2] = React.useState([
        { key: 0, label: 'HTML5' },
        { key: 1, label: 'Sass' },
        { key: 2, label: 'JQuery' },
    ]);

  return (
      <div className="wrapper">
          <a id="Works" className="works">- WORKS -</a>
          <div className="margin">
              <Card className="card">
                  <Link href="https://master.d1ltu26ki4tmkb.amplifyapp.com/">
                  <CardActionArea>
                      <CardMedia
                          className="card_media"
                          image="./myportforio_20210109.png"
                          title="Contemplative Reptile"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              portfolio
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              <Paper component="ul" className={classes.root}>
                                  {chipData1.map((data) => {
                                      return (
                                          <li key={data.key}>
                                              <Chip
                                                  label={data.label}
                                                  className={classes.chip}
                                              />
                                          </li>
                                      );
                                  })}
                              </Paper>
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Link>
                  <CardActions>
                      <Button href="https://github.com/sanflat/portfolio" size="small" color="LINK">
                          <GitHubIcon />
                          <p className="code_view">code view</p>
                      </Button>
                  </CardActions>
              </Card>
              <Card className="card">
                  <Link href="https://master.df3wue0oj9d4e.amplifyapp.com/">
                      <CardActionArea>
                          <CardMedia
                              className="card_media"
                              image="./portfolio_base.png"
                              title="Contemplative Reptile"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                  portfolio_base
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <Paper component="ul" className={classes.root}>
                                      {chipData2.map((data) => {
                                          return (
                                              <li key={data.key}>
                                                  <Chip
                                                      label={data.label}
                                                      className={classes.chip}
                                                  />
                                              </li>
                                          );
                                      })}
                                  </Paper>
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Link>
                  <CardActions>
                      <Button href="https://github.com/sanflat/portfolio_base" size="small" color="LINK">
                          <GitHubIcon />
                          <p className="code_view">code view</p>
                      </Button>
                  </CardActions>
              </Card>
          </div>
          <div className="skill-margin">
              <a id="Skill" className="skill">- SKILL -</a>
              <div>
                  <p>[OS]: macOS</p>
                  <p>[DB]: MySQL</p>
                  <p>[SCM]: Git</p>
                  <p>[LANGUAGE]: Java 8 / PHP7 / Ruby2.6</p>
                  <p>[STYLE/MARKUP]: HTML / HTML5 / CSS3 / Sass</p>
                  <p>[FW]: Play 2 Framework / Laravel6 / Ruby on Rails5 / Spring Boot</p>
                  <p>[UI-FW]: Bootstrap / JavaScript / TypeScript / jQuery / React.js / Redux / webpack 4</p>
                  <p>[INFRA]: AWS / VPS / Docker</p>
              </div>
          </div>
      </div>
  );
}

export default Wrapper;
