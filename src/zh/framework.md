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

## 应用对象工厂

应用对象工厂，即 IOC（控制反转）+ DI（依赖注入）。

即对象的创建，依赖注入的过程都将由对象工厂来完成，那么开发需要做的是在需要对象工厂管理的对象上使用指定注解来标识，这样在应用启动时，会自动扫描这些类并且加载到工厂中进行管理。

那么如果定义一个工厂对象呢？，请继续往下看：

### 定义工厂对象

使用 `@Component` 注解标识在对象上，即可标识为一个工厂对象。

如果未显式的定义对象的名称，则默认为类名首字母小写驼峰命名法，如果需要显示的定义使用 `@Component(value="对象名称")`

示例：

::: code-tabs#language

@tab kotlin

```kotlin
@Slf4j
@Component(lazy = false)
class TestComponent : InitializingBean {

    override fun init() {
        log.info("testComponent 初始化成功：${this}")
    }
}
```

@tab java

```java
@Slf4j
@Component(lazy = false)
public class TestComponent implements InitializingBean {

    @Override
    public void init() throws Exception {
        log.info("testComponent 初始化成功：{}", this);
    }
}

```

:::

使用 `@Configuration` 注解标识在对象上，那么该对象将被标识为一个配置工厂对象，在该对象中使用 `@Bean` 标识方法来表示这是一个工厂对象方法。

如果未显示的定义对象的名称则使用方法名作为对象名称，如果需要显示的定义使用 `@Bean(value="对象名称")`

示例：

::: code-tabs#language

@tab kotlin

```kotlin
@Configuration
class TestConfiguration {

    @Slf4j
    class TestBean : InitializingBean {
        override fun init() {
            log.info("testBean 初始化成功：${this}")
        }
    }

    @Bean(lazy = false)
    fun testBean(): TestBean {
        return TestBean()
    }
}
```

@tab java

```java
@Configuration
public class TestConfiguration {

    @Slf4j
    public static class TestBean implements InitializingBean {

        @Override
        public void init() throws Exception {
            log.info("testBean 初始化成功：{}", this);
        }
    }

    @Bean(lazy = false)
    public TestBean testBean() {
        return new TestBean();
    }
}
```

:::

::: info
需要注意的是：默认情况下使用 `@Component` 或 `@Bean` 注解标识的对象都是懒加载的，即什么时候第一次使用则什么时候加载，如果不是懒加载对象，那么将在应用工厂所有的类型扫描完成后，进行实例化。
:::

