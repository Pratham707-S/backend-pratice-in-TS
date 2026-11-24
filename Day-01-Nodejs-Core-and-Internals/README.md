# 📘 Day 1: Node.ts Core, Modules & Internals
⏱ **Video Range:** `0:00:00` - `5:07:05` (~5 Hours)

### 🎯 Topics Covered:
1. **01-setup-and-process** (`0:00 - 55:51`)
   - Node.ts installation, npm, package.tson, scripts
   - tsconfig.tson setup
   - `process` object (`process.env`, `process.argv`, `process.exit`)
2. **02-core-modules** (`55:51 - 1:49:14`)
   - `crypto` module (hashing, random bytes)
   - `os` module (system information)
   - `path` module (`join`, `resolve`, `extname`)
   - `timers` module (`setTimeout`, `setInterval`, `setImmediate`, `process.nextTick`)
   - `url` module & `events` (`EventEmitter`, `on`, `emit`, `once`)
3. **03-async-programming** (`1:49:14 - 2:09:21`)
   - Callbacks & Callback Hell
   - Promises & `async/await` error handling
4. **04-fs-buffers-streams** (`2:09:21 - 3:22:07`)
   - File System APIs (Sync, Callback, Promise-based)
   - Buffers in Node.ts
   - Streams (Readable, Writable, Pipe)
5. **05-http-server-apis** (`3:22:07 - 4:32:20`)
   - Pure Node.ts `http` server creation
   - Manual routing (`req.url`, `req.method`)
   - Reading request stream body & returning JSON
   - External API calls & `AbortController`
6. **06-runtime-internals** (`4:32:20 - 5:07:05`)
   - V8 Engine & libuv event loop architecture
   - Blocking vs Non-blocking I/O
   - Node `cluster` module for multi-core scaling
