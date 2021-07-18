import "./cube.main.css";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";

function Icons() {
  return (
    <div>
      <Helmet>
        <title>图标库 - Eicon - 字体图标库</title>
        <meta
          name="keywords"
          content="Eicon,图标列表,图标库,图标,Eicon图标库"
        />
        <meta
          name="description"
          content="Eicon,图标列表,图标库,图标,Eicon图标库"
        />
        {/*Twitter*/}
        <meta name='twitter:card' content='图标库 - Eicon - 高效·快捷·轻量的图标库' />
        <meta name='twitter:site' content='图标库 - Eicon - 字体图标库' />
        <meta name="twitter:url" content="https://www.eiconfont.com/#/icons" />
        <meta name='twitter:title' content='图标库 - Eicon - 字体图标库' />
        <meta name='twitter:image' content={logo} />
        <meta name='twitter:description' content='图标库 - Eicon - 高效·快捷·轻量的图标库' />
        {/*Facebook*/}
        <meta property="og:url" content="https://www.eiconfont.com/#/icons" />
        <meta property="og:title" content="图标库 - Eicon - 字体图标库" />
        <meta
          property="og:keywords"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="图标库 - Eicon - 高效·快捷·轻量的图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="图标库 - Eicon - 字体图标库" />
        {/* {QQ} */}
        <meta itemprop="name" content="图标库 - Eicon - 字体图标库" />
        <meta itemprop="image" content={logo} />
        <meta name="description" itemprop="description" content="图标库 - Eicon - 高效·快捷·轻量的图标库" />
      </Helmet>
      <header className="App-header">
        <h1>
          图标库-图标列表
          <svg
            t="1607836308591"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5963"
            width="50"
            height="50"
          >
            <path
              d="M316.347077 694.828652h507.371522v-500.854023a66.048008 66.048008 0 0 0-65.9878-65.987799h-491.47665a66.048008 66.048008 0 0 0-65.9878 65.987799v587.23723h0.060208c0.707442 63.413914 52.425982 114.786259 116.005468 114.78626h506.694184v-31.142509h-506.694184a85.073687 85.073687 0 0 1-85.013479-85.013479 85.103791 85.103791 0 0 1 85.028531-85.013479z"
              fill="#ffffff"
              p-id="5964"
              data-spm-anchor-id="a313x.7781069.0.i5"
              class="selected"
            ></path>
            <path
              d="M231.333598 701.150476c0.993429-1.068689 2.092223-2.016963 3.130808-3.055549h-3.130808v3.055549z"
              fill="#6229CE"
              p-id="5965"
            ></path>
            <path
              d="M757.730799 159.054078h-491.47665a34.965707 34.965707 0 0 0-34.935603 34.935603v504.120298h3.130808a115.493701 115.493701 0 0 1 72.505299-33.746498c3.100704-0.255883 6.21646-0.496715 9.377372-0.496714h476.319325v-469.877086a34.935603 34.935603 0 0 0-34.920551-34.935603z"
              fill="#6229CE"
              p-id="5966"
            ></path>
            <path
              d="M266.269201 159.054078a34.965707 34.965707 0 0 0-34.935603 34.935603v504.120298h3.130808a115.493701 115.493701 0 0 1 72.505299-33.746498v-505.309403h-40.700504z"
              fill="#8154D8"
              p-id="5967"
            ></path>
            <path
              d="M283.729476 770.118564h539.387044v20.741603h-539.387044v-20.741603z m201.079155-515.379166h253.475034v20.741603h-253.475034v-20.741603z m0 91.892226h253.475034v20.726551h-253.475034v-20.726551z m0 0"
              fill="#ffffff"
              p-id="5968"
              data-spm-anchor-id="a313x.7781069.0.i6"
              class="selected"
            ></path>
          </svg>
        </h1>
        <h3>共计729个图标</h3>
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
      </div>
  );
}
export default Icons;
