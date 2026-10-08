from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser


PROJECT_DIR = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=str(PROJECT_DIR))
try:
    server = ThreadingHTTPServer(("127.0.0.1", 8765), handler)
except OSError:
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
port = server.server_address[1]
url = f"http://127.0.0.1:{port}/hanh-trinh-bac-ho.html"

print(f"Local map server ready: {url}", flush=True)
print("Keep this window open while using the globe. Press Ctrl+C to stop.", flush=True)
webbrowser.open_new(url)

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nLocal map server stopped.", flush=True)
finally:
    server.server_close()
