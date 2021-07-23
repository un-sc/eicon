import React, { useState } from 'react';
import logo from "./logo.svg";
import 'antd/dist/antd.css';
import { Affix, Menu } from 'antd';

function MenuJs() {
  const [top] = useState(0);
  return (
    <div>
      <Affix offsetTop={top}>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="logo">
            <img
              src={logo}
              width="40"
              height="40"
              // className="d-inline-block align-top"
              alt=""
            // loading="lazy"
            />Eicon
          </Menu.Item>
          <Menu.Item key="Home">
            <a href="/">首页</a>
          </Menu.Item>
          <Menu.Item key="Start">
            <a href="/#/start">开始使用</a>
          </Menu.Item>
          <Menu.Item key="Icons">
            <a href="/#/icons">图标库</a>
          </Menu.Item>
          <Menu.Item key="About">
            <a href="/#/about">关于</a>
          </Menu.Item>
        </Menu>
      </Affix>
      {/*       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          Menu
        </button>
        <a className="navbar-brand" href="/" style={{ fontSize: "larger" }}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          <b>Eicon</b>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                首页 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/start">
                开始使用
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/icons">
                图标库
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/about">
                关于
              </a>
            </li>
          </ul>
        </div>
      </nav>
     */}
    </div>
  );
}

export default MenuJs;
