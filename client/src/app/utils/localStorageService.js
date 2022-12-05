export function toStorage(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
}

export function fromStorage(item) {
  return JSON.parse(localStorage.getItem(item));
}
