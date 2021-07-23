import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import "antd/dist/antd.css";
import { Tabs } from 'antd';
import { Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
function callback(key) {
  console.log(key);
}

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
        {/*Twitter*/}
        <meta name='twitter:card' content='Eicon - 高效·快捷·轻量的图标库' />
        <meta name='twitter:site' content='Eicon - 字体图标库' />
        <meta name="twitter:url" content="https://www.eiconfont.com" />
        <meta name='twitter:title' content='Eicon - 字体图标库' />
        <meta name='twitter:image' content={logo} />
        <meta name='twitter:description' content='Eicon - 高效·快捷·轻量的图标库' />
        {/*Facebook*/}
        <meta property="og:url" content="https://www.eiconfont.com" />
        <meta property="og:title" content="Eicon - 字体图标库" />
        <meta
          property="og:keywords"
          content="Eicon,图标库,矢量图标,网页图标,Eicon图标库"
        />
        <meta
          property="og:description"
          content="Eicon - 高效·快捷·轻量的图标库"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="Eicon - 字体图标库" />
        {/* {QQ} */}
        <meta itemprop="name" content="Eicon - 字体图标库" />
        <meta itemprop="image" content={logo} />
        <meta name="description" itemprop="description" content="Eicon - 高效·快捷·轻量的图标库" />
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
          <Card
            hoverable
            style={{ width: 260 }}
            cover={
              <span class="eicon eiconbook" style={{ color: "skyblue", fontSize: "100px", textAlign:"center" }} />
            }
          >
            <Meta title="一套字库, 729个图标" description="图标丰富多样，适用于各行各业，一套图标库解决所有图标需求问题。" />
          </Card>
          <Card
            hoverable
            style={{ width: 260 }}
            cover={
              <span class="eicon eiconexpand2" style={{ color: "skyblue", fontSize: "100px", textAlign:"center" }} />
            }
          >
            <Meta title="无限放大或缩小" description="可缩放的矢量图标，每个图标在放大或者缩小的时候看起来都正常。" />
          </Card>
          <Card
            hoverable
            style={{ width: 260 }}
            cover={
              <span class="eicon eiconquill" style={{ color: "skyblue", fontSize: "100px", textAlign:"center" }} />
            }
          >
            <Meta title="轻量简便" description="使用本图标库无需繁琐的代码，使图标以简介的代码呈现在网页上。" />
          </Card>
          <Card
            hoverable
            style={{ width: 260 }}
            cover={
              <span class="eicon eicondenied" style={{ color: "skyblue", fontSize: "100px", textAlign:"center" }} />
            }
          >
            <Meta title="无需JavaScript支持" description="使用本图标库无需JavaScript支持，因此您无需担忧js方面对于不同浏览器的兼容问题。" />
          </Card>
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
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="中文" key="1">
            Eicon是一款免费的图标库，并且拥有着729个图标。本图标库的设计初衷就是让大家更加方便地使用网页图标，使图标灵活地展现在网页上。本图标库所有图标都是svg矢量图标，可以自由放大或缩小并保证清晰度。同时，本图标库通过<code>&lt;span&gt;</code>标签的class属性或者SVG sprite和<code>&lt;use&gt;</code>来指定图标，书写直观，语义明确，无需繁琐的代码。在更改图标时也仅需更改class属性，使图标库具有较高的灵活性。除此之外，图标库不需要JavaScript支持，因此您无需担忧js方面对于不同浏览器的兼容问题。本图标库支持 IE8+，及所有现代浏览器。
          </TabPane>
          <TabPane tab="English" key="2">
          Eicon is a free icon library with 729 icons. The original design of this icon library is to make it more convenient for people to use web icons, icons to display flexibly on the web. All icons in this icon gallery are svg vector icons, which can be enlarged or shrunk freely to ensure clarity. At the same time, this icon library specifies icons through the class attribute of the <code>&lt;span&gt;</code> tag or SVG sprite and <code>&lt;use&gt;</code>, writing intuitive, semantically clear, and no tedious code. You also only need to change the class attribute when changing icons, making the icon library more flexible. In addition, the icon library doesn't require JavaScript support, so you don't have to worry about compatibility with different browsers for js. This icon library supports IE8 +, and all modern browsers.
          </TabPane>
        </Tabs>
        <iframe src="/#/list" title="图标列表" style={{ width: "100%" }}></iframe>
      </div>
    </div>
  );
}

export default App;





// ReactDOM.render(
//   ,
//   mountNode,
// );