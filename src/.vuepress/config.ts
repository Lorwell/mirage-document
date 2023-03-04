import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "Mirage",
            description: "Mirage 的使用文档",
        },
    },
    markdown: {
        headers: {
            level: [2, 3, 4]
        }
    },
    theme,
});
