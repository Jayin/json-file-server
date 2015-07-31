# json-file-server

对于前后端完全分离的项目来说，前端只会关心接口，通讯方式一般采用json。所以，理想的状态下就是前端不用直接等待后端完成接口再写逻辑代码，而是直接自己fake一些数据。 

参考过[json-server](https://github.com/typicode/json-server),能满足部分需求，然而在实际的上环境比较复杂,以下这2个需求是我迫切需要:

* 请求一些非RESTFUL API (GET /posts/1.json)
* URL有后缀 [add suffix in url #161]()
* fake的数据较大时，比较查看`db.json` 难以看出其数据结构

个人感觉最理想的情况下是，自己根据URL，构成文件夹，文件目录,编写所需的返回数据

### 编写mock file(草案)

URL: `[Http_Method] /path/to/Resource[.Http_Method|''][.LangPrefix|''][.ReturnType][?QueryString|'']`

对应文件目录结构:
```
--...
--path
  --blabla
  --to
    --Resource[.suffix|''][.Http_Method|''][?QueryString|'']
```

* Http_Method: Http方法 GET POST PUT DELETE PATCH .....
* suffix 后缀
  * LangPrefix: 语言占位符 e.g: `php`, `do`, `aspx`
  * ReturnType: 返回类型: e.g: `json` & `xml` ,
* QueryString: QueryString，参数顺序问题值得商讨 

e.g:

url: 

Mock File Name|对应请求方法
-----|-----
`/posts/1.php.get?from=index` | `GET /posts/1.php??from=index`
`/posts.post.json` | `POST /posts.json` 
`/posts.get` | `GET /posts`
`/post.php.get`| `GET /post.php`
`/posts.post`| `POST /posts`


# License 

MIT @[Jayin Ton](http://www.jayinton.com)
