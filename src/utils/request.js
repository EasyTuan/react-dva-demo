import axios from 'axios';
import config from '../config';
import { Toast } from 'antd-mobile';

const reqData = {};

const request = (options = { method: 'GET' }, is_wx) => {
  if (
    options.method.toUpperCase() !== 'POST'
    && options.method.toUpperCase() !== 'PUT'
    && options.method.toUpperCase() !== 'PATCH'
  ) {
    isdata = false;
  }
  if (!config.IS_RELEASE) {
    console.log(
      `${new Date().toLocaleString()}【M=${options.url}】P=`,
      options.data,
    );
  }
  return axios({
    method: options.method,
    baseURL: config.API_URL,
    url: options.url,
    data: isdata ? options.data : null,
    params: !isdata ? options.data : null,
    withCredentials: !!is_wx,
    timeout: config.TIMEOUT,
    headers: config.HEADERS,
  });
};

const erroCodeState = (res) => {
  if (res.data && res.data.status != 'ok' && res.data.error) {
    // token超时状态 和 单点登录状态 access_token 超时 从新触发登录

  }
};

export default async (options) => {
  const res = await request(options);
  if (res.status >= 200 && res.status < 300) {
    if (config.debug) {
      console.log(
        `${new Date().toLocaleString()}【M=${options.url}】【接口响应：】`,
        res.data,
      );
    }
    erroCodeState(res);
    return res.data;
  }
  Toast.offline(res.statusText);
  throw new Error(res.statusText);
};
