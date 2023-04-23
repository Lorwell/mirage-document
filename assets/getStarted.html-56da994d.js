import{_ as t,W as r,X as e,a1 as a}from"./framework-c7bcd797.js";const n={},o=a('<h2 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h2><h3 id="为什么需要异步" tabindex="-1"><a class="header-anchor" href="#为什么需要异步" aria-hidden="true">#</a> 为什么需要异步？</h3><p>首先我们将一台服务器看成是一个工厂，其中有固定数量的车间（<strong>cpu的核心</strong>），还有用于长期保存和短期保存作物的仓库（<strong>内存/硬盘</strong>）。在这个工厂有很多的生产线（<strong>进程</strong>），远远的超过工厂车间的数量。为了这些生产线可以最大化的利用这些车间进行生产操作，于是诞生了调度系统（<strong>操作系统</strong>），每个生产线有很多的工人（<strong>线程</strong>），他们协同完成一个任务。生产线上的每个工人都需要等待前面的工序完成后才能继续进行下一个工序，工人在等待状态时调度系统会将他的状态保存，恢复另外一个可以工作的工人的状态，让他进行工作（<strong>上下文切换</strong>）。</p><p>以上是同步编程模型对应的逻辑，那么在以上的工厂中有以下几个操作是非常昂贵的。</p><ol><li>工厂创建一个新的工人</li><li>工人进入等待状态调度系统调度工人的状态切换时</li></ol><p>这些原因驱使我们<strong>尽可能避免创建太多的线程，尽可能的避免操作系统发生上下文切换</strong>，而异步编程的目的就是<strong>消除阻塞，极大减少系统发生上下文切换</strong>。</p><p>而异步方式生产则是另外一种处理方式，生产线上的每个工人可以同时进行各自的工序，甚至可以并行生产多个产品。当某个工序完成后，它会通知下一个工人开始进行下一个工序，这样整个生产过程就不存在等待状态的工人，那么这个工厂的工人数量基本上是固定的，也不需要发生上下文切换。</p><h3 id="怎么使用异步编程" tabindex="-1"><a class="header-anchor" href="#怎么使用异步编程" aria-hidden="true">#</a> 怎么使用异步编程</h3>',8),s=[o];function d(i,c){return r(),e("div",null,s)}const g=t(n,[["render",d],["__file","getStarted.html.vue"]]);export{g as default};
