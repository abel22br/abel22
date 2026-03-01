const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (isFinePointer) {
  document.body.classList.add('custom-cursor');
}

const cursor = document.createElement('div');
cursor.className = 'target-cursor';

const cursorDot = document.createElement('div');
cursorDot.className = 'target-dot';

document.body.append(cursor, cursorDot);

const moveCursor = (x, y) => {
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;
};

moveCursor(window.innerWidth / 2, window.innerHeight / 2);

window.addEventListener('mousemove', (event) => {
  moveCursor(event.clientX, event.clientY);
});

const bgMusic = document.getElementById('bgMusic');
const playMusicBtn = document.getElementById('playMusicBtn');

const updateMusicButton = (isPlaying) => {
  playMusicBtn.textContent = isPlaying ? '⏸️ Pausar música' : '▶️ Tocar música';
};

const safePlay = async () => {
  try {
    await bgMusic.play();
    updateMusicButton(true);
  } catch {
    updateMusicButton(false);
  }
};

safePlay();

playMusicBtn.addEventListener('click', async () => {
  if (bgMusic.paused) {
    await safePlay();
    return;
  }

  bgMusic.pause();
  updateMusicButton(false);
});
