import React, { Component } from 'react';
import Layout from '@/components/Layout';
import { connect } from 'dva';
import './index.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Layout downloadshow={false}>
        <div className="home-page">
          首页
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  access_token: state.common.access_token,
});

export default connect(mapStateToProps)(Home);
