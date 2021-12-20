///////////////////////////////// PAGENATION
// Slice data
export const buildPage = (currentPage, numPerPage) => {
  const start = (currentPage - 1) * numPerPage;
  const end = start + numPerPage;

  return { start, end };
};

// Controll navigation of detail page
export const navigateDetailPage = (goto, data, id) => {
  let selectedId;
  const totalPage = data.length;
  const index = getCurrentIndex(data, id);
  const currentPage = index + 1;

  if (goto === 'next') {
    if (currentPage < totalPage) selectedId = data[index + 1].id;
    else return { selectedId: id };
  }
  if (goto === 'prev') {
    if (currentPage > 1) selectedId = data[index - 1].id;
    else return { selectedId: id };
  }

  return { selectedId };
};

// Find index of current item
export const getCurrentIndex = (data, id) => {
  return data.findIndex((item) => item.id === +id);
};

///////////////////////////////// LOCALSTORAGE
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

// Check empty data
export const isEmptyData = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};
///////////////////////////////// FILTERS
export const newsFilter = (data, query) => {
  return data.filter((news) => news.newsSite.includes(query));
};

export const astronautsFilter = (data, query) => {
  console.log('UTIL', data);
  return data.filter((astronaut) => astronaut.status.name.includes(query));
};
///////////////////////////////// OTHERS
export const checkButtonTarget = (target) => {
  const element = target.nodeName;
  if (element === 'BUTTON' || element === 'path' || element === 'svg')
    return true;
  else return false;
};
