 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..31f8eed740a9e9e4ec346086a13f28e2f6b8f6da
--- /dev/null
+++ b/script.js
@@ -0,0 +1,13 @@
+const cursor = document.createElement('div');
+cursor.className = 'target-cursor';
+
+const cursorDot = document.createElement('div');
+cursorDot.className = 'target-dot';
+
+document.body.append(cursor, cursorDot);
+
+window.addEventListener('mousemove', (event) => {
+  const { clientX, clientY } = event;
+  cursor.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
+  cursorDot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
+});
 
EOF
)
