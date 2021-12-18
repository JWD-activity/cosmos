export const buildPage = (currentPage, numPerPage) => {
  const start = (currentPage - 1) * numPerPage;
  const end = start + numPerPage;

  return { start, end };
};
