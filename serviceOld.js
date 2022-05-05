import axios from "axios";

const baseUrl = "http://archive.org/wayback";

const base = axios.create({ baseUrl });

const services = {
  searchByUrlAndTime(url, timestamp) {
    console.log("searchByUrlandTime", url, timestamp);
    const timestamp2 = 20220504042429;
    return base
      .get(`/available?url=${url}&timestamp=${timestamp2}`)
      .then((res) => res.data);
  },
};

export default services;
