import React, { Component } from "react";
import PictureSwiper from "./PictureSwiper";
import Paper from "@material-ui/core/Paper";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";

const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/autonmous/2.jpg',
    },
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/autonmous/1.png',
    }
];
class AiHackathon extends Component {
  render() {
    return (
        <div>
          <Title title={'Teradata Excellence Award - AI'}>
              <Typography style={{fontSize:'22px'}} variant={'display1'}>
                  Teradata
              </Typography>
              <Typography style={{fontSize:'16px'}} variant={'display1'}>
                  Mar 2017
              </Typography>
          </Title>
        <div className={'me'}>
          <Paper className={'me-c'}>
              <PictureSwiper imageList={imageList}/>
          </Paper>
        </div>
        </div>
    )
  }
}

export default AiHackathon;
