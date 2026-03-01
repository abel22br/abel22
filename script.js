const cursor = document.createElement('div');
cursor.className = 'target-cursor';

const cursorDot = document.createElement('div');
cursorDot.className = 'target-dot';

document.body.append(cursor, cursorDot);

window.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  cursor.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
  cursorDot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
});
