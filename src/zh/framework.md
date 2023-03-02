---
title: Mirage Framework
---

## 介绍

Mirage 的核心框架，其中包含了以下基础功能

* 应用对象工厂
* 应用配置中心
* 应用事件系统



## 快速启动

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
