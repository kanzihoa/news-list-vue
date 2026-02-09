import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};

const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};

async function fetchList(pageName) {
  try {
    const resp = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return resp;
  } catch (error) {
    console.log(`API::: ${error}`);
  }
}

const fetchUserInfo = (userName) => {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
};

const fetchAskInfo = (userId) => {
  return axios.get(`${config.baseUrl}item/${userId}.json`);
};

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList,
};
