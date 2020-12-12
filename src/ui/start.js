import Highlight from "react-highlight";
import "highlight.js/styles/zenburn.css";

function Start() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          如何使用Eicon图标库
          <svg
            t="1607770331588"
            class="icon"
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
        <h2>
          <svg
            t="1607770785942"
            class="icon"
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
          方法1-仅需简单3步
        </h2>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h3>1.在网页中引入css</h3>
        <Highlight className="html">
          {`<link rel="stylesheet" href="https://eicon.lablog.net/v1.eicon.main.css">`}
        </Highlight>
        <h3>2.挑选图标</h3>
        <p>
          前往<a href="/#/icons">图标库</a>挑选所需要的图标，找到对应的图标类名
          <br />
          每个图标下第二行就是图标的类名。
        </p>
        <h3>3.使用图标</h3>
        <Highlight className="html">
          {`<!--将xxx替换为图标类名即可-->
<span className="eicon xxx"></span>`}
        </Highlight>
        <hr />
        <h3>使用举例</h3>
        <Highlight className="html">
          {`<span className="eicon eiconconsole"></span>">`}
        </Highlight>
        <h5>效果如下：</h5>
        <span className="eicon eiconconsole"></span>
        <hr />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
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
            class="icon"
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
              class=""
            ></path>
            <path
              d="M520.217284 768L93.550617 1024V0h426.666667v768z m0 0"
              fill="#E6E3E6"
              p-id="27467"
              data-spm-anchor-id="a313x.7781069.0.i8"
              class="selected"
            ></path>
            <path
              d="M611.239506 597.333333H376.730864v-75.851852l132.108642-143.486419c13.274074-14.538272 18.330864-23.387654 18.330864-39.190124 0-20.22716-11.377778-33.501235-32.869135-33.501234-15.17037 0-33.501235 6.953086-33.501235 35.397531H376.730864c0-71.42716 54.360494-111.249383 117.570371-111.249383 67.634568 0 116.938272 41.718519 116.938271 109.985185 0 38.558025-15.802469 58.785185-44.879012 89.758025L479.130864 521.481481h132.108642v75.851852z m0 0"
              fill="#333333"
              p-id="27468"
            ></path>
          </svg>
          方法2-下载css文件至本地
        </h2>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h3>
          1.点击下方按钮下载
          <a href="https://eicon.lablog.net/v1.eicon.main.css" target="_blank">
            v1.Eicon.main.css
          </a>
        </h3>
        <a
          style={{ width: "300px", height: "40px" }}
          href="https://eiconcdn.oss-cn-beijing.aliyuncs.com/v1.eicon.main.zip"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          <svg
            t="1607771863106"
            class="icon"
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
        <h3>2.在网页中引入css</h3>
        <Highlight className="html">
          {`<link rel="stylesheet" href="css/v1.eicon.main.css">`}
        </Highlight>
        <h3>3.挑选图标</h3>
        <p>
          前往<a href="/#/icons">图标库</a>挑选所需要的图标，找到对应的图标类名
          <br />
          每个图标下第二行就是图标的类名。
        </p>
        <h3>4.使用图标</h3>
        <Highlight className="html">
          {`<!--将xxx替换为图标类名即可-->
<span className="eicon xxx"></span>`}
        </Highlight>
      </div>
    </div>
  );
}
export default Start;
