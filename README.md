## 介绍

基于 vertx 构建响应式编程框架，支持 kotlin

仓库地址：https://gitee.com/shacocloud/mirage

文档地址：https://mirage.shacocloud.cc/

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

## 使用

在你的pom中添加以下依赖

```xml
        <dependency>
            <groupId>cc.shacocloud</groupId>
            <artifactId>mirage-starter</artifactId>
        </dependency>
```

编写应用main方法，启动应用

**java**

```java
@MirageBootApplication
public class Application {

    public static void main(String[] args) {
        MirageApplication.run(Application.class,args);
    }

}
```

**Kotlin**

```kotlin
@MirageBootApplication
class Application

fun main(args: Array<String>) {
    MirageApplication.run(Application::class.java, *args)
}
```

如果你使用`kotlin`那么你还需要添加以下依赖，以获得对 `kotlin`的支持

```xml
<dependency>
    <groupId>cc.shacocloud</groupId>
    <artifactId>mirage-kotlin</artifactId>
</dependency>
```

