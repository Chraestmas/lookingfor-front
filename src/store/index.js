import { createStore } from 'vuex';

export const store = createStore({
  state: {
    userId: localStorage.getItem('userId') || null,
    jwtToken : localStorage.getItem('jwtToken') || null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    setJwtToken(state, jwtToken){
      state.jwtToken = jwtToken;
    }
  },
  actions: {
    login(context, {userId, jwtToken}) {
      localStorage.setItem("userId" , userId);
      localStorage.setItem("jwtToken" , jwtToken);
      context.commit('setUserId', userId);
      context.commit('setJwtToken', jwtToken);
    },
    logout(context) {
      localStorage.removeItem('userId');
      localStorage.removeItem('jwtToken');
      context.commit('setUserId', null);
      context.commit('setJwtToken', null);
    },
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
});
