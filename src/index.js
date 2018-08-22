import '@babel/polyfill';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './styles/base.less';
import createLoading from 'dva-loading';
import VConsole from 'vconsole/dist/vconsole.min.js';
import models from './models/index';
import config from './config';

if (!config.IS_RELEASE) {
  new VConsole();
}

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading({
  global: false,
  models: {
    order: false,
    user: false,
  },
}));

// 3. Model
models.forEach((item) => {
  app.model(item);
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
