import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__left">
          <img className='footer_albumLogo'
          src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440' alt=''/>
          <div className="footer__songInfo">
              <h4>I'm in Pain</h4>
              <p>Just-in-Biber</p>
          </div>
        </div>
        <div className="footer__center">
            <ShuffleIcon className='footer__green'></ShuffleIcon>
            <SkipPreviousIcon className='footer__icon'></SkipPreviousIcon>
            <PlayCircleOutlineIcon fontSize='large' className='footer__icon'></PlayCircleOutlineIcon>
            <SkipNextIcon className='footer__icon'></SkipNextIcon>
            <ReplayIcon className='footer__green'></ReplayIcon>
        </div>
        <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                <PlaylistPlayIcon/>
            </Grid>
            <Grid item>
                 <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
                <Slider/>
            </Grid>
            </Grid>
        </div>

    </div>
  )
}
export default Footer;
