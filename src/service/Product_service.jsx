import http from "../api/api";
import http_fake from "../api/fake_api";
const getAll = (page, size, title) => {
    return http.get(`productPage?page=${page}&&size=${size}&&title=${title}`);
};
const getProduct = (page, limit, name) => {
    return http_fake.get(`products?p=${page}&l=${limit}&name=${name}`);
}
const getAllByName = (name) => {
    return http_fake.get(`products?name=${name}`);
}
// other CRUD methods

export default {
    getAll, getProduct, getAllByName
}