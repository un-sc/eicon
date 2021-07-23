import Highlight from "react-highlight";
import "highlight.js/styles/zenburn.css";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import { Tabs } from 'antd';
import { List } from 'antd';
import "./icon.css"
const data1 = [
  "语意明确，书写直观，很容易分辨这个图标是什么。",
  "使用class来定义图标，更改时只用修改class里的Unicode即可。",
];
const data2 = [
  "支持多色图标了，不再受单色限制。",
  "通过一些技巧，支持像字体那样，通过 font-size, color 来调整样式。",
  "兼容性较差，支持 IE9+，及现代浏览器。",
  "浏览器渲染 SVG 的性能一般，还不如 png。",
]
const en_data1 = [
  "The meaning is clear and the writing is intuitive. It is easy to distinguish what this icon is.",
  "Use class to define icons. When changing, only modify the Unicode in class",
];
const en_data2 = [
  "Multi color icons are supported and are no longer limited by monochrome.",
  "Through some skills, support to adjust the style through font size and color like font.",
  "Poor compatibility, support IE9 +, and modern browsers.",
  "The performance of browser rendering SVG is average, not as good as PNG.",
]
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
};


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
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="中文" key="1">

            <div>
              <h2>欢迎使用Eicon图标库</h2>
              <h4>Eicon是一款可以免费使用的图标库，拥有着729个图标。如果您想了解如何使用本图标库，您可以参考本页面的内容。</h4>
              <h4>如果您想使Eicon图标呈现在您的项目中，您需要引用图标库的文件，然后在项目中键入相对于的代码。</h4>
              <h4>目前Eicon支持两种使用方式：Font-Class引用和Symbol引用。您可以在下方了解这两种引用方式的区别和步骤。</h4>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Font-Class引用" key="1">
                  <h3><b>Font-Class使用方式</b></h3>
                  <h4>
                    Font-Class这种使用方式具有以下特点：
                    <List
                      size="small"
                      bordered
                      dataSource={data1}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </h4>
                  <h3><b>第一步，引用css文件</b></h3>
                  <h4>使用Eicon CDN或<a href="https://cdn.eiconfont.com/v1.eicon.main.zip" target="_blank" rel="noreferrer">下载css文件</a>至本地来引用。</h4>
                  <Highlight className="html">
                    {`<link rel="stylesheet" href="https://cdn.eiconfont.com/v1.eicon.main.css" />`}
                  </Highlight>
                  <h3><b>第二步，挑选所需图标</b></h3>
                  <h4>
                    前往<a href="/#/icons" target="_blank">图标库</a>挑选所需要的图标，找到对应图标的类名。
                    <br />
                    每个图标下<b>第二行</b>就是图标的类名。
                  </h4>
                  <h3><b>第三步，使用图标</b></h3>
                  <Highlight className="html">
                    {`<!--将xxx替换为图标类名即可-->
<span class="eicon xxx" />`}
                  </Highlight>
                  <hr />
                  <h4>使用举例：</h4>
                  <Highlight className="html">
                    {`<span class="eicon eiconconsole" />`}
                  </Highlight>
                  <h4>
                    效果如下：
                    <span className="eicon eiconconsole"></span>
                  </h4>
                  <h3><b>第四步，调整图标大小及颜色</b></h3>
                  <h4>通过设置CSS的font-size和color属性可以调整图标大小以及颜色，如下所示：</h4>
                  <Highlight className="html">
                    {`<span class="eicon eiconhome" style="font-size: xx-large;" />
<span class="eicon eiconhome" style="font-size: medium; color: red" />
<span class="eicon eiconhome" style="font-size: xx-small; color: blue" />`}
                  </Highlight>
                  <span className="eicon eiconhome" style={{ fontSize: "xx-large" }} />
                  <span className="eicon eiconhome" style={{ fontSize: "medium", color: "red" }} />
                  <span className="eicon eiconhome" style={{ fontSize: "xx-small", color: "blue" }} />
                </TabPane>
                <TabPane tab="Symbol引用" key="2">
                  <h3><b>Symbol使用方式</b></h3>
                  <h4>
                    这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章。这种用法其实是做了一个SVG的集合，与另外两种相比具有如下特点：
                    <List
                      size="small"
                      bordered
                      dataSource={data2}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </h4>
                  <h3><b>第一步，引用JS文件</b></h3>
                  <h4>使用Eicon CDN或<a href="https://cdn.eiconfont.com/v1.eicon.main.zip" target="_blank" rel="noreferrer">下载JS文件</a>至本地来引用。</h4>
                  <Highlight className="html">
                    {`<script src="https://cdn.eiconfont.com/v1.eicon.main.js"></script>`}
                  </Highlight>
                  <h3><b>第二步，设置通用CSS（一次就行）</b></h3>
                  <Highlight className="html">
                    {`<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>`}
                  </Highlight>
                  <h3><b>第三步，挑选所需图标</b></h3>
                  <h4>
                    前往<a href="/#/icons" target="_blank">图标库</a>挑选所需要的图标，找到对应图标的类名。
                    <br />
                    每个图标下<b>第二行</b>就是图标的类名。
                  </h4>
                  <h3><b>第四步，使用图标</b></h3>
                  <Highlight className="html">
                    {`<!--将xxx替换为图标类名即可-->
<svg class="icon" aria-hidden="true">
  <use xlink:href="#xxx"></use>
</svg>`}
                  </Highlight>
                  <h4>使用举例：</h4>
                  <Highlight>
                    {`<svg class="icon" aria-hidden="true">
  <use xlink:href="#eiconconsole"></use>
</svg>
`}
                  </Highlight>
                  <h4>
                    效果如下：
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#eiconconsole"></use>
                    </svg>
                  </h4>
                  <h3><b>第五步，调整图标大小及颜色</b></h3>
                  <h4>通过设置CSS的font-size和color属性可以调整图标大小以及颜色，如下所示：</h4>
                  <Highlight className="html">
                    {`<svg class="icon" aria-hidden="true" style="font-size: xx-large;">
  <use xlink:href="#eiconhome"></use>
</svg>
<svg class="icon" aria-hidden="true" style="font-size: medium;color:red">
  <use xlink:href="#eiconhome"></use>
</svg>
<svg class="icon" aria-hidden="true" style="font-size: xx-small;color:blue">
  <use xlink:href="#eiconhome"></use>
</svg>`}
                  </Highlight>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "xx-large" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "medium", color: "red" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "xx-small", color: "blue" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                </TabPane>
              </Tabs>
            </div>
          </TabPane>
          <TabPane tab="English" key="2">
            <div>
              <h2>Welcome to use Eicon Icon Library</h2>
              <h4>Eicon is a free icon library with 729 icons. If you want to know how to use this icon library, you can refer to the contents of this page.</h4>
              <h4>If you want Eicon icons to appear in your project, you need to refer to the icon library file, and then type the corresponding code in the project.</h4>
              <h4>At present, Eicon supports two usage modes: font class reference and symbol reference. You can learn the differences and steps between the two reference methods below.</h4>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Font-Class usage" key="1">
                  <h3><b>Font-Class usage</b></h3>
                  <h4>
                    Font-Class has the following characteristics:
                    <List
                      size="small"
                      bordered
                      dataSource={en_data1}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </h4>
                  <h3><b>Step 1 - Reference CSS file</b></h3>
                  <h4>Using Eicon CDN or <a href="https://cdn.eiconfont.com/v1.eicon.main.zip" target="_blank" rel="noreferrer">download the CSS file</a> locally for reference.</h4>
                  <Highlight className="html">
                    {`<link rel="stylesheet" href="https://cdn.eiconfont.com/v1.eicon.main.css" />`}
                  </Highlight>
                  <h3><b>Step 2 - select the desired icon</b></h3>
                  <h4>
                    Go to <a href="/#/icons" target="_blank">icons library</a> select the required icon and find the class name of the corresponding icon.
                    <br />
                    The second line under each icon is the class name of the icon.
                  </h4>
                  <h3><b>Step 3 - use icons</b></h3>
                  <Highlight className="html">
                    {`<!--Replace XXX with the icon class name-->
<span class="eicon xxx" />`}
                  </Highlight>
                  <hr />
                  <h4>Using examples:</h4>
                  <Highlight className="html">
                    {`<span class="eicon eiconconsole" />`}
                  </Highlight>
                  <h4>
                    The effects are as follows:
                    <span className="eicon eiconconsole"></span>
                  </h4>
                  <h3><b>Step 4 - adjust icon size and color</b></h3>
                  <h4>The icon size and color can be adjusted by setting the font size and color properties of CSS, as shown below:</h4>
                  <Highlight className="html">
                    {`<span class="eicon eiconhome" style="font-size: xx-large;" />
<span class="eicon eiconhome" style="font-size: medium; color: red" />
<span class="eicon eiconhome" style="font-size: xx-small; color: blue" />`}
                  </Highlight>
                  <span className="eicon eiconhome" style={{ fontSize: "xx-large" }} />
                  <span className="eicon eiconhome" style={{ fontSize: "medium", color: "red" }} />
                  <span className="eicon eiconhome" style={{ fontSize: "xx-small", color: "blue" }} />
                </TabPane>
                <TabPane tab="Symbol usage" key="2">
                  <h3><b>Symbol usage</b></h3>
                  <h4>
                    This is a new way of use. It should be said that this is the mainstream in the future and the currently recommended usage of the platform. For relevant introduction, please refer to this article. This usage is actually a collection of SVGs. Compared with the other two, it has the following characteristics:
                    <List
                      size="small"
                      bordered
                      dataSource={en_data2}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </h4>
                  <h3><b>Step 1 - Reference JS file</b></h3>
                  <h4>Using Eicon CDN或<a href="https://cdn.eiconfont.com/v1.eicon.main.zip" target="_blank" rel="noreferrer">Download the JS file</a>locally for reference.</h4>
                  <Highlight className="html">
                    {`<script src="https://cdn.eiconfont.com/v1.eicon.main.js"></script>`}
                  </Highlight>
                  <h3><b>Step 2 - set general CSS (just one time)</b></h3>
                  <Highlight className="html">
                    {`<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>`}
                  </Highlight>
                  <h3><b>Step 3 - select the desired icon</b></h3>
                  <h4>
                    Go to <a href="/#/icons" target="_blank">icons library</a> Select the required icon and find the class name of the corresponding icon.
                    <br />
                    The second line under each icon is the class name of the icon.
                  </h4>
                  <h3><b>Step 4 - use icons</b></h3>
                  <Highlight className="html">
                    {`<!--Replace XXX with the icon class name-->
<svg class="icon" aria-hidden="true">
  <use xlink:href="#xxx"></use>
</svg>`}
                  </Highlight>
                  <h4>Use examples:</h4>
                  <Highlight>
                    {`<svg class="icon" aria-hidden="true">
  <use xlink:href="#eiconconsole"></use>
</svg>
`}
                  </Highlight>
                  <h4>
                    The effects are as follows:
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#eiconconsole"></use>
                    </svg>
                  </h4>
                  <h3><b>Step 5 - adjust icon size and color</b></h3>
                  <h4>The icon size and color can be adjusted by setting the font size and color properties of CSS, as shown below:</h4>
                  <Highlight className="html">
                    {`<svg class="icon" aria-hidden="true" style="font-size: xx-large;">
  <use xlink:href="#eiconhome"></use>
</svg>
<svg class="icon" aria-hidden="true" style="font-size: medium;color:red">
  <use xlink:href="#eiconhome"></use>
</svg>
<svg class="icon" aria-hidden="true" style="font-size: xx-small;color:blue">
  <use xlink:href="#eiconhome"></use>
</svg>`}
                  </Highlight>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "xx-large" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "medium", color: "red" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                  <svg className="icon" aria-hidden="true" style={{ fontSize: "xx-small", color: "blue" }}>
                    <use xlinkHref="#eiconhome"></use>
                  </svg>
                </TabPane>
              </Tabs>
            </div>

          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Start;
