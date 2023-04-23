---
title: 版本记录
---

### v2.1.1

* orm 支持（开发中）
* 新增 actuator 模块对接，应用监控，支持 micrometer-metrics
* resful 支持 重定向路由处理器

### v2.0.6

* 升级 vertx 版本至 4.4.1
* 修复 restful 静态资源处理器在jar方式运行时无法获取资源问题
* 优化部分逻辑

### v2.0.5

* restful 模块静态资源处理器去除枚举，使用资源协议定义映射地址
* 优化部分代码注释，移除 @Date 注释标记
* 参数验证结果对象 BindingResult 新增 rejectValue 方法用于自定义字段错误
* 新增 `@Import` 注解，标识在配置类可以导入指定类，[点击跳转至文档](./framework.html#import)
* 新增 `ImportBeanDescriptionRegistrar` 接口，配合`@Import` 注解使用，可以在运行时注入定制的 `BeanDescription`，[点击跳转至文档](./framework.html#import)
* 新增 DateUtil 相关时间工具类（感谢 [hutool](https://hutool.cn/docs/#/) 和 [Apache Commons](https://commons.apache.org/)）
* 新增类型转换支持的类型（感谢 [hutool](https://hutool.cn/docs/#/)）
* 修复restful映射问题，参数验证等相关问题

### v2.0.4

* 修复 kotlin 协程方法判断逻辑异常情况
* 修复部署 restful 多实例时出现的重复部署例外
* 新增 restful 模块静态资源处理器
* 修复部分已知bug

### v2.0.3

* 重新定义 setter 方法判断逻辑
* 修复配置注解对象的部分属性无法注入问题
* 修复maven打包插件构建的jar，启动慢问题
* 配置键支持中划线模式
* 优化部分配置默认值

### v2.0.2

* 新增maven打包插件，构建可执行 jar
* 新增启动装载模块，自定义类加载器，用于加载打包后的 jar

### v2.0.1

* 移除 1.0.x 对 spring 的所有依赖
* 新增对象工厂模块
* 新增基于 vertx config 的配置中心模块
* 新增应用事件
* 新增应用上下文，用于适配其他组件，约定大于配置
* restful 模块适配应用上下文
* 新增应用快速启动模块
* 修复一些已知bug
