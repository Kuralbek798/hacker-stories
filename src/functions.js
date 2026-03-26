const welcome = {
  greeting: "Hey",
  title: "React is cool!",
};

function getTitle(obj) {
  return obj.title;
}

const array = [
  { title: "React", url: "https://react.dev/", author: "Jordan Walke", num_comments: 3, points: 4, objectID: 0 },
  { title: "Redux", url: "https://redux.js.org/", author: "Dan Abramov, Andrew Clark", num_comments: 2, points: 5, objectID: 1 },
];

// This must be the "exit" of the file
export default { welcome, getTitle, array };