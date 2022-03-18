function trimmedStringToWord(str, maxLength = 250) {
  const trimmedString = str.substr(0, maxLength);
  return (
    trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    ) + ' [...]'
  );
}
export default trimmedStringToWord;
