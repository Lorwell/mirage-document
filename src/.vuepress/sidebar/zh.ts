import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            text: "首页",
            icon: "home",
            link: "/",
        },
        {
            text: "文档",
            prefix: "zh/v2.0.x/",
            children: "structure"
        },
    ],
});