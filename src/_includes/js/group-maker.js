form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);
  const size = fd.get("size"),
    total = fd.get("total");

  output.innerHTML = `For groups of ${size}, count off by ${Math.floor(
    total / size
  )}s.`;
});
