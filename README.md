# backend-practice-in-ts

Production-grade backend engineering architecture implementations and runtime experiments in TypeScript. Covers Node.js runtime internals, relational database engineering with PostgreSQL, containerization with Docker, caching and streaming with Redis, distributed job queues with BullMQ, and secure authentication systems.

---

## Architecture & Systems Overview

### 1. Runtime Architecture & Core Systems
- **Process Lifecycle & OS Bindings**: Signal traps (`SIGINT`, `SIGTERM`), exit semantics (`0` vs `1`), runtime telemetry (`process.pid`, `process.platform`, `process.memoryUsage`), command-line argument tokenization via `process.argv`, and configuration management with `process.env`.
- **Core Cryptography**: Hash algorithms (SHA-256), cryptographic random token generation, symmetric encryption (AES-256-GCM), and secure password hashing.
- **System I/O & Buffers**: Binary buffers, stream pipelines (Readable, Writable, Transform), and asynchronous file operations.
- **Node.js Internals**: V8 engine interaction, libuv event loop phases (Timers, Pending Callbacks, Poll, Check, Close), and multi-core clustering.

### 2. Data Persistence & Relational Modeling (PostgreSQL)
- Schema design, constraints (Primary Key, Foreign Key, Unique, Check), and relational integrity.
- Advanced querying: compound filtering, joins, aggregations, subqueries, and pagination.
- Query optimization, B-tree indexes, execution plans (`EXPLAIN ANALYZE`), and ACID transactions with rollback mechanics.

### 3. Service Layer & API Architecture (Express & Docker)
- Modular service-controller architecture with typed request/response contracts.
- High-performance structured logging using Pino.
- Containerized infrastructure via Docker and Docker Compose.
- Automated database migration pipelines.
- Security: Stateless JWT authentication, password hashing, and role-based access control (RBAC) middleware.

### 4. Distributed Caching & Event Systems (Redis)
- In-memory key-value data structures: Strings, Hashes, Lists, Sets, and Sorted Sets.
- Cache-aside implementation, TTL strategies, and cache invalidation mechanics.
- Distributed rate limiting middleware.
- Redis Publish/Subscribe messaging pattern.

### 5. Background Processing & External Integrations
- Multipart file streaming with Multer and Cloudinary asset management.
- Asynchronous job queues and worker consumers using BullMQ and Redis.
- OAuth 2.0 authentication workflow.

---

## Technology Stack

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
