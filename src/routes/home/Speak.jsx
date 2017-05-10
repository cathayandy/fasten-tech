import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'speak',
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
             董事长寄语
          </TweenOne>
          <TweenOne className={`${props.className}-text`}
            component="ul" key="text" id={`${props.id}-contentWrapper`}
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
          >
            <p>
            北京方星科技有限公司（Fasten-tech），成立于2016年，是一个新兴的无人飞行器控制系统和无人机方案的提供商，客户分布于北京、江苏、湖南等地。通过持续创新，方星科技致力于为无人机工业领域提供型能最强、体验最优的无人机产品和方案。
美好的事物都具有自然传播的特质，尖端的科技也是如此。
            </p>
            <br/>
            <p>
方星科技是一个坚持技术驱动的公司。我们是一群技术层面不妥协、体验层面富有强迫症的、对产品有梦想的人。我们坚信空谈误国、实干兴邦，2017年撸起袖子加油干才能拥有期望的发展。
美好的远景，由我们一起书写！
            </p>
            <br/>
            <span style={{ float: 'right' }}>-- 李超</span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
