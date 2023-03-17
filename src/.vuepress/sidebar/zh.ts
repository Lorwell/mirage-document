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
            children: [
                {
                    text: "指南",
                    link: "/zh/v2.0.x/",
                },
                {
                    text: "Mirage Framework",
                    link: "framework",
                },
                {
                    text: "Mirage Restful",
                    link: "restful",
                },
                {
                    text: "Mirage ORM",
                    link: "orm",
                },
                {
                    text: "Mirage 打包插件",
                    link: "package",
                },
                {
                    text: "版本记录",
                    link: "versionRecord",
                }
            ]
        },
    ],
});