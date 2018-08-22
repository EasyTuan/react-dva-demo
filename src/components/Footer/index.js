import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import './index.less';


class LayoutFooter extends Component {
  toggleTab(path) {
    this.props.dispatch(routerRedux.replace(path));
  }

  render() {
    return (
      <div className="myfooter">
        <TabBar
          unselectedTintColor="#333"
          tintColor="#333"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/home.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selectedIcon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/home-active.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selected={this.props.pathname === '/home'}
            onPress={() => {
              this.toggleTab('/home');
            }}
            data-seed="logId"
          />
          <TabBar.Item
            title="衣袋"
            key="衣袋"
            icon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/cart.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selectedIcon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/cart-active.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selected={this.props.pathname === '/cart'}
            onPress={() => {
              this.toggleTab('/cart');
            }}
            data-seed="logId"
          />
          <TabBar.Item
            title="我的"
            key="我的"
            icon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/user.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selectedIcon={(
              <div style={{
                width: '30px',
                height: '30px',
                background: `url(${require('@/images/tab/user-active.png')}) center center /  30px 30px no-repeat` }}
              />
)
            }
            selected={this.props.pathname === '/user'}
            onPress={() => {
              this.toggleTab('/user');
            }}
            data-seed="logId"
          />
        </TabBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pathname: state.common.pathname,
});


export default connect(mapStateToProps)(LayoutFooter);
