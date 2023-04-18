---
home: true
icon: home
title: Mirage
heroImage: /logo.svg
heroText: Mirage
tagline: Mirage 使异步编程变得更简单
actions:
  - text: 快速开始 💡
    link: /zh/v2.0.x/
    type: primary

features:
  - title: Vert.x
    details: 基于 Vertx 构建的异步编程框架
    link: https://vertx-china.github.io/

  - title: Kotlin
    details: 支持 kotlin 构建基于协程的响应式应用
    link: https://book.kotlincn.net/text/home.html

  - title: Restful
    details: 响应式web app，拥有极高的并发

  - title: 约定大于配置
    details: 降低用户的心智负担，获得好处的同时也不失去灵活性

  - title: 对象工厂
    details: 控制反转和依赖注入使得构建大型应用变得简单

  - title: 环境配置
    details: 支持多种应用环境配置方式和热更新使配置变更无需停机重新部署

  - title: 事件驱动
    details: 与业务事件结合，实时响应事情消息

  - title: 注解式编程
    details: 代码简洁，开发速度大幅度提升

copyright: false
footer: Apache 2.0 Licensed, Copyright © 思追(shaco)
---

##  🚀 快速启动

::: code-tabs#language

@tab kotlin

```kotlin
@MirageBootApplication
class Application

fun main(args: Array<String>) {
    MirageApplication.run(Application::class.java, *args)
}
```

@tab java

```java
@MirageBootApplication
public class Application {

    public static void main(String[] args) {
        MirageApplication.run(Application.class,args);
    }

}
```

::: 
