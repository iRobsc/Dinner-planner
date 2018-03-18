export default function round(number, decimals = 1) {
  return Math.round(number * (10 ** decimals)) / (10 ** decimals);
}
