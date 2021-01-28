import axios from "axios";

const API = {
    loginUser: function (data) {
        return axios.post("http://localhost:3001/api/login", data);
    },
    signUpUser: function (data) {
        return axios.post("http://localhost:3001/api/signup", data);
    },
    getUser: function (id) {
        return axios.get("http://localhost:3001/api/users/" + id);
    },
    deleteUser: function (id) {
        return axios.delete("http://localhost:3001/api/users/" + id);
    },

    postTask: function () {
        return axios.post("http://localhost:3001/api/tasks");
    },
    getTask: function (id) {
        return axios.get("http://localhost:3001/api/tasks/" + id);
    },
    deleteTask: function (id) {
        return axios.delete("http://localhost:3001/api/tasks/" + id);
    },
};

export default API; 