function run() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  if (code.includes("model([1,2,3])")) {
    output.textContent =
`❌ Type error:

Expected: Vec(n) where ||v||₂ = 1.0
Found: Vec(n) where ||v||₂ ≠ 1.0

Hint: Did you forget to normalize?`;
    return;
  }

  if (code.includes("complexity O(n)") && code.includes("for")) {
    output.textContent =
`❌ Complexity mismatch:

Declared: O(n)
Inferred: O(n²)`;
    return;
  }

  output.textContent = "✅ Program verified.";
}