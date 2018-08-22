import React, { Component } from 'react';
import LayoutFooter from '@/components/Footer';
import './index.less';

class Layout extends Component {
  render() {
    return (
      <div id="main">
        <div className="mainbody">
          {this.props.children}
        </div>
        <LayoutFooter />
      </div>
    );
  }
}

export default Layout;
