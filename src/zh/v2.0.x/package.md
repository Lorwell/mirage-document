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

::: warning

kotlin 项目打包后的体积比 传统 java 项目要大个 10M 左右，运行时间要多个 10 秒钟，通过定位发现通过自定义类加载加载的 kotlin 类，普遍耗时 30ms ~ 45ms 导致应用启动时间骤升，但是并不影响后续的运行，目前还未找到好的解决方案，留待后续优化！！！

:::
