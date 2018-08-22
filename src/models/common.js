import roadList from '@/routes/index';

export default {
  namespace: 'common',
  state: {
    pathname: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // 路由的改变动态改变title
        roadList.forEach((item) => {
          if (pathname === item.path) {
            document.title = item.name;
            return false;
          }
        });
        dispatch({ type: 'update',
          payload: {
            pathname,
          } });
      });
    },
  },

  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    },
  },

};
