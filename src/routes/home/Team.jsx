import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'team',
  };

  getBlockChildrenA = (item, i) =>(
    <li className="line-one" key={item.title} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);
  
  getBlockChildrenB = (item, i) =>(
    <li className="line-two" key={item.title} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSourceA = [
      { icon: 'static/People.jpeg', title: '李超', content: '创始人' },
      { icon: 'static/People.jpeg', title: '沈康', content: '首席技术官' },
    ];
    const dataSourceB = [    
      { icon: 'static/People.jpeg', title: '陈兵龙', content: '销售负责人' },
      { icon: 'static/People.jpeg', title: '王泽宇', content: '技术总监' },
      { icon: 'static/People.jpeg', title: '李岳', content: '产品总监' },
    ];
    const listChildrenA = dataSourceA.map(this.getBlockChildrenA);
    const listChildrenB = dataSourceB.map(this.getBlockChildrenB);
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
             核心团队
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildrenA.concat(listChildrenB)}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
