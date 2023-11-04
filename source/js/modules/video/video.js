const posterElement =
document.querySelector('.gym__video-poster');
const videoPlayButtonElement = document.querySelector('.gym__video-play-button');
const videoElement = document.querySelector('.gym__video');

function onButtonVideoPlayClick() {
  posterElement.classList.add('isClose');
  videoPlayButtonElement.classList.add('isClose');
  videoElement.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" width="364" height="228" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
}

const setVideoPlayButtonListener = () => {
  videoPlayButtonElement.addEventListener('click', onButtonVideoPlayClick);
};

export {setVideoPlayButtonListener};
