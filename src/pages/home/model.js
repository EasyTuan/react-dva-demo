import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const res = yield call(homeApi.demo, {});
      if (res.status === 'ok') {
        yield put({ type: 'update',
          payload: {
            topData: res.data,
          } });
      }
    },
  },

  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    },
  },

};
