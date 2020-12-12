import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Eicon - 字体图标库</title>
        <meta
          name="keywords"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          name="description"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        {/*Facebook*/}
        <meta property="og:url" content="https://lablog.net/" />
        <meta
          property="og:title"
          content="Eicon - 字体图标库"
        />
        <meta
          property="og:keywords"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="Eicon - 字体图标库" />
      </Helmet>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Eicon - 高效·快捷·轻量的图标库</h1>
        <h4>代码随时复制 · 使用更加方便</h4>
        <a className="btn btn-primary btn-lg" href="/#/start">
          开始使用
        </a>
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
        <hr />
        <h3>为何使用Eicon图标库</h3>
        <div className="row">
          <div className="card" style={{ width: "20rem", textAlign: "center" }}>
            <div className="card-img-top">
              <svg
                t="1607699769113"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8616"
                width="100"
                height="100"
              >
                <path
                  d="M928 1024 256 1024 256 0l320 0 0 576 96-128 64 0 96 128L832 0l96 0c17.696 0 32 14.336 32 32l0 960C960 1009.696 945.696 1024 928 1024zM64 992 64 32c0-17.664 14.304-32 32-32l96 0 0 1024L96 1024C78.304 1024 64 1009.696 64 992z"
                  p-id="8617"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h4 className="card-title">一套字库, 729个图标</h4>
              <p className="card-text">
                图标丰富多样，适用于各行各业，一套图标库解决所有图标需求问题。
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", textAlign: "center" }}>
            <div className="card-img-top">
              <svg
                t="1607700127490"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8761"
                width="100"
                height="100"
              >
                <path
                  d="M1024 0 1024 416 864 256 672 448 576 352 768 160 608 0ZM448 672 256 864 416 1024 0 1024 0 608 160 768 352 576Z"
                  p-id="8762"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h4 className="card-title">无限放大或缩小</h4>
              <p className="card-text">
                可缩放的矢量图标，每个图标在放大或者缩小的时候看起来都正常。
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", textAlign: "center" }}>
            <div className="card-img-top">
              <svg
                t="1607702989647"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7477"
                width="100"
                height="100"
              >
                <path
                  d="M475.721143 396.214857l114.029714 238.445714 52.662857-25.234285-114.029714-238.372572-0.146286 0.073143a29.403429 29.403429 0 1 0-52.443428 25.088zM418.230857 526.994286l52.662857-25.161143-114.029714-238.299429h-0.146286a29.403429 29.403429 0 1 0-52.443428 25.234286l113.956571 238.226286zM132.681143 181.101714l114.029714 238.445715 52.662857-25.234286-114.102857-238.445714v0.073142a29.403429 29.403429 0 1 0-52.589714 25.161143z"
                  fill="#2c2c2c"
                  p-id="7478"
                ></path>
                <path
                  d="M994.523429 753.152a29.257143 29.257143 0 0 0-6.875429 0.877714v-0.073143c-49.298286 4.681143-103.277714 2.048-159.085714-6.290285l-128.731429-269.092572-0.146286 0.146286a29.403429 29.403429 0 0 0-57.490285 8.777143 29.257143 29.257143 0 0 0 5.412571 16.969143l109.860572 229.814857c-169.472-39.204571-345.307429-127.488-454.070858-237.421714h-0.073142a29.403429 29.403429 0 1 0-41.325715 40.96H261.851429c113.078857 114.395429 294.4 206.555429 471.259428 249.856-99.474286 56.832-204.8 65.097143-308.297143 22.235428-186.953143-77.385143-330.532571-307.053714-365.860571-585.142857v-0.365714a29.476571 29.476571 0 1 0-57.929143 7.314285c37.814857 298.715429 195.364571 546.816 401.408 632.173715 50.834286 20.992 102.692571 31.451429 154.404571 31.451428 88.649143 0 176.64-30.939429 257.682286-91.136 42.130286 6.656 83.382857 10.386286 122.587429 10.386286 19.163429 0 37.888-0.877714 56.027428-2.56l1.316572 0.146286a29.476571 29.476571 0 1 0 0-59.026286z"
                  fill="#2c2c2c"
                  p-id="7479"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h4 className="card-title">轻量简便</h4>
              <p className="card-text">
                使用本图标库无需繁琐的代码，使图标以简介的代码呈现在网页上。
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", textAlign: "center" }}>
            <div className="card-img-top">
              <svg
                t="1607728979529"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22597"
                width="100"
                height="100"
              >
                <path
                  d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 128c82.88 0 159.136 27.008 221.888 71.744L199.616 733.76C154.88 671.008 128 594.752 128 512 128 300.256 300.256 128 512 128zM512 896c-82.88 0-159.136-27.008-221.888-71.744L824.384 290.24C869.12 352.992 896 429.248 896 512 896 723.744 723.744 896 512 896z"
                  p-id="22598"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h4 className="card-title">无需JavaScript支持</h4>
              <p className="card-text">
                使用本图标库无需JavaScript支持，因此您无需担忧js方面对于不同浏览器的兼容问题。
              </p>
            </div>
          </div>
        </div>
        <div className="progress" style={{ marginTop: "30px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h3>关于Eicon图标库</h3>
        <p>
          Eicon是一款免费的图标库，且拥有着729个图标。本图标库的设计初衷就是让大家更加方便的使用网页图标，使图标灵活的展现在网页上。本图标库所有图标都是svg矢量图标，可以自由放大或缩小并保证清晰度。同时，本图标库通过
          <code>&lt;span&gt;</code>
          标签的class属性来指定图标，书写直观，语义明确，无需繁琐的代码。在更改图标时也仅需更改class属性，使图标库具有较高的灵活性。除此之外，图标库不需要JavaScript支持，因此您无需担忧js方面对于不同浏览器的兼容问题。本图标库支持
          IE8+，及所有现代浏览器。
        </p>
      </div>
    </div>
  );
}

export default App;
