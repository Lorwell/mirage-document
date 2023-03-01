import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "项目",
        prefix: "/zh/",
        children: [
            {
                text: "Mirage Framework",
                link: "framework/",
            },
            {
                text: "Mirage Restful",
                link: "restful/",
            }
        ],
    },
]);
