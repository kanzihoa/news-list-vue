import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList,
} from "../api/index";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((resp) => {
  //       context.commit("SET_NEWS", resp.data);
  //       // console.log(resp.data);
  //       return resp;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // async
  async FETCH_NEWS(context) {
    try {
      const resp = await fetchNewsList();
      context.commit("SET_NEWS", resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //       // console.log(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // async
  async FETCH_JOBS({ commit }) {
    try {
      const resp = await fetchJobsList();
      commit("SET_JOBS", resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_ASKS({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASKS", data);
  //       // console.log(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_ASKS({ commit }) {
    try {
      const resp = await fetchAskList();
      commit("SET_ASKS", resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit("SET_USER", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_USER({ commit }, name) {
    try {
      const resp = await fetchUserInfo(name);
      commit("SET_USER", resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_ITEM({ commit }, id) {
  //   console.log(`actions ==== ${id}`);
  //   return fetchAskInfo(id)
  //     .then(({ data }) => {
  //       commit("SET_ASK_INFO", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_ITEM({ commit }, id) {
    try {
      const resp = await fetchAskInfo(id);
      commit("SET_ASK_INFO", resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit("SET_LIST", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_LIST({ commit }, pageName) {
    const resp = await fetchList(pageName);
    commit("SET_LIST", resp.data);
    return resp;
  },
};
