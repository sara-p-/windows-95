export function getIntegers(str) {
  const string = str.replace(/\D/g, '')
  return parseInt(string)
}
