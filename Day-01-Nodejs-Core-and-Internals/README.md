# 📘 Day 1: Node.js Core, Modules & Internals

### 🎯 Curriculum:
1. **01-setup-and-process**
   - Node.js installation, npm, package.json, scripts
   - tsconfig.json setup
   - `process` object (`process.env`, `process.argv`, `process.exit`)
2. **02-core-modules**
   - `crypto` module (hashing, random bytes)
   - `os` module (system information)
   - `path` module (`join`, `resolve`, `extname`)
   - `timers` module (`setTimeout`, `setInterval`, `setImmediate`, `process.nextTick`)
   - `url` module & `events` (`EventEmitter`, `on`, `emit`, `once`)
3. **03-async-programming**
   - Callbacks & Asynchronous flow
   - Promises & `async/await` error handling
4. **04-fs-buffers-streams**
   - File System APIs (Sync, Callback, Promise-based)
   - Buffers in Node.js
   - Streams (Readable, Writable, Pipe)
5. **05-http-server-apis**
   - Pure Node.js `http` server creation
   - Manual routing (`req.url`, `req.method`)
   - Reading request stream body & returning JSON
   - External API calls & `AbortController`
6. **06-runtime-internals**
   - V8 Engine & libuv event loop architecture
   - Blocking vs Non-blocking I/O
   - Node `cluster` module for multi-core scaling
