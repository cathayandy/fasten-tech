import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from './Nav';
import Carousel from './Carousel';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Cases from './Cases';
import Team from './Team';
import Footer from './Footer';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,
      <Carousel id="carousel" key="carousel" isMode={this.state.isMode}/>,
      <Cases id="cases" key="cases" isMode={this.state.isMode}/>,
      <Service1 id="service1" key="service1" isMode={this.state.isMode}/>,
      <Service2 id="service2" key="service2" isMode={this.state.isMode}/>,
      <Service3 id="service3" key="service3" isMode={this.state.isMode}/>,
      <Team id="team" key="team" isMode={this.state.isMode}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
