import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(TIME_KEY) || 0;

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    // console.log('currenttime player second', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

const timeFunction = data => {
  const playerSecond = data.seconds;
  // console.log('player second', playerSecond);
  localStorage.setItem(TIME_KEY, playerSecond);
};
player.on('timeupdate', throttle(timeFunction, 1000));
