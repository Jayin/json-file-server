# json-file-server

对于前后端完全分离的项目来说，前端只会关心接口，通讯方式一般采用json。所以，理想的状态下就是前端不用直接等待后端完成接口再写逻辑代码，而是直接自己fake 一些数据。 参考过[json-server](https://github.com/typicode/json-server),能满足部分需求，然而在实际的上环境比较复杂,以下这2个需求是我迫切需要:

* 请求一些非RESTFUL API (GET /posts/1.json)
* URL有后缀 [add suffix in url #161]()
* 

