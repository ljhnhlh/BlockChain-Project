[Nodejs探秘：深入理解单线程实现高并发原理](http://imweb.io/topic/5b6cf97093759a0e51c917c8)

node 是单线程，但能有高并发的原因：使用主线程进行任务调度和返回，将进程池内的线程分配给每个事件，这样阻塞就转移到了其他线程了，主进程可以仍然进行其他任务调度。异步操作是由线程池完成。

[node 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501497361a4e77c055f5c4a8da2d5a1868df36ad1000)
