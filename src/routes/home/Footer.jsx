import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/);
    const content = data.content.split(/\n/)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          {links[ii] ? (<a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>) : (<p>
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </p>)}
          
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg', content: 'Fasten Tech' };
    const dataSource = [
      { title: '微信二维码', content: '', contentLink: '#' },
      { title: '联系我们', content: '地址: 北京市海淀区中关村丹棱SOHO B1层\n电话: 15101526040\n邮件: Info@fasten-tech.cn\n网址: www.fasten-tech.cn\n加入我们: hr@fasten-tech.cn', contentLink: '\ntel://15101526040\nmailto://Info@fasten-tech.cn\nhttp://www.fasten-tech.cn\nmailto://hr@fasten-tech.cn' },
      { title: '合作伙伴', content: '媒体: 新京报 新华社 搜狐 创业邦 36Kr 蜻蜓FM 今日头条\n高校: 清华大学 北京航空航天大学 湖南大学 南京大学', contentLink: '' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    const logo = (
      <li key="logo" id={`${props.id}-logo`}>
        <p className="logo">
          <img src={logoContent.img} width="100%" />
        </p>
        <p>{logoContent.content}</p>
      </li>
    );
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2017 by Fasten Tech. All Rights Reserved.
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
