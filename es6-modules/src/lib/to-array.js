// module.exports = toArray;
export default function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
