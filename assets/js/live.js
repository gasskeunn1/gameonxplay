document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoSrc = urlParams.get("src");
  const title = urlParams.get("title");

  document.getElementById("stream-title").innerText = title || "Live Streaming";

  if (videoSrc) {
    const player = videojs("videoPlayer");
    player.src({
      src: videoSrc,
      type: videoSrc.includes(".mpd") ? "application/dash+xml" : "application/x-mpegURL"
    });
  } else {
    alert("Link streaming tidak ditemukan.");
  }
});
