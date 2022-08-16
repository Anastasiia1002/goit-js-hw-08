import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'lastTime';
const currentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', function (data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
});

player
  .setCurrentTime(currentTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
