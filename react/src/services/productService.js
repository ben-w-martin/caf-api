import axios from "axios";

const endpoint = import.meta.VITE_API_ENDPOINT + "products";

const getAll = () => {
  const config = {
    method: "GET",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const add = (payload) => {
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const update = (payload, id) => {
  const config = {
    method: "PUT",
    url: endpoint + "/" + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const deleteById = (id) => {
  const config = {
    method: "DELETE",
    url: endpoint + "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getAll, add, update, deleteById };
