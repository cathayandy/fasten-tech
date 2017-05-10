import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    const text = (
      <QueueAnim
        type={animType.queue}
        className={`${props.className}-text`}
        key="text"
        leaveReverse
        ease={['easeOutCubic', 'easeInCubic']}
        id={`${props.id}-textWrapper`}
      >
        <h1 key="h1" id={`${props.id}-title`}>
          控制和APP方案咨询
        </h1>
        <p key="p" id={`${props.id}-content`}>
        </p>
      </QueueAnim>
    );
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          { isMode ? null : text }
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="static/Ctrl.jpeg" />
            </span>
          </TweenOne>
          { isMode ? text : null }
        </OverPack>
      </div>
    );
  }
}

export default Content;
