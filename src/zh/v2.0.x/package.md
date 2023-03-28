---
title: Mirage 打包插件
---

## 介绍

因为应用使用了保存在资源目录下的SPI加载配置文件，那么传统的打包插件将导致这种配置发生冲突，导致被覆盖的情况。为了应对这样的情况，我们参考了 spring-boot-maven-plugin 模块的设计，自定义了自己的打包插件。

## 使用

### maven

在你需要打包的项目 pom 中添加以下配置，然后执行 `mvn clear package` 将会在项目输出目录生成一个可执行jar。

::: code-tabs#language

@tab kotlin

```xml
<properties>
    <!-- kotlin 环境设置 -->
    <kotlin.compiler.incremental>true</kotlin.compiler.incremental>
    <kotlin.compiler.jvmTarget>11</kotlin.compiler.jvmTarget>
    <kotlin.version>1.7.22</kotlin.version>
</properties>

<build>
    <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>
    <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>
    <plugins>
        <plugin>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-maven-plugin</artifactId>
            <version>${kotlin.version}</version>

            <executions>
                <execution>
                    <id>compile</id>
                    <goals>
                        <goal>compile</goal>
                    </goals>
                </execution>

                <execution>
                    <id>test-compile</id>
                    <goals>
                        <goal>test-compile</goal>
                    </goals>
                </execution>

                <execution>
                    <id>kapt</id>
                    <goals>
                        <goal>kapt</goal>
                    </goals>
                    <configuration>
                        <jvmTarget>${java.version}</jvmTarget>
                        <sourceDirs>
                            <sourceDir>src/main/kotlin</sourceDir>
                        </sourceDirs>
                    </configuration>
                </execution>
            </executions>

        </plugin>

        <plugin>
            <groupId>cc.shacocloud</groupId>
            <artifactId>mirage-maven-plugin</artifactId>
            <version>${mirage.version}</version>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

@tab java

```xml
 <build>
    <plugins>
        <plugin>
            <groupId>cc.shacocloud</groupId>
            <artifactId>mirage-maven-plugin</artifactId>
            <version>${mirage.version}</version>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

:::

### gradle

暂不支持
