function upperFirstLetter(str) {
  const [firstChar, ...rest] = str;
  return `${firstChar.toUpperCase()}${rest.join("")}`;
}

export { upperFirstLetter };
