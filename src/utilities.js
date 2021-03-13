export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

export const sortQuotesByLikes = (arr) => {
  return arr.sort((a, b) =>
    a.likes && b.likes && a.likes.length < b.likes.length ? 1 : -1
  );
};

export const filterLikedQuotes = (arr) => {
  return arr.filter((obj) => !!obj.likes && !!obj.likes.length > 0);
};

export const findQuoteById = (arr, id) => {
  return arr.find((x) => x.id === id);
};

export const likesIncludesId = (arr, id) => {
  return arr.includes(id);
};
