const cursor = document.createElement('div');
cursor.className = 'target-cursor';

const cursorDot = document.createElement('div');
cursorDot.className = 'target-dot';

document.body.append(cursor, cursorDot);

window.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
  cursorDot.style.left = `${clientX}px`;
  cursorDot.style.top = `${clientY}px`;
});

const bgMusic = document.getElementById('bgMusic');
const playMusicBtn = document.getElementById('playMusicBtn');

const updateMusicButton = (isPlaying) => {
  playMusicBtn.textContent = isPlaying ? '⏸️ Pausar música' : '▶️ Tocar música';
};

const tryAutoPlay = async () => {
  try {
    await bgMusic.play();
    updateMusicButton(true);
  } catch {
    updateMusicButton(false);
  }
};

tryAutoPlay();

playMusicBtn.addEventListener('click', async () => {
  if (bgMusic.paused) {
    await bgMusic.play();
    updateMusicButton(true);
    return;
  }

  bgMusic.pause();
  updateMusicButton(false);
});
