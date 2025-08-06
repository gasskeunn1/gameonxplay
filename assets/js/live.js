document.addEventListener("DOMContentLoaded", function () {
  fetch("data/matches.json")
    .then((res) => res.json())
    .then((matches) => {
      const container = document.getElementById("live-container");
      matches.forEach((match, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <video
            id="live-player-${i}"
            class="video-js vjs-default-skin"
            controls
            preload="auto"
            poster="${match.poster}"
            data-setup='{}'
          >
            <source src="${match.src}" type="application/x-mpegURL" />
          </video>
          <div class="card-title">${match.title}</div>
        `;
        container.appendChild(card);
        videojs(`live-player-${i}`);
      });
    });
});
