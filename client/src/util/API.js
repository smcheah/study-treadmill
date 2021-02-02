import axios from "axios";

const API = {
    loginUser: function (data) {
        return axios.post("http://localhost:3001/api/login", data);
    },
    signUpUser: function (data) {
        return axios.post("http://localhost:3001/api/signup", data);
    },
    getUser: function (data) {
        return axios.get("http://localhost:3001/api/user", data);
    },
    deleteUser: function (id) {
        return axios.delete("http://localhost:3001/api/user/" + id);
    },

    postTask: function (data) {
        return axios.post("http://localhost:3001/api/tasks", data);
    },
    getTasks: function (data) {
        return axios.get("http://localhost:3001/api/tasks/", data);
    },
    deleteTask: function (id) {
        return axios.delete("http://localhost:3001/api/tasks/" + id);
    },
};

export default API; 