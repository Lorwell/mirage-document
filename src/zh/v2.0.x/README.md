---
title: 指南
---

## 初衷

创建本项目的初衷是因为我们继续一个资源占有少，效率高的异步编程框架，经过一些选型后，Vertx 是我们最终敲定的，但是 Vertx 提供的编程方式非常的原始，在使用起构建应用时会有很大的心智负担，使得项目后续维护的成本增高，于是便诞生了 Mirage，Mirage 基于 Vertx 使响应式编程变得更简单。

::: info Mirage 名称的来由
Mirage 是 海市蜃楼 的英文翻译，为什么起这个名称呢？是因为 Vertx 的异步编程模型通过 `Future` 进行串联，代码像是在一个管道中根据绑定的顺序挨个执行的，这样的模式与 海市蜃楼 折射原理非常相似，故得此名称。
:::

## 设计目标

Mirage 基于 Vertx 使异步编程变得更简单，为 Vertx 提供构建大型应用的基础框架，针对不同组件基于 `约定大于配置`的方式进行集成，提供简单的使用方式

::: info

如果你对 异步编程，Vertx 还不了解，那么我们建议你先看一下这篇[小白入门教程文档](../getStarted.md)，了解一下相关的基础知识

:::

## 安装

**需要的最低JDK依赖为 JDK 11**

在你的pom中添加以下依赖管理配置

```xml
<properties>
     <!-- 环境设置 -->
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
     <java.version>11</java.version>
</properties>

<!-- mirage 的依赖管理 -->
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

    <build>
        <plugins>
            <!-- Compiler 插件, 设定 JDK 版本 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.1</version>
                <configuration>
                    <showWarnings>true</showWarnings>
                    <source>${java.version}</source>
                    <target>${java.version}</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

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

稳定版本：https://repo1.maven.org/maven2/cc/shacocloud/mirage/

快照版本：https://s01.oss.sonatype.org/content/repositories/snapshots/cc/shacocloud/mirage/

::: info 版本说明

版本形式为 A.b.x，A表示的大版本，b表示的是小版本，x表示的是小版本功能修复版本。

大版本通常是大功能迭代时递增，小版本通常是在目前大功能范围内新增功能点时递增。

:::

## 快速启动

在你的pom中添加以下依赖

::: code-tabs#language

@tab kotlin

```xml
<properties>
    <!-- kotlin 环境设置 -->
    <kotlin.compiler.incremental>true</kotlin.compiler.incremental>
    <kotlin.compiler.jvmTarget>11</kotlin.compiler.jvmTarget>
    <kotlin.version>1.7.22</kotlin.version>
</properties>

<dependencies>
    <dependency>
        <groupId>cc.shacocloud</groupId>
        <artifactId>mirage-starter</artifactId>
    </dependency>

    <dependency>
        <groupId>cc.shacocloud</groupId>
        <artifactId>mirage-kotlin</artifactId>
    </dependency>
</dependencies>
```

@tab java

```xml
<dependencies>
    <dependency>
        <groupId>cc.shacocloud</groupId>
        <artifactId>mirage-starter</artifactId>
    </dependency>
</dependencies>
```

::: 

快速启动代码

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
