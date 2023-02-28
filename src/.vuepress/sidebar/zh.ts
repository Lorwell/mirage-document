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
            prefix: "guide/",
            children: [
                "",
                {
                    text: "Mirage Core",
                    prefix: "core/",
                    children: "structure"
                },
                {
                    text: "Mirage Restful",
                    prefix: "restful/",
                    children: "structure"
                }
            ],
        },
    ],
});
