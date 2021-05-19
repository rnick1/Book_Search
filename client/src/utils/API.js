import axios from "axios";

const api = {
    getBooks: function(book) {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book);
    },
    saveBook: function (bookData) {
      return axios.post("/api/books", bookData).then(result => result.data);
    },
  };

  export default api;