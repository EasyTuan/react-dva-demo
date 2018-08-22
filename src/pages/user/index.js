import React, { Component } from 'react';
import Layout from '@/components/Layout';
import { Button } from 'antd-mobile';
import { connect } from 'dva';

class User extends Component {
  render() {
    return (
      <Layout downloadshow={false}>
        <div className="user-page">
          <Button type="primary" inline size="small" onClick={() => { this.props.history.push('/userOrder.html'); }}>订单 </Button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  access_token: state.common.access_token,
});

export default connect(mapStateToProps)(User);
