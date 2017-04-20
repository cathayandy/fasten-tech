import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const follow = !isMode ? {
      delay: 1000,
      minMove: 0.1,
      data: [0, 1, 2, 3].map(i =>
        ({ id: `bg${i}`, value: 15, bgPosition: '50%', type: ['backgroundPositionX'] })
      ).concat([0, 1, 2, 3].map(i =>
        ({ id: `${props.id}-wrapperBlock${i}`, value: -15, type: 'x' })
      )),
    } : null;
    const childrenData = [
      {
        title: 'Fasten Tech',
        content: [
          '工业无人机领域的技术方案和产品提供商',
          '致力于消费类、测绘类、农业类、电力检测类等方向',
        ],
        button: '了解更多',
        color: '',
      },
      {
        title: 'Fasten Tech',
        content: [
          '工业无人机领域的技术方案和产品提供商',
          '致力于消费类、测绘类、农业类、电力检测类等方向',
        ],
        button: '了解更多',
        color: '',        
      },
      {
        title: 'Fasten Tech',
        content: [
          '工业无人机领域的技术方案和产品提供商',
          '致力于消费类、测绘类、农业类、电力检测类等方向',
        ],
        button: '了解更多',
        color: '',        
      },
      {
        title: 'Fasten Tech',
        content: [
          '工业无人机领域的技术方案和产品提供商',
          '致力于消费类、测绘类、农业类、电力检测类等方向',
        ],
        button: '了解更多',
        color: '',
      }
    ];
    const childrenToRender = childrenData.map((item, i) => {
      const { title, content, button, color } = item;
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
        followParallax={follow}
      >
        <BgElement
          className={`bg bg${i}`}
          id={`bg${i}`}
          key="bg"
        />
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className={`${props.className}-title ${color}`}
          key="text"
          reverseDelay={300}
          id={`${props.id}-wrapperBlock${i}`}
        >
          <h1
            className={`title`}
            key="title"
            id={`${props.id}-titleBlock${i}`}
          >
            {title}
          </h1>
          {
            content.map((line, ii) => (<p
              key={`content-${ii}`}
              id={`${props.id}-contentBlock${i}-${ii}`}
            >
              {line}
            </p>))
          }
          <Button
            onClick={() => window.location.href = '#cases'}
            type="ghost"
            key="button"
            id={`${props.id}-buttonBlock${i}`}
          >
            {button}
          </Button>
        </TweenOne>
      </Element>);
    });
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key="banner"
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;

