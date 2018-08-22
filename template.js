/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run create test');
  process.exit(0);
}

// 页面模版
const indexTep = `import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';

class ${titleCase(dirName)} extends Component {

  render() {
    return (
      <div className="${dirName}-page">

      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    access_token: state.common.access_token,
  }
};

export default connect(mapStateToProps)(${titleCase(dirName)});
`;

// less文件模版
const lessTep = `@import "../../styles/mixin";

.${dirName}-page {
  .wh(100%, 100%);
}
`;

// model文件模版
const modelTep = `import * as ${dirName}Api from './service';

export default {
  namespace: '${dirName}',
  state: {

  },

  effects: {
    *effectsDemo(_, { call, put }) {
      const res = yield call(${dirName}Api.demo, {});
      if(res.status === 'ok'){
        yield put({ type: 'update', payload: {
          topData:res.data
        }});
      }
    },
  },

  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    }
  },

};
`;

// service页面模版
const serviceTep = `import Request from '@/utils/request';

export const demo = (params)=> {
  return Request({
    url:'路径',
    method:'POST',
    data: params
  })
}
`;


fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.js', indexTep);
fs.writeFileSync('index.less', lessTep);
fs.writeFileSync('model.js', modelTep);
fs.writeFileSync('service.js', serviceTep);

console.log(`模版${dirName}已创建,请手动增加router、models`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
