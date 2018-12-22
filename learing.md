[Nodejs探秘：深入理解单线程实现高并发原理](http://imweb.io/topic/5b6cf97093759a0e51c917c8)

node 是单线程，但能有高并发的原因：使用主线程进行任务调度和返回，将进程池内的线程分配给每个事件，这样阻塞就转移到了其他线程了，主进程可以仍然进行其他任务调度。异步操作是由线程池完成。

[node 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501497361a4e77c055f5c4a8da2d5a1868df36ad1000)

[URL的说明  RFC 1738](http://www.rfc-editor.org/rfc/rfc1738.txt)

对 `url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash')` 字段进行解析

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181222110841572.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)



> protocol: 协议
>
> slashes：
>
> auth：
>
> host：
>
> port：
>
> hostname：
>
> hash：
>
> search：
>
> query：
>
> pathname：
>
> path：
>
> href：





路径合成函数：`path.join(路径1,路径2，路径3，...)`路径可填写任意个（两个以上）

`var filePath = path.join(workDir, 'pub', 'index.html','dfasf');`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181222113741752.png)



吃完饭回来写node 获取html的总结并学习html里面需要用到多个文件的时如何写 