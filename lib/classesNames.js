const classesNames = (classes, mainClass) => {
  return (styles) => {
    return classes
      ? classes
          .replace(/^/, `${mainClass} `)
          .split(' ')
          .map((name) => `${styles[name]}`)
          .join(' ')
      : styles[mainClass];
  };
};

export default classesNames;
