import axios from "axios";

const API = {
    loginUser: function (data) {
        return axios.post("http://localhost:4000/api/login", data);
    },
    signUpUser: function (data) {
        return axios.post("http://localhost:4000/api/signup", data);
    },
    getUser: function (id) {
        return axios.get("http://localhost:4000/api/user/" + id);
    },
    deleteUser: function (id) {
        return axios.delete("http://localhost:4000/api/user/" + id);
    },

    postTask: function (user, data) {
        return axios.post("http://localhost:4000/api/tasks/" + user, data);
    },
    getTasks: function (user, data) {
        return axios.get("http://localhost:4000/api/tasks/" + user, data);
    },
    deleteTask: function (user, id) {
        return axios.delete("http://localhost:4000/api/tasks/" + user + id);
    },
};

export default API; 