import axios from "axios";

export default {
  // search for Tibits
  findTibits: function(phrase) {
     return axios.get("/api/tibits/find/" + phrase );
   },
  // Gets all tibits
  getAllTibits: function() {
    return axios.get("/api/tibits");
  },
  // Deletes the saved book with the given id
  deleteTibit: function(id) {
    return axios.delete("/api/tibits/" + id);
  },
  // Create tibit
  createTibit: function(tibitData) {
    return axios.post("/api/tibits", tibitData);
  },
  // Update a given tibit
  updateTibit: function(id, tibitData) {
    return axios.put("/api/tibits/" + id, tibitData);
  },
  // Update a given tibit
  register: function(id, tibitData) {
    return axios.post("/api/users/register" + tibitData);
  },
  // Update a given tibit
  login: function(id, tibitData) {
    return axios.post("/api/users/login" + tibitData);
  },
};
