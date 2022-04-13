export const sort = (tab) => {
  return tab.sort(function ({ title: a }, { title: b }) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
};
