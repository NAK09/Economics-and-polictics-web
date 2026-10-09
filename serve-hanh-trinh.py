from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import webbrowser


PROJECT_DIR = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=str(PROJECT_DIR))
try:
    server = ThreadingHTTPServer(("127.0.0.1", 8765), handler)
except OSError:
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
port = server.server_address[1]
url = f"http://127.0.0.1:{port}/index.html"

print(f"Local map server ready: {url}", flush=True)
print("Keep this window open while using the globe. Press Ctrl+C to stop.", flush=True)
server_thread = Thread(target=server.serve_forever, kwargs={"poll_interval": 0.25}, daemon=True)
server_thread.start()
try:
    browser_opened = webbrowser.open_new_tab(url)
except Exception as error:
    print(f"Could not open a browser automatically: {error}", flush=True)
    browser_opened = False
if not browser_opened:
    print(f"Could not open a browser automatically. Open this address: {url}", flush=True)

try:
    server_thread.join()
except KeyboardInterrupt:
    print("\nLocal map server stopped.", flush=True)
    server.shutdown()
finally:
    server.server_close()
