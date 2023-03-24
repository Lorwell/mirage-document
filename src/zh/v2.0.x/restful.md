---
title: Mirage Restful
---

## 介绍

Mirage 的 restful 框架，其中包含了功能

* [请求过滤器](#请求过滤器)
* [请求拦截器](#请求拦截器)
* [注解式控制器](#注解式控制器)
* [JSR303参数校验](#jsr303参数校验)
* [异常处理器](#异常处理器)
* [跨域请求配置](#跨域请求配置)
* [静态资源映射](#静态资源映射)
* [Restful 配置](#restful配置)

## 安装

在你的pom中引入以下依赖

```xml
<dependency>
    <groupId>cc.shacocloud</groupId>
    <artifactId>mirage-restful</artifactId>
</dependency>
```

## 请求过滤器

// TODO

## 请求拦截器

请求拦截器，在请求到达控制器之前处理，可以通过实现`HandlerInterceptor` 的方式来定义一个请求拦截器。

`HandlerInterceptor`提供了两个方法，分别是：

* preHandle
  在请求到达控制器前处理，使用此方法，每个拦截器都可以决定是否中止执行链，一般来说中止通常是发送HTTP错误或编写自定义响应。
* afterCompletion
  在响应数据写入后调用，一般来说用于请求结束后的资源清理或者日志等操作

另外也提供了`kotlin`的协程接口 `CoroutineHandlerInterceptor`以方便拓展使用

一般来说我们建议使用`@WebInterceptor`注解的方式去定义拦截器，另外我们也提供了`MirageRestfulConfigurer`配置器的方式进行注册。

注解式

::: code-tabs#language

@tab kotlin

```kotlin
@WebInterceptor
open class RequestInterceptor : CoroutineHandlerInterceptor {
    
    override suspend fun doPreHandle(request: HttpRequest, response: HttpResponse, handler: VertxInvokeHandler): Boolean {
        // TODO...
        return ture
    }

    override suspend fun doAfterCompletion(request: HttpRequest, response: HttpResponse, handler: VertxInvokeHandler, cause: Throwable?) {
       // TODO...
    }
    
}
```

@tab java

```java
@WebInterceptor
public class RequestInterceptor implements HandlerInterceptor {
    
    @Override
    public Future<Boolean> preHandle(HttpRequest request, HttpResponse response, VertxInvokeHandler handler) {
        // TODO...
        return Future.succeededFuture(true);
    }
    
    @Override
    public Future<Void> afterCompletion(HttpRequest request, HttpResponse response, VertxInvokeHandler handler, @Nullable Throwable cause) {
        // TODO...
        return Future.succeededFuture();
    }
}
```

:::

声明式

::: code-tabs#language

@tab kotlin

```kotlin
@Configuration
open class WebMvcConfigurer : MirageRestfulConfigurer {
   
    @Override
    fun registerHandlerInterceptor(interceptorMappings : List<InterceptorMappingInfo>) {
          // TODO...
    }
    
}
```

@tab java

```java
@Configuration
public class WebMvcConfigurer implements MirageRestfulConfigurer {
   
    @Override
    public void registerHandlerInterceptor(List<InterceptorMappingInfo> interceptorMappings) {
          // TODO...
    }
    
}
```

:::

### 拦截规则

你可以使用`@WebInterceptor`注释来映射请求拦截，它拥有以下属性：

* includePatterns
  拦截路径模式，表示那些请求路径会被拦截
* excludePatterns
  排除路径模式，表示那些请求会被排除，该值应用与`includePatterns`匹配成功的路径

使用 `AntPathMatcher`来实现，使用以下规则匹配路径： 

* `?` 匹配一个字符
* `*`  匹配零个或多个字符
* `**` 匹配路径中的零个或多个层级

一些示例：

* `@WebInterceptor(includePatterns="/api/*")` 匹配所有以`/api`开头，但只有2层级的路径
* `@WebInterceptor(includePatterns="/api/**")` 匹配所有以`/api`开头，不限制层级的路径
* `@WebInterceptor(includePatterns="/api/t?st")` 匹配`/api/test`也匹配`/api/tast`
* `@WebInterceptor(includePatterns="/api/*",excludePatterns="/api/test")` 匹配所有以`/api`开头，但只有2层级的路径，排除`/api/test`

::: info

当请求映射模式为`PATH`时，拦截器的匹配是在启动时，匹配控制器的映射路径并且将拦截器信息挂载在控制器处理调用链上，见`HandlerExecutionChain`。

存在以下假设逻辑：

一个拦截器规则为：`@WebInterceptor(includePatterns="/api/t?st")` ，

一个控制器映射为：`@RequestMapping(”/api/:value“)`

那么当一个请求信息`/api/test`映射到该控制器时，并不会被拦截器所拦截。

相对的，当请求映射模式为`REGEX`时，拦截器匹配是在收到请求时根据请求信息实时匹配的，这样的好处是拦截器映射更加准确，但是对应高性能来说是一场灾难。

:::

## 注解式控制器

Mirage Restful 提供了一个基于注解的编程模型，使用`@Controller`或`@RestController`注解来表达请求映射、请求输入等组件。带注释的控制器具有灵活的方法签名，不必扩展基类，也不必实现特定的接口。以下示例显示了由注释定义的控制器：

::: code-tabs#language

@tab kotlin

```kotlin
@RestController
class HelloWordController {
    
   @GetMapping("/hello-word")
   suspend fun handle(): Any {
        val result: Map<String, String> = mutableMapOf()
        result.put("code", "ok")
        result.put("message", "hello-word")
        return result
    }
    
}
```

@tab java

```java
@RestController
public class HelloWordController {

    @GetMapping("/hello-word")
    public Future<Object> handle() {
        Map<String,String> result = new HashMap<>(2);
        result.put("code","ok");
        result.put("message","hello-word");
        return Future.successFuture(result);
    }
    
}
```

:::

::: info RestController

`@RestController`是一个组合注释，它本身是元注释的，它本身用`@Controller`和`@ResponseBody`进行元注释，以指示控制器的每个方法都继承了类型级别的`@ResponseBody`注释，因此，它直接写入响应主体。

:::

### 请求映射

你可以使用`@RequestMapping`注释将请求映射到控制器方法，它具有以下属性，可以通过URL、HTTP方法、请求参数、报头和媒体类型进行匹配。你可以在类级别使用它来表示共享映射，或者在方法级别使用它来缩小到特定地址的映射

还有一些特定于HTTP方法的`@RequestMapping`的快捷方式的变体:

- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping
- @PatchMapping

提供的快捷方式是自定义注释，这是因为大多数控制器方法应该映射到特定的HTTP方法，而不是使用`@RequestMapping`，`@RequestMapping`在默认情况下匹配所有HTTP方法，所以在类级别仍然需要`@RequestMapping`来表示共享映射。

下面的例子有类型级和方法级的映射:

::: code-tabs#language

@tab kotlin

```kotlin
@RestController
@RequestMapping("/api/user")
class UserController {

    @GetMapping("/:id")
    suspend fun getUser(@PathVariable id: Long): User {
        // ...
    }

    @PostMapping
    suspend fun add(@RequestBody user: User): User {
        // ...
    }
}
```

@tab java

```java
@RestController
@RequestMapping("/api/user")
class UserController {

    @GetMapping("/:id")
    public Future<User> getUser(@PathVariable Long id) {
        // ...
    }

    @PostMapping
    public Future<User> add(@RequestBody User user) {
        // ...
    }
}
```

:::

#### URI 模式

`@RequestMapping`可以使用 URL 模式映射方法，有三种选择：

* 基于精确路径的路由
  将映射模式设置为`PATH`，在这种情况下它只会匹配路径一致的请求，例如：`/api/user`
* 基于路径前缀的路由
  将映射模式设置为`PATH`，方式是在声明路径时使用一个 `*` 作为结尾，例如：`/api/user/*`
* 基于正则表达式的路由
  将映射模式设置为`REGEX`，即可使用正则表达式匹配路由的 URI 路径

一些示例：

- `/api/user`- 匹配精确路径
- `/api/user/*`- 匹配指定前缀的路径
- `"/api/user/:id"`- 匹配精确路径并将其捕获为变量
- `"\\/([^\\/]+)\\/([^\\/]+)"`- 正则匹配路径并将其捕获为变量
  例如：请求路径`/api/user` 路径匹配，`api` 可以通过参数 param0 获取，`user` 可以通过参数 param1 获取
- `\\/(?<p0>[^\\/]+)\\/(?<p1>[^\\/]+)`- 正则匹配路径并使用命名捕捉组的方式将其捕获为变量
  例如：请求路径`/api/user` 路径匹配，`api` 可以通过参数 p0 获取，`user` 可以通过参数 p1 获取

捕获的 URI 变量可以使用`@PathVariable`

#### 媒体类型 ContentType

你可以根据请求的`Content-Type`来缩小请求映射，示例如下:

::: code-tabs#language

@tab kotlin

```kotlin
@PostMapping("/api/user", consumes = ["application/json"]) 
suspend fun addPet(@RequestBody user: User): User {
    // ...
}
```

@tab java

```java
@PostMapping(path = "/api/user", consumes = "application/json") 
public Future<User> addPet(@RequestBody User user) {
    // ...
}
```

:::

可以在类级别声明共享的`consumes`属性，当在方法级别重写时会覆盖类级别声明

#### 媒体类型 Accept

你可以根据请求的`Accept`来缩小请求映射，如下所示:

::: code-tabs#language

@tab kotlin

```kotlin
@GetMapping("/api/user/:id", produces = ["application/json"]) 
@ResponseBody
suspend fun findUser(@PathVariable id: String): User {
    // ...
}
```

@tab java

```java
@GetMapping(path = "/api/user/:id", produces = "application/json") 
@ResponseBody
public Future<User> findUser(@PathVariable String id) {
    // ...
}
```

:::

可以在类级别声明共享的`produces`属性，当在方法级别重写时会覆盖类级别声明

### 方法参数

下表描述了支持的控制器方法参数

| 方法参数       | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| RoutingContext | 当前的路由上下文对象                                         |
| HttpRequest    | 当前的请求对象                                               |
| HttpResponse   | 当前的响应对象                                               |
| @FileUpload    | 文件上传注解，指方法参数的注解应该绑定到web请求的文件上，与 `MultipartFileUpload` 组合使用，用于处理文件上传请求 |
| @FormAttribute | Form 表单参数注解，指方法参数应绑定到HTTP表单的属性上        |
| @PathVariable  | 路径参数注解，指方法参数应绑定到HTTP路径变量上，例如： 当前方法的路径绑定`RequestMapping("/api/user/:id")`，请求路径为`/api/user/1`， 那么指定的路径变量`id`的值为  `1` |
| @QueryParam    | 查询参数注解，指方法参数应绑定到HTTP查询参数上，例如：`/api/user?x1=xx&x2=x2` 中的 `x1=xx&x2=x2` |
| @RequestBody   | 请求主体参数注解，指方法参数的注解应该绑定到web请求的主体，请求的主体通过`HttpMessageConverter`来解析方法参数，具体取决于请求的内容类型。 |
| @RequestHeader | 请求头参数注解，指方法参数应绑定到HTTP请求头上               |

### 返回值

下表描述了支持的控制器方法返回值

| 返回值        | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| Future        | 所有注解方法的返回值都应该有`Future`对象包裹kotlin的协程方法除外，以下返回值表示的都是 `Future` 所包裹的类型。 |
| Buffer        | Vertx 内核所使用的缓冲区对象，可以直接作为方法的返回值结果，其结果将不进行任何解析处理，直接写入响应主体。 |
| @ResponseBody | 响应注解方法注解，指方法返回值应绑定到web响应体上。支持带定义在类级别，方法级别未定义则继承类级别。响应的主体通过`HttpMessageConverter`来解析方法返回值，具体取决于响应的内容类型，它仅允许渲染对象的结果值。 |

**Jackson JSON**

mirage 提供对 Jackson JSON库的支持，要将其与 `@ResponseBody`标识的控制器方法一起使用，它仅允许渲染对象的结果值。

### HttpMessageConverter

针对http请求主体我们定义了`HttpMessageConverter`的方式来解析内容，默认情况下提供基于`jackson`的实现`JacksonHttpMessageConverter`，支持解析`application/json`,`application/*+json`请求或响应类型的内容，亦或者你可以通过`MirageRestfulConfigurer`注册自定义的`HttpMessageConverter`

### 控制器增强

`@ControllerAdvice`用于增强`@Controller`控制器的功能，你可以使用它来声明异常处理器`@ExceptionHandler`，以及后续的相关拓展...

::: info RestControllerAdvice

`@RestControllerAdvice`是一个组合注释，它本身是元注释的，它本身用`@ControllerAdvice`和`@ResponseBody`进行元注释，以指示控制器增强的每个方法都继承了类型级别的`@ResponseBody`注释，因此，它直接写入响应主体。

:::

## JSR303参数校验

//  TODO

## 异常处理器

如果在请求路由映射期间发生异常或从请求处理程序（例如 `@Controller`）抛出异常，则`VertxRouterRequestMappingMappingRequestHandler`委托到`HandlerExceptionResolverComposite` 以解决异常并提供错误处理的结果。

以下说明了可用的`HandlerExceptionResolver`的实现

| 实现对象                            | 描述                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| `ExceptionHandlerExceptionResolver` | 通过调用声明`@ControllerAdvice` 注解类中，标识`@ExceptionHandler`注解的方法来解决异常。请查阅[ExceptionHandlerExceptionResolver](#exceptionhandlerexceptionresolver) |

### 异常解析器责任链

 您可以通过在 `MirageWebMvcConfigurer`配置中注册多个`HandlerExceptionResolver`来形成异常解析器链，系统默认包含`ExceptionHandlerExceptionResolver`。

### ExceptionHandlerExceptionResolver

[@ControllerAdvice](#控制器增强) 类可以具有 `@ExceptionHandler`处理来自控制器方法的异常的方法，如以下示例所示：

::: code-tabs#language

@tab kotlin

```kotlin
@RestControllerAdvice
class SampleExceptionHandler {

    @ExceptionHandler(IOException::class)
    fun handle(ex: IOException): Any {
        // TODO ...
    }
}
```

@tab java

```java
@RestControllerAdvice
public class SampleExceptionHandler {

    @ExceptionHandler(IOException.class)
    public Object handle(IOException ex) {
        // TODO ...
    }
}
```

:::

异常可以与正在传播的顶级异常（例如，直接 `IOException`抛出）或与包装器异常中的嵌套原因（例如，`IOException`包装在 中`IllegalStateException`）匹配。

对于匹配的异常类型，最好将目标异常声明为方法参数，如上面的示例所示。当多个异常方法匹配时，根异常匹配通常优于原因异常匹配。更具体地说，`ExceptionDepthComparator` 它根据抛出的异常类型的深度对异常进行排序。

或者，注释声明可以缩小要匹配的异常类型，如以下示例所示：

::: code-tabs#language

@tab kotlin

```kotlin
@ExceptionHandler(FileSystemException::class, RemoteException::class)
fun handle(ex: IOException): Any {
   // TODO ...
}
```

@tab java

```java
@ExceptionHandler({FileSystemException.class, RemoteException.class})
public Object handle(IOException ex) {
    // TODO ...
}
```

:::

### 方法参数

`@ExceptionHandler`方法支持以下参数：

| 方法参数            | 描述                 |
| ------------------- | -------------------- |
| RoutingContext      | 当前的路由上下文对象 |
| HttpRequest         | 当前的请求对象       |
| HttpResponse        | 当前的响应对象       |
| ？extends Throwable | 当前抛出的异常类型   |

### 返回值

参照：[注解式控制器返回值](#返回值)

## 跨域请求配置

// TODO

## 静态资源映射

针对静态资源访问，我们在 `MirageRestfulConfigurer` 中提供了注册处理器的方式完成，以下是一份简单的示例：

::: code-tabs#language

@tab kotlin

```kotlin
@Component
class DemoRestfulConfigurer : MirageRestfulConfigurer {

    override fun registerStaticResourceHandler(registry: StaticResourceHandlerRegistry) {
        registry.addRootHandler("static", *arrayOf("/*"))
    }
}
```

@tab java

```java
@Component
public class DemoRestfulConfigurer implements MirageRestfulConfigurer {

    @Override
    public void registerStaticResourceHandler(StaticResourceHandlerRegistry registry) {
        registry.addRootHandler("static", "/*");
    }
}
```

:::

以上的示例表示，将类资源下 `static`目录映射到 `/*` 请求下，更多的细节请自行查看。 

::: info

静态资源使用前缀路径匹配，示例：/static/* 以 /static/ 开头的路径的请求都将从目录 webroot 得到响应， 例如，如果请求路径为 static/css/styles.css，则静态服务将在目录 webroot/css/styles.css 中查找文件，您也可以自定义 webroot 为其他目录。

:::

## Restful配置

可以通过自定义配置来定义 restful 一些启动设置，以下是一个配置示例：

```yaml
mirage:
  restful:
    # http server 配置属性
    httpServerOptions:
      port: 8080
      compressionSupported: false
      compressionLevel: 6
      maxWebSocketFrameSize: 65536
    # Verticle 部署的配置属性
    deploymentOptions: 
      instances: 10
    # 请求体处理器配置属性
    bodyOptions: 
      handleFileUploads: true
    # 请求会话处理器配置属性
    sessionOptions: 
      sessionCookieName: 'mirage-restful.session'
```

以上只是Restful的部分配置，如果想要了解全部配置信息，请查看 `MirageRestfulConfigProperties` 对象
