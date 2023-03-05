import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "项目",
        prefix: "/zh/v2.0.x/",
        children: [
            {
                text: "Mirage Framework",
                link: "framework/",
            },
            {
                text: "Mirage Restful",
                link: "restful/",
            },
            {
                text: "Mirage ORM",
                link: "orm/",
            }
        ],
    },
]);
