---
home: true
icon: home
title: Mirage
heroImage: /logo.svg
heroText: Mirage
tagline: Mirage 使 Vertx 变得更简单
actions:
  - text: 快速开始 💡
    link: /zh
    type: primary

features:
  - title: Kotlin
    details: 支持 kotlin 构建基于协程的响应式应用

  - title: IOC
    details: 依赖注入使构建大型应用变得简单

  - title: 环境配置
    details: 多种应用环境配置方式和热更新使配置变更无需停机重新部署

  - title: 事件驱动
    details: 与业务事件结合，实时响应事情消息

copyright: false
footer: Apache 2.0 Licensed, Copyright © 思追(shaco)
---

## 🛠 安装

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

## 🚀 快速启动

在你的pom中添加以下依赖

```xml
<dependency>
    <groupId>cc.shacocloud</groupId>
    <artifactId>mirage-starter</artifactId>
</dependency>
```

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
