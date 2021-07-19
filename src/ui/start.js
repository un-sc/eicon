import Highlight from "react-highlight";
import "highlight.js/styles/zenburn.css";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";

function Start() {
  return (
    <div className="App">
      <Helmet>
        <title>开始使用 - Eicon - 字体图标库</title>
        <meta
          name="keywords"
          content="Eicon,开始使用,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          name="description"
          content="Eicon,开始使用,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        {/*Twitter*/}
        <meta name='twitter:card' content='开始使用 - Eicon - 高效·快捷·轻量的图标库' />
        <meta name='twitter:site' content='开始使用 - Eicon - 字体图标库' />
        <meta name="twitter:url" content="https://www.eiconfont.com/#/start" />
        <meta name='twitter:title' content='开始使用 - Eicon - 字体图标库' />
        <meta name='twitter:image' content={logo} />
        <meta name='twitter:description' content='开始使用 - Eicon - 高效·快捷·轻量的图标库' />
        {/*Facebook*/}
        <meta property="og:url" content="https://www.eiconfont.com/#/start" />
        <meta property="og:title" content="开始使用 - Eicon - 字体图标库" />
        <meta
          property="og:keywords"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="开始使用 - Eicon - 高效·快捷·轻量的图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="开始使用 - Eicon - 字体图标库" />
        {/* {QQ} */}
        <meta itemprop="name" content="开始使用 - Eicon - 字体图标库" />
        <meta itemprop="image" content={logo} />
        <meta name="description" itemprop="description" content="开始使用 - Eicon - 高效·快捷·轻量的图标库" />
      </Helmet>
      <header className="App-header">
        <h1>
          开始使用Eicon - 如何使用Eicon图标库
          <svg
            t="1607836224874"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5173"
            width="40"
            height="40"
          >
            <path
              d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m10.24-810.666667c-68.309333 0-122.666667 17.237333-162.986667 51.712C318.805333 298.922667 298.666667 346.538667 298.666667 407.808h106.24c0-34.986667 7.722667-61.824 23.253333-80.426667 17.408-22.442667 46.592-33.621333 87.552-33.621333 32.298667 0 57.173333 7.68 74.538667 22.954667 17.408 16.426667 26.069333 37.76 26.069333 64 0 20.778667-8.362667 40.192-25.173333 58.24l-11.136 11.52c-60.885333 47.573333-97.194667 82.346667-109.013334 104.192-12.373333 21.333333-18.602667 48.128-18.602666 80.426666v11.477334h107.093333v-11.52c0-19.114667 4.693333-36.906667 13.994667-53.333334 8.704-15.829333 21.12-29.525333 37.248-40.96 43.52-33.408 70.186667-55.04 80.128-64.853333 22.997333-26.794667 34.474667-60.458667 34.474666-100.949333 0-50.304-18.645333-89.685333-55.893333-118.144C632.789333 227.84 583.722667 213.333333 522.24 213.333333z m-10.794667 469.333334c-23.466667 0-43.690667 5.973333-60.586666 17.792-16.128 11.861333-24.192 27.136-24.192 45.781333 0 18.645333 8.106667 33.92 24.234666 45.781333a102.4 102.4 0 0 0 60.586667 18.645334c24.192 0 44.373333-5.973333 60.501333-17.792 16.896-11.861333 25.344-27.434667 25.344-46.634667 0-18.090667-8.106667-33.322667-24.234666-45.781333-16.128-11.861333-36.693333-17.792-61.653334-17.792z"
              fill="#6456D6"
              p-id="5174"
            ></path>
          </svg>
        </h1>
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="container">
        <div className="progress" style={{ marginTop: "10px" }}>
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h2>
          <svg
            t="1607770785942"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26341"
            width="100"
            height="100"
          >
            <path
              d="M512-21.33333333h426.666667v1024l-426.666667-256-426.666667 256V-21.33333333h426.666667z"
              fill="#FF4A4A"
              p-id="26342"
            ></path>
            <path
              d="M512 746.66666667L85.333333 1002.66666667V-21.33333333h426.666667v768z"
              fill="#FF6E6E"
              p-id="26343"
            ></path>
            <path
              d="M549.205333 597.333333H465.237333V322.389333L387.413333 389.973333v-89.6l77.824-67.584h83.968z"
              fill="#FFFFFF"
              p-id="26344"
            ></path>
          </svg>
          第一步-引用CSS文件
        </h2>
        <h3>方法一：使用Eicon CDN</h3>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://cdn.eiconfont.com/v1.eicon.main.css" />`}
        </Highlight>
        <hr />
        <h3>
          方法二：下载
          <a
            href="https://cdn.eiconfont.com/v1.eicon.main.css"
            target="_blank"
            rel="noreferrer"
          >
            css文件
          </a>
          至本地
        </h3>
        <a
          style={{ width: "300px", height: "40px", marginBottom: "10px" }}
          href="https://cdn.eiconfont.com/v1.eicon.main.zip"
          className="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          <svg
            t="1607771863106"
            className="icon"
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="28232"
            height="90%"
          >
            <path
              d="M345.121632 856.772995l160.942192 160.942191a21.232479 21.232479 0 0 0 30.15012 0l160.942191-160.942191a21.232479 21.232479 0 0 0-14.862735-36.095214h-117.203285v-416.58124a42.464958 42.464958 0 0 0-84.929916 0v416.58124h-120.175831a21.232479 21.232479 0 0 0-14.862736 36.095214z"
              fill="#1CC9C9"
              p-id="28233"
            ></path>
            <path
              d="M521.775858 361.206934a42.464958 42.464958 0 0 0-42.464958 42.464958v382.184623h84.929916v-382.184623a42.464958 42.464958 0 0 0-42.464958-42.464958z"
              fill="#1BAAA6"
              p-id="28234"
            ></path>
            <path
              d="M897.166088 357.385088v-17.410633a339.719665 339.719665 0 0 0-655.658954-123.997678 275.597578 275.597578 0 0 0 18.684582 548.647259h552.044456a212.324791 212.324791 0 0 0 84.929916-407.238948z"
              fill="#24D6ED"
              p-id="28235"
            ></path>
            <path
              d="M875.08431 378.617567v-17.410633a329.103425 329.103425 0 0 0-634.426475-145.230157 53.123663 53.123663 0 0 0-13.588786 3.397197 339.719665 339.719665 0 0 0 387.280418 472.210334 214.448038 214.448038 0 0 0 84.929916 73.464377h112.956789a199.585303 199.585303 0 0 0 62.848138-386.006469z"
              fill="#1EB6C1"
              p-id="28236"
            ></path>
            <path
              d="M897.166088 357.385088v-17.410633a339.719665 339.719665 0 1 0-261.584142 330.377374 212.324791 212.324791 0 1 0 260.310193-312.966741z"
              fill="#22E6EF"
              p-id="28237"
            ></path>
          </svg>
          Download Eicon-1.0
        </a>
        <Highlight className="html">
          {`<link rel="stylesheet" href="css/v1.eicon.main.css" />`}
        </Highlight>
        <div className="progress" style={{ marginTop: "10px" }}>
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h2>
          <svg
            t="1607770856252"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="27465"
            width="100"
            height="100"
          >
            <path
              d="M520.217284 0h426.666667v1024l-426.666667-256L93.550617 1024V0h426.666667z m0 0"
              fill="#CDCBCE"
              p-id="27466"
              data-spm-anchor-id="a313x.7781069.0.i7"
              className=""
            ></path>
            <path
              d="M520.217284 768L93.550617 1024V0h426.666667v768z m0 0"
              fill="#E6E3E6"
              p-id="27467"
              data-spm-anchor-id="a313x.7781069.0.i8"
              className="selected"
            ></path>
            <path
              d="M611.239506 597.333333H376.730864v-75.851852l132.108642-143.486419c13.274074-14.538272 18.330864-23.387654 18.330864-39.190124 0-20.22716-11.377778-33.501235-32.869135-33.501234-15.17037 0-33.501235 6.953086-33.501235 35.397531H376.730864c0-71.42716 54.360494-111.249383 117.570371-111.249383 67.634568 0 116.938272 41.718519 116.938271 109.985185 0 38.558025-15.802469 58.785185-44.879012 89.758025L479.130864 521.481481h132.108642v75.851852z m0 0"
              fill="#333333"
              p-id="27468"
            ></path>
          </svg>
          第二步-挑选图标
        </h2>
        <p className="h3">
          前往<a href="/#/icons">图标库</a>挑选所需要的图标，找到对应图标的类名
          <br />
          每个图标下<b>第二行</b>就是图标的类名。
        </p>
        <div className="progress" style={{ marginTop: "10px" }}>
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h2>
          <svg
            t="1607783980611"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3250"
            width="100"
            height="100"
          >
            <path
              d="M512 0h426.666667v1024l-426.666667-256-426.666667 256V0h426.666667z"
              fill="#FFAC4A"
              p-id="3251"
            ></path>
            <path
              d="M512 768L85.333333 1024V0h426.666667v768z"
              fill="#FFBC6E"
              p-id="3252"
            ></path>
            <path
              d="M605.525333 488.277333c0 76.288-57.344 112.128-121.344 112.128-60.416 0-121.344-32.256-121.344-114.176h83.968c0 25.6 16.384 38.4 37.376 38.4 22.016 0 37.376-12.8 37.376-38.912 0-22.016-16.384-38.4-38.912-38.4h-11.776V374.613333h11.776c25.088 0 34.816-17.92 34.816-34.304 0-23.04-15.872-34.816-33.28-34.816-17.408 0-33.28 12.288-33.28 34.304H366.933333c0-68.608 52.224-110.08 117.248-110.08 67.584 0 117.248 45.056 117.248 108.032 0 39.936-19.456 59.392-37.888 71.168 19.968 13.824 41.984 35.84 41.984 79.36z"
              fill="#FFFFFF"
              p-id="3253"
            ></path>
          </svg>
          第三步-引用图标
        </h2>
        <Highlight className="html">
          {`<!--将xxx替换为图标类名即可-->
<span class="eicon xxx" />`}
        </Highlight>
        <hr />
        <p className="h3">使用举例：</p>
        <Highlight className="html">
          {`<span class="eicon eiconconsole" />`}
        </Highlight>
        <p className="h3">
          效果如下：
          <span className="eicon eiconconsole"></span>
        </p>
        <div className="progress" style={{ marginTop: "10px" }}>
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h2>
          <svg
            t="1607785819669"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4154"
            width="100"
            height="100"
          >
            <path
              d="M512 0h426.666667v1024l-426.666667-256-426.666667 256V0h426.666667z"
              fill="#B5B5B5"
              p-id="4155"
            ></path>
            <path
              d="M512 768L85.333333 1024V0h426.666667v768z"
              fill="#C3C3C3"
              p-id="4156"
            ></path>
            <path
              d="M612.693333 549.205333h-27.136V597.333333H505.685333v-48.128h-151.04V469.333333l120.832-236.544h92.16L446.805333 469.333333h58.88V421.205333h79.872V469.333333h27.136z"
              fill="#FFFFFF"
              p-id="4157"
            ></path>
          </svg>
          第四步-调整图标大小
        </h2>
        <p className="h3">
          通过设置CSS的font-size属性可以调整图标大小，如下所示：
        </p>
        <Highlight className="html">
          {`<span class="eicon eiconhome" style="font-size: xx-large;" />
<span class="eicon eiconhome" style="font-size: medium;" />
<span class="eicon eiconhome" style="font-size: xx-small;" />`}
        </Highlight>
        <span className="eicon eiconhome" style={{ fontSize: "xx-large" }} />
        <span className="eicon eiconhome" style={{ fontSize: "medium" }} />
        <span className="eicon eiconhome" style={{ fontSize: "xx-small" }} />
        <hr />
      </div>
    </div>
  );
}
export default Start;
