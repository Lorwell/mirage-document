---
title: 指南
---

## 初衷

创建本项目的初衷是因为 Vertx 提供的编程方式非常的原始，在使用起构建应用时会有很大的心智负担，使得项目后续维护的成本增高，于是便诞生了 Mirage，Mirage 使 Vertx 变得更简单。

::: info Mirage 名称的来由
Mirage 是 海市蜃楼 的英文翻译，为什么起这个名称呢？是因为 Vertx 是基于回调的响应式编程模型，根据我们以前的习惯，代码是一行一行往下执行的，然而回调式的编程模型，代码是在一个管道中根据绑定的回调顺序挨个执行的，这样的模式与 海市蜃楼 折射原理非常相似，故得此名称。
:::

## 设计目标

Mirage 使 Vertx 变得更简单，为 Vertx 提供构建大型应用的基础框架，针对不同组件基于 `约定大于配置`的方式进行集成，提供简单的使用方式

* [核心框架模块](/zh/framework)
* [restful 模块](/zh/restful)
* [orm 模块](/zh/orm)
* 等等...

## 安装

在你的pom中添加以下依赖管理配置

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>cc.shacocloud</groupId>
            <artifactId>mirage-dependencies</artifactId>
            <version>${mirage.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

最新版本：https://s01.oss.sonatype.org/content/repositories/snapshots/cc/shacocloud/mirage-dependencies/

如果你需要使用 SNAPSHOT 相关版本，请使用以下存储库（SNAPSHOT 版本不提交到中央库）：

```xml
<repositories>
    <repository>
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>always</updatePolicy>
            <checksumPolicy>warn</checksumPolicy>
        </snapshots>
        <id>ossrh</id>
        <name>ossrh</name>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>
    </repository>
</repositories>
```
