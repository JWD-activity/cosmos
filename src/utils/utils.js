export const buildPage = (currentPage, numPerPage) => {
  const start = (currentPage - 1) * numPerPage;
  const end = start + numPerPage;

  return { start, end };
};

// Check empty data
export const isEmptyData = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

// Get localStorage
export const setLocalStorage = (storageName, data) => {
  localStorage.setItem(storageName, JSON.stringify(data));
};

// Set localStorage
export const getLocalStorage = (storageName) => {
  if (window !== 'undefined' && localStorage.getItem(storageName))
    return JSON.parse(localStorage.getItem(storageName));
  else return false;
};

// Move page
export const movePage = (goto, page, totalPage, results, index) => {
  let currentId;

  if (goto === 'next') {
    if (page < totalPage) currentId = results.data[index + 1].id;
    else return;
  }
  if (goto === 'prev') {
    if (page > 1) currentId = results.data[index - 1].id;
    else return;
  }

  return currentId;
};

// Find index of current item
export const getCurrentIndex = (data, id) => {
  return data.findIndex((item) => item.id === id);
};
