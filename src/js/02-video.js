import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('lastTime');

player.on('timeupdate', function (data) {
  localStorage.setItem('lastTime', JSON.stringify(data.seconds));
});

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
