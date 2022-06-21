## 介绍

基于 vertx + springboot（ioc + aop）构建响应式编程框架，支持 kotlin 协程。

代码仓库地址：https://gitee.com/shacocloud/mirage

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

