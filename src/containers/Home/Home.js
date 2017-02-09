import React, { Component } from 'react';
//import Helmet from 'react-helmet';
//import { Jumbotron, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    //加载样式文件
    const styles = require('./Home.scss');
    //页面布局
    return (
      <section>
        <div>
          <div className={styles.cir}>1</div>
          <div className={styles.cir}>2</div>
          <div className={styles.cir}>3</div>
        </div>
        <div>
          <div className={styles.cir}>4</div>
          <div className={styles.cir}>5</div>
          <div className={styles.cir}>6</div>
        </div>
        <div className={styles.foot}>
          <div className={styles.na}>首页</div>
          <div className={styles.na}>应用</div>
          <div className={styles.na}>文档</div>
          <div className={styles.na}>设置</div>
        </div>
      </section>
    );
  }
}
