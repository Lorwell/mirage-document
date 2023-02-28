import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "项目",
        prefix: "/projects/",
        children: [
            {
                text: "Mirage Restful",
                link: "restful/",
            }
        ],
    },
]);
