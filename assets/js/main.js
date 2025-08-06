// Untuk chtv.html (semua channel)
if (document.getElementById("tv-channels")) {
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
}

// Untuk chtvsport.html (khusus type: sport)
if (document.getElementById("sport-channels")) {
  fetch("data/iframe.json")
    .then((res) => res.json())
    .then((channels) => {
      const container = document.getElementById("sport-channels");
      channels
        .filter((ch) => ch.type === "sport")
        .forEach((channel) => {
          container.innerHTML += `
            <div class="card" onclick="location.href='chtvsport.html?src=${encodeURIComponent(channel.src)}&title=${encodeURIComponent(channel.title)}'">
              <img src="${channel.poster}" alt="${channel.title}" />
              <div class="card-title">${channel.title}</div>
            </div>
          `;
        });
    });
}
