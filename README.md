# backend-practice-in-ts

A personal repository dedicated to mastering production-grade backend engineering with Node.js, TypeScript, PostgreSQL, Docker, Redis, and Distributed Architecture.

---

## Progress Tracker

### Section 1: Node.js Core & Internals
- [x] **01-setup-and-process**: Node runtime setup, TypeScript configuration (`tsconfig.json`), `process` global object, CLI arguments (`process.argv`), environment variables (`process.env`), exit codes (`process.exit`), lifecycle events (`SIGINT` graceful shutdown), and custom interactive runtime visualizer.
- [ ✅] **02-core-modules**: Crypto, OS, Path, Timers, and EventEmitter.
- [ ✅] **03-async-programming**: Callbacks, Promises, and async/await error handling.
- [ ] **04-fs-buffers-streams**: File System APIs, Buffers, and Stream pipelines.
- [ ] **05-http-server-apis**: Vanilla Node HTTP server, routing, request streams, and response handling.
- [ ] **06-runtime-internals**: V8 engine, libuv event loop phases, and worker clustering.

---

### Section 2: PostgreSQL & Relational Database Mastery
- [ ] PostgreSQL Setup, Schemas & Table creation
- [ ] SQL Data Types & Constraints
- [ ] CRUD Operations, Filtering & Pagination
- [ ] Foreign Keys, 1-N, N-N Relationships & Joins (INNER / LEFT)
- [ ] Aggregations, Grouping & Subqueries
- [ ] Indexes & ACID Transactions

---

### Section 3: Express.js, Docker & Security
- [ ] Express Project Architecture & Pino Logger
- [ ] Docker Compose setup for PostgreSQL
- [ ] Database Migration Scripts & SQL Schemas
- [ ] User Authentication: Hashing (Bcrypt) & JWT Tokens
- [ ] Authorization & Role-Based Access Control (RBAC) Middleware
- [ ] REST API CRUD Endpoints

---

### Section 4: Redis Caching, Queues & Scaling
- [ ] Redis Data Structures & In-Memory Storage
- [ ] Redis Node.js Client
- [ ] Cache-Aside Pattern & Stale Cache Invalidation
- [ ] API Rate Limiting Middleware
- [ ] Redis Pub/Sub Architecture

---

### Section 5: Microservices & Advanced Backend
- [ ] File Uploads with Multer & Cloudinary
- [ ] Banner Management with Cache Invalidation
- [ ] BullMQ Background Job Processing & Worker Queues
- [ ] Google OAuth 2.0 Integration

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Language & Runtime** | TypeScript, Node.js (v22+) |
| **Execution Tooling** | `tsx`, `typescript` |
| **Primary Database** | PostgreSQL |
| **In-Memory Cache & Broker** | Redis |
| **Queue / Asynchronous Workers** | BullMQ |
| **Infrastructure & Containers** | Docker, Docker Compose |

---

## Repository Layout

```text
.
├── Day-01-Nodejs-Core-and-Internals/
│   └── 01-setup-and-process/
├── .gitignore
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js >= 22.0.0
- npm >= 10.0.0

### Running Modules
Modules are structured as isolated TypeScript entry points. Execute scripts directly using `tsx`:

```bash
# Example: Executing the Process & CLI Telemetry Service
npx tsx Day-01-Nodejs-Core-and-Internals/01-setup-and-process/src/process_demo.ts info

# Example: Starting server simulation with environment override
PORT=8080 npx tsx Day-01-Nodejs-Core-and-Internals/01-setup-and-process/src/process_demo.ts start
```
