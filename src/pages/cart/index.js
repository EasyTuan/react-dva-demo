import React, { Component } from 'react';
import Layout from '@/components/Layout';
import { connect } from 'dva';

class Cart extends Component {
  render() {
    return (
      <Layout downloadshow={false}>
        <div className="cart-page">
          cart
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  access_token: state.common.access_token,
});

export default connect(mapStateToProps)(Cart);
