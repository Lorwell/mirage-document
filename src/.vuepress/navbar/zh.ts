import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "版本",
        prefix: "/zh/",
        children: [
            {
                text: "V2",
                link: "v2.0.x/",
            },

        ],
    },
]);
