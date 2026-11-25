# Node.js `crypto` Module — Complete Engineering Reference

---

## 1. Video Core: The 3 Primary Concepts

### A. `crypto.randomBytes(size)` — Cryptographically Secure Tokens
* **Why?** `Math.random()` is pseudo-random and predictable. `randomBytes` uses hardware entropy.
* **Backend Use:** Email verification tokens, password reset links, session tokens.
```ts
const token = crypto.randomBytes(32).toString("hex");
```

### B. `crypto.createHash("sha256")` — One-Way Hashing
* **Why?** Irreversible fingerprint. Data -> Hash (always identical for same input), but Hash -> Data is mathematically impossible.
* **Backend Use:** Integrity checks, caching keys, checksums.
```ts
const hash = crypto.createHash("sha256").update("password123").digest("hex");
```

### C. `crypto.createCipheriv` & `createDecipheriv` — Symmetric Encryption
* **Why?** Reversible security. When data needs to be locked and later unlocked (e.g. storing API keys, sensitive tokens).
* **Algorithm:** `aes-256-cbc` requires a 32-byte key and a 16-byte initialization vector (IV).
```ts
// Encrypt
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update(plainText, "utf8", "hex") + cipher.final("hex");

// Decrypt
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
```

---

## 2. Industry Extras: What Every Backend Engineer Actually Uses

### D. `crypto.randomUUID()` — Production Primary Keys
* Generates RFC 4122 Version 4 UUID.
* **Why?** Standard auto-increment integer IDs (`id: 1, 2, 3`) expose total counts and invite enumeration attacks. UUIDs prevent this.
```ts
const userId = crypto.randomUUID(); // '36b8f84d-df4e-4d49-b662-bcde71a8764f'
```

### E. `crypto.createHmac("sha256", secret)` — Webhook Signatures
* Hash mixed with a shared secret key.
* **Why?** Verifies that incoming webhooks (e.g., Stripe, Razorpay, GitHub) were genuinely sent by the provider and not intercepted or forged.
```ts
const signature = crypto.createHmac("sha256", secretKey).update(payload).digest("hex");
```

### F. `crypto.timingSafeEqual` — Timing Attack Shield
* **Why?** Regular string comparison (`signature === received`) exits early on the first mismatched character. Attackers measure execution time down to nanoseconds to guess keys byte-by-byte (Timing Attack).
* `timingSafeEqual` takes constant time regardless of where the mismatch occurs.
```ts
const isAuthentic = crypto.timingSafeEqual(
  Buffer.from(sigA, "hex"),
  Buffer.from(sigB, "hex")
);
```
