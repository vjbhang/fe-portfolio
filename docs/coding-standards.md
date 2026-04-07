# JS / TS Coding Standards

> Labels: **must** = non-negotiable · **good** = strongly recommended

---

## 1. Naming & structure

- [ ] Use camelCase for variables and functions — e.g. `getUserData`, not `get_user_data` · **must**
- [ ] Use PascalCase for classes, interfaces, and React components — e.g. `UserProfile`, `ApiClient` · **must**
- [ ] Use SCREAMING_SNAKE_CASE for module-level constants — e.g. `MAX_RETRIES = 3` · **good**
- [ ] Name booleans with `is` / `has` / `can` / `should` prefix — e.g. `isLoading`, `hasError` · **good**
- [ ] Keep functions small — one clear responsibility each. If it needs more than one paragraph to describe, split it · **must**

---

## 2. TypeScript

- [ ] Avoid using `any` — prefer `unknown`, generics, or explicit types. `any` silences the compiler and hides bugs · **must**
- [ ] Enable strict mode in `tsconfig.json` — set `"strict": true` to catch nullability and type errors early · **must**
- [ ] Use `type` for unions/intersections, `interface` for object shapes · **good**
- [ ] Prefer `readonly` for data that should not be mutated — e.g. `readonly userId: string` · **good**
- [ ] Use optional chaining (`?.`) and nullish coalescing (`??`) over manual null checks · **good**

---

## 3. Functions & logic

- [ ] Prefer `const` over `let`; avoid `var` entirely — reduces accidental reassignment bugs · **must**
- [ ] Use `async`/`await` over `.then()` chains — easier to read, easier to debug · **must**
- [ ] Handle all promise rejections — never leave a floating `await`. Wrap in `try/catch` or use `.catch()` · **must**
- [ ] Avoid deep nesting — use early returns. The "happy path" should be the main body of a function · **good**
- [ ] Prefer pure functions where possible — same input → same output, no side effects · **good**

---

## 4. Files & modules

- [ ] One module per file; keep files under ~300 lines · **good**
- [ ] Use named exports over default exports — enables better refactoring and IDE tooling · **good**
- [ ] Group imports: external libs → internal modules → local files, separated by blank lines · **good**
- [ ] Use path aliases instead of deep relative imports — e.g. `@/utils/...` instead of `../../../../utils/...` · **good**

---

## 5. Comments & docs

- [ ] Write comments that explain _why_, not _what_ — the code shows what; the comment explains intent or trade-off · **must**
- [ ] Add JSDoc/TSDoc to all exported functions and types — enables IDE hover docs · **good**
- [ ] Remove commented-out code before committing — use git history instead · **must**
- [ ] Use `TODO:` and `FIXME:` tags consistently so they are searchable · **good**

---

## 6. Testing

- [ ] Write tests alongside new features, not after — aim for at least one test per exported function · **must**
- [ ] Follow Arrange / Act / Assert structure in each test · **good**
- [ ] Test edge cases: null, empty arrays, max values — happy path tests alone give false confidence · **good**
- [ ] Keep tests independent — no shared mutable state between tests. Order-dependent tests are fragile · **must**

---

## 7. Git & commits

- [ ] Use conventional commit messages — e.g. `feat: add user login`, `fix: handle empty array` · **must**
- [ ] Commit small, logical units of work — each commit should build and pass tests on its own · **must**
- [ ] Never commit secrets or API keys — use `.env` files and add them to `.gitignore` · **must**
- [ ] Keep a `.gitignore` that covers `node_modules`, `.env`, and build output · **good**
