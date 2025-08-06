// Load data dari JSON
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/matches.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("live-events");
      data.forEach((match) => {
        container.innerHTML += `
          <div class="card" onclick="location.href='live.html?src=${encodeURIComponent(match.src)}&title=${encodeURIComponent(match.title)}'">
            <img src="${match.poster}" alt="${match.title}" />
            <div class="card-title">${match.title}</div>
          </div>
        `;
      });
    });

  fetch("data/iframe.json")
    .then((res) => res.json())
    .then((channels) => {
      const container = document.getElementById("tv-channels");
      channels.forEach((channel) => {
        container.innerHTML += `
          <div class="card" onclick="location.href='chtv.html?src=${encodeURIComponent(channel.src)}&title=${encodeURIComponent(channel.title)}'">
            <img src="${channel.poster}" alt="${channel.title}" />
            <div class="card-title">${channel.title}</div>
          </div>
        `;
      });
    });
});
