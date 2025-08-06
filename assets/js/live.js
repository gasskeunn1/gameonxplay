fetch('data/matches.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('liveCards');
    const now = new Date();
    const userTimeOffset = new Date().getTimezoneOffset() * -1;

    data.sort((a, b) => new Date(a.start) - new Date(b.start));

    data.forEach(item => {
      const startTime = new Date(item.start);
      const isLive = now >= startTime && now <= new Date(startTime.getTime() + 3 * 60 * 60 * 1000); // 3 jam tayang

      const timeText = isLive
        ? `<span class="live-badge">🔴 LIVE</span>`
        : startTime.toLocaleString('id-ID', {
            weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
            timeZoneName: 'short'
          });

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.poster}" alt="${item.title}" />
        <div class="card-title">${item.title}</div>
        <div class="card-time">${timeText}</div>
        <button class="card-btn" onclick="playStream('${item.src}')">Tonton</button>
      `;
      container.appendChild(card);
    });
  });

function playStream(src) {
  const player = videojs('mainPlayer');
  player.src({ type: 'application/x-mpegURL', src });
  player.play();
}
