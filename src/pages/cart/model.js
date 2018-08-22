import * as cartApi from './service';

export default {
  namespace: 'cart',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const res = yield call(cartApi.demo, {});
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
