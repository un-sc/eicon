import logo from "./logo.svg";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="App">
      <Helmet>
        <title>关于 - Eicon - 字体图标库</title>
        <meta
          name="keywords"
          content="Eicon,关于,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          name="description"
          content="Eicon,关于,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        {/*Facebook*/}
        <meta property="og:url" content="https://lablog.net/#/start" />
        <meta property="og:title" content="开始使用 - Eicon - 字体图标库" />
        <meta
          property="og:keywords"
          content="Eicon,关于,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="Eicon,关于,图标库,图标,矢量图标,网页图标,Eicon图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="开始使用 - Eicon - 字体图标库" />
      </Helmet>
      <header className="App-header">
        <h1>
          关于Eicon图标库
          <svg
            t="1607836108629"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4424"
            width="40"
            height="40"
          >
            <path
              d="M505.154694 0.046504a511.966082 511.966082 0 1 0 518.749633 505.011876A511.966082 511.966082 0 0 0 505.154694 0.046504z m56.742908 170.65536c52.007221 0 67.408867 30.184667 67.408867 64.678382 0 43.175806-34.579042 83.023833-93.476474 83.023833-49.298067 0-72.741848-24.809023-71.376604-65.744978C464.474723 218.144055 493.400806 170.701864 561.897602 170.701864z m-133.345833 661.289523c-35.581643 0-61.585253-21.609235-36.754898-116.557611l40.807963-168.287518c7.039534-26.984879 8.212789-37.77883 0-37.77883a271.811326 271.811326 0 0 0-84.261084 36.989549l-17.748158-29.096739c86.5436-72.229881 186.057007-114.659071 228.699515-114.65907 35.560311 0 41.447921 42.087878 23.699764 106.787592l-46.738237 177.054936c-8.234121 31.272595-4.693022 42.087878 3.56243 42.087879a183.987811 183.987811 0 0 0 80.016033-39.954687l20.094668 26.984879C555.839336 799.588201 464.048084 831.991387 428.551769 831.991387z"
              fill="#5D80E0"
              p-id="4425"
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
        <h1>关于Eicon图标库</h1>
        <h2>Eicon简介</h2>
        <p>
          Eicon是一款免费的图标库，且拥有着729个图标。本图标库的设计初衷就是让大家更加方便的使用网页图标，使图标灵活的展现在网页上。本图标库所有图标都是svg矢量图标，可以自由放大或缩小并保证清晰度。同时，本图标库通过
          <code>&lt;span&gt;</code>
          标签的class属性来指定图标，书写直观，语义明确，无需繁琐的代码。在更改图标时也仅需更改class属性，使图标库具有较高的灵活性。除此之外，图标库不需要JavaScript支持，因此您无需担忧js方面对于不同浏览器的兼容问题。本图标库支持
          IE8+，及所有现代浏览器。
        </p>
        <h2>创始人</h2>
        <p>Eicon由上清阁团队开发，创始人是联安。</p>
        <h2>致谢</h2>
        <p>
          本图标库部分图标来源于
          <a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">
            阿里巴巴IconFont平台
          </a>
          ，感谢其提供的图标！如有侵权，联系删除。
        </p>
        <h2>联系我们</h2>
        <form
          className="shadow-lg border border-primary rounded bg-light"
          id="form1"
          action="http://enf.lablog.net:81/"
          method="post"
        >
          <div style={{ padding: "10px" }}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="您的邮箱"
                aria-label="email"
                aria-describedby="basic-addon1"
                name="email"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">请输入内容</span>
              </div>
              <textarea
                class="form-control"
                aria-label="With textarea"
                name="text"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" value="提交">
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default About;
