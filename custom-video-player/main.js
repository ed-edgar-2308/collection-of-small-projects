const video = $(".player__video");

video.onclick = togglePlay;
$(".toggle").onclick = togglePlay;
video.ontimeupdate = handleProgress;

$(".player__progress").onclick = function (e) {
  const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

$$("[data-skip]").forEach((button) => {
  button.onclick = function () {
    video.currentTime += +this.dataset.skip;
  };
});

$(".player__volume input").onchange = function () {
  video.volume = this.value;
};

function togglePlay() {
  if (video.paused) {
    video.play();
    this.innerHTML = "<i class='bx bx-pause' ></i>";
  } else {
    video.pause();
    this.innerHTML = "<i class='bx bx-play'></i>";
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  $(".player__progress__filled").style.width = `${percent}%`;

  $(".player__time").innerHTML = `
		${formatTime(video.currentTime)}/ ${formatTime(video.duration)}
		`;
  console.log("🚀 ~ handleProgress ~ video.currentTime:", video.currentTime);
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue, secondValue;

  minuteValue = minutes < 10 ? "0" + minutes : minutes;
  secondValue = seconds < 10 ? "0" + seconds : seconds;

  return minuteValue + ":" + secondValue;
}
