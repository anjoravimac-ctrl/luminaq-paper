# LuminaQ

A research language for differentiable programs with verified complexity.

## 🚀 Why?

Modern ML code (Python + NumPy + JAX) has:
- no correctness guarantees
- silent bugs
- unknown complexity

LuminaQ makes programs **correct by construction**.

## 🔥 Demo

### Prevent invalid inputs

```nx
fn model(v: Vec(n)) -> Vec(n)
where ||v||₂ = 1.0

model([1,2,3])

❌ Compile-time error: Expected normalized vector.
```

### Verify complexity

```nx
fn sum(v: Vec(n)) -> Real
complexity O(n)

❌ If implementation is O(n²), compilation fails.
```

## 🌐 Playground

Open: [playground/index.html](playground/index.html)

## 📄 Paper

See [paper/main.tex](paper/main.tex)

## ⚠️ Status

Research prototype (not production-ready)

## 💬 Discussion

Launching on Hacker News soon.