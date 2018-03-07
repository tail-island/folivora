export default function apply(f, ...args) {
  return (moreArgs) => f(...args, ...moreArgs);
}
