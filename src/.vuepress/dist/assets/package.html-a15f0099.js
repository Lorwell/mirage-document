import{_ as l,W as p,X as u,Y as i,Z as a,a1 as k,$ as n,a0 as s,C as g}from"./framework-c7bcd797.js";const r={},d=k('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>因为应用使用了保存在资源目录下的SPI加载配置文件，那么传统的打包插件将导致这种配置发生冲突，导致被覆盖的情况。为了应对这样的情况，我们参考了 spring-boot-maven-plugin 模块的设计，自定义了自己的打包插件。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h3><p>在你需要打包的项目 pom 中添加以下配置，然后执行 <code>mvn clear package</code> 将会在项目输出目录生成一个可执行jar。</p>',5),m=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("properties")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- kotlin 环境设置 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("kotlin.compiler.incremental")]),n("span",{class:"token punctuation"},">")]),s("true"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("kotlin.compiler.incremental")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("kotlin.compiler.jvmTarget")]),n("span",{class:"token punctuation"},">")]),s("11"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("kotlin.compiler.jvmTarget")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("kotlin.version")]),n("span",{class:"token punctuation"},">")]),s("1.7.22"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("kotlin.version")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("properties")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("build")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sourceDirectory")]),n("span",{class:"token punctuation"},">")]),s("${project.basedir}/src/main/kotlin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sourceDirectory")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("testSourceDirectory")]),n("span",{class:"token punctuation"},">")]),s("${project.basedir}/src/test/kotlin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("testSourceDirectory")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plugins")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("org.jetbrains.kotlin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("kotlin-maven-plugin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")]),s("${kotlin.version}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")]),s(`

            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("id")]),n("span",{class:"token punctuation"},">")]),s("compile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("id")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goal")]),n("span",{class:"token punctuation"},">")]),s("compile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goal")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`

                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("id")]),n("span",{class:"token punctuation"},">")]),s("test-compile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("id")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goal")]),n("span",{class:"token punctuation"},">")]),s("test-compile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goal")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`

                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("id")]),n("span",{class:"token punctuation"},">")]),s("kapt"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("id")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goal")]),n("span",{class:"token punctuation"},">")]),s("kapt"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goal")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("configuration")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("jvmTarget")]),n("span",{class:"token punctuation"},">")]),s("${java.version}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("jvmTarget")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sourceDirs")]),n("span",{class:"token punctuation"},">")]),s(`
                            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sourceDir")]),n("span",{class:"token punctuation"},">")]),s("src/main/kotlin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sourceDir")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sourceDirs")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("configuration")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`

        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`

        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("cc.shacocloud"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("mirage-maven-plugin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")]),s("${mirage.version}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goal")]),n("span",{class:"token punctuation"},">")]),s("repackage"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goal")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plugins")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("build")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("build")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plugins")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("cc.shacocloud"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("mirage-maven-plugin"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")]),s("${mirage.version}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("goal")]),n("span",{class:"token punctuation"},">")]),s("repackage"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goal")]),n("span",{class:"token punctuation"},">")]),s(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("goals")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("execution")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("executions")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plugin")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plugins")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("build")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h3",{id:"gradle",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gradle","aria-hidden":"true"},"#"),s(" gradle")],-1),h=n("p",null,"暂不支持",-1);function x(_,f){const t=g("CodeTabs");return p(),u("div",null,[d,i(t,{id:"15",data:[{title:"kotlin"},{title:"java"}],"tab-id":"language"},{tab0:a(({title:c,value:e,isActive:o})=>[m]),tab1:a(({title:c,value:e,isActive:o})=>[v]),_:1}),b,h])}const j=l(r,[["render",x],["__file","package.html.vue"]]);export{j as default};
