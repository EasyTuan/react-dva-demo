import * as userApi from './service';

export default {
  namespace: 'user',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const res = yield call(userApi.demo, {});
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
