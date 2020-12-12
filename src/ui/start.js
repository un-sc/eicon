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
        {/*Facebook*/}
        <meta property="og:url" content="https://lablog.net/#/start" />
        <meta property="og:title" content="开始使用 - Eicon - 字体图标库" />
        <meta
          property="og:keywords"
          content="Eicon,开始使用,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="Eicon,开始使用,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="开始使用 - Eicon - 字体图标库" />
      </Helmet>
      <header className="App-header">
        <h1>
          开始使用Eicon - 如何使用Eicon图标库
          <svg
            t="1607770331588"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="23893"
            width="50"
            height="50"
          >
            <path
              d="M507.611429 36.571429a471.04 471.04 0 1 1 0 942.08A471.04 471.04 0 0 1 507.611429 36.571429z m0 73.142857a397.897143 397.897143 0 1 0 0 795.794285 397.897143 397.897143 0 0 0 0-795.794285z m51.2 587.337143v92.525714h-102.4V697.051429h102.4z m-58.368-494.08c110.226286 0 203.190857 66.56 203.190857 184.905142 0 55.881143-24.722286 96.402286-75.702857 145.993143l-55.808 52.516572a86.235429 86.235429 0 0 0-9.947429 10.971428l-3.730286 6.363429v37.741714h-102.4v-39.497143c0-15.36 3.876571-29.988571 10.825143-43.885714 8.265143-16.603429 20.187429-31.451429 37.083429-48.347429l12.873143-12.434285 28.233142-25.892572c40.228571-37.302857 56.173714-60.708571 56.173715-83.529143 0-53.028571-41.179429-82.505143-100.790857-82.505142-41.764571 0-76.141714 27.062857-85.284572 68.608l-1.536 9.142857-101.668571-12.653715a188.196571 188.196571 0 0 1 188.489143-167.497142z"
              p-id="23894"
              fill="#ffffff"
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
          {`<link rel="stylesheet" href="https://eicon.lablog.net/v1.eicon.main.css">`}
        </Highlight>
        <hr />
        <h3>
          方法二：下载
          <a
            href="https://eicon.lablog.net/v1.eicon.main.css"
            target="_blank"
            rel="noreferrer"
          >
            css文件
          </a>
          至本地
        </h3>
        <a
          style={{ width: "300px", height: "40px", marginBottom: "10px" }}
          href="https://eiconcdn.oss-cn-beijing.aliyuncs.com/v1.eicon.main.zip"
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
          {`<link rel="stylesheet" href="css/v1.eicon.main.css">`}
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
          前往<a href="/#/icons">图标库</a>挑选所需要的图标，找到对应的图标类名
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
<span className="eicon xxx"></span>`}
        </Highlight>
        <hr />
        <p className="h3">使用举例：</p>
        <Highlight className="html">
          {`<span className="eicon eiconconsole"></span>">`}
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
        <p className="h3">通过设置CSS的font-size属性可以调整图标大小，如下所示：</p>
        <Highlight className="html">
          {`<span className="eicon eiconhome" style="font-size: xx-large;"></span>
<span className="eicon eiconhome" style="font-size: medium;"></span>
<span className="eicon eiconhome" style="font-size: xx-small;"></span>`}
        </Highlight>
        <span className="eicon eiconhome" style={{fontSize: 'xx-large'}} />
        <span className="eicon eiconhome" style={{fontSize: 'medium'}} />
        <span className="eicon eiconhome" style={{fontSize: 'xx-small'}} />
        <hr />
      </div>
    </div>
  );
}
export default Start;
