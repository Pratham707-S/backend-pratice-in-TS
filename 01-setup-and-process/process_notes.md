# 📓 Cornell Notes: Node.js `process` Object

| **Track:** Backend Engineering in TypeScript | **Module:** 01-setup-and-process |
| :--- | :--- |
| **Topic:** Global `process` Architecture & API | **Topic:** Node.js Runtime Architecture |

---

## 📌 Cornell Notes Matrix

| 🔑 Cues / Questions (Recall Column) | 📝 Notes (Detailed Explanations & Code) |
| :--- | :--- |
| **What is `process`?**<br>Do we need to import it? | • `process` is a built-in **global object** in Node.js.<br>• Represents the currently running instance of the Node runtime.<br>• **No `require` or `import` needed** — accessible anywhere in the application.<br>• Inherits from `EventEmitter` class (supports `.on()` and `.emit()`). |
| **System Info:**<br>How to identify the process & OS? | • `process.pid`: Unique OS Process ID (shown in Task Manager / Activity Monitor).<br>• `process.platform`: OS type (`'darwin'` = Mac, `'win32'` = Windows, `'linux'` = Linux).<br>• `process.version`: Currently executing Node.js version (e.g. `'v22.11.0'`).<br>• `process.uptime()`: Running duration in seconds.<br>• `process.memoryUsage()`: Returns memory footprint (heapTotal, heapUsed, rss). |
| **`process.cwd()` vs `__dirname`?**<br>*(Classic Interview Question)* | • **`process.cwd()`** = *Current Working Directory* (where the terminal was located when executing the command). Dynamic.<br>• **`__dirname`** = Directory of the specific source code file. Static/Fixed to file path. |
| **What is `process.argv`?**<br>Why use `.slice(2)`? | • `process.argv` is an array of command-line arguments passed when running the script.<br>• `argv[0]`: Node/tsx executable path.<br>• `argv[1]`: File path being executed.<br>• `argv[2...]`: Actual user-supplied arguments.<br>```ts<br>// Slice off the first 2 system paths<br>const [username, port] = process.argv.slice(2);<br>``` |
| **Why is `process.env` critical?**<br>Production rule? | • Stores **Environment Variables** (OS configs, `.env` file values).<br>• **Rule:** Never hardcode secrets (DB passwords, API keys, JWT secrets) in code.<br>```ts<br>const PORT = process.env.PORT \|\| 5000;<br>const DB_URL = process.env.DATABASE_URL;<br>``` |
| **`process.exit(0)` vs `process.exit(1)`?**<br>When to use which? | • `process.exit(code)` immediately stops Node execution.<br>• **Code `0` (Success):** Normal termination, all tasks completed.<br>• **Code `1` (Failure):** Uncaught exception, missing environment variable, DB failure.<br>```ts<br>if (!process.env.DB_URL) {<br>  console.error("Missing DB_URL!");<br>  process.exit(1);<br>}<br>``` |
| **What are Process Events?**<br>What is Graceful Shutdown? | • `process.on('exit', (code) => { ... })`: Runs when process is closing (only synchronous code allowed).<br>• `process.on('uncaughtException', err => { ... })`: Catches fatal unhandled errors to log before exiting.<br>• `process.on('SIGINT', () => { ... })`: Intercepts `Ctrl + C`. Used to close DB pools, finish active HTTP requests, and exit cleanly without data corruption (**Graceful Shutdown**). |

---

## 🎯 Summary (The Big Picture)

> **Summary:**  
> The `process` object is Node.js's bridge between JavaScript code and the underlying Operating System. It enables:  
> 1. Reading CLI arguments via `process.argv.slice(2)`  
> 2. Securing configuration through `process.env`  
> 3. Monitoring runtime health using `pid`, `platform`, `uptime()`, and `memoryUsage()`  
> 4. Safely shutting down services via `exit(0)` / `exit(1)` and the `SIGINT` graceful shutdown event.
