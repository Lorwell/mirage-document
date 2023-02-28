import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar";
import {zhSidebar} from "./sidebar";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: {
        name: "思追(shaco)",
        url: "https://blog.shacocloud.cc/",
    },
    iconAssets: "iconfont",
    logo: "/logo.svg",
    repo: "https://gitee.com/shacocloud/mirage-document",
    docsDir: "src",
    locales: {
        "/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            footer: "默认页脚",
            displayFooter: true,
        },
    },

    plugins: {
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
    },
});
