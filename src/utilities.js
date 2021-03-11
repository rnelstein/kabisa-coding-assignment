export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

export const sortArrByLikes = (arr) => {
  return arr.sort((a, b) =>
    a.likes && b.likes && a.likes.length < b.likes.length ? 1 : -1
  );
};

export const filterLikedArr = (arr) => {
  return arr.filter((obj) => !!obj.likes)
};

