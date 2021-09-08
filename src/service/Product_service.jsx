import http from "../api/api";
const getAll = (page, size, title) => {
    return http.get(`productPage?page=${page}&&size=${size}&&title=${title}`);
};

// other CRUD methods

export default {
    getAll
}