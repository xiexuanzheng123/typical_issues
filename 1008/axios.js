/**
 * Axios是一个基于Promise的HTTP库，可以用于浏览器和node中
 * 从浏览器中创建XMLHTTPRequest
 * 从node中创建HTTP请求
 * 支持PromiseApi
 * 拦截请求和响应
 * 转换请求数据和响应数据
 * 取消请求
 * 自动转换JSON数据
 * 客户端支持防御XSRF
 * 执行多个并发
 * axios.all([getUserAccount(), getUserPermissions()]).then(axios.spread(function(acct, perms){}));
 * 
 * axios Api
 * 可以向axios传递相关配置来创建请求
 * axios(config)发送post请求
 * axios({
 *     method: 'post',
 *     url: 'user/123',
 *     data: {
 *      firstName: 'fred',
 *      lastName: 'File'
 *  }
 * });
 * 
 * 不写method时默认为get
 * 
 * 支持的请求别名
 * axios.request(config)
 * axios.get(url[,config])
 * axios.post(url[,data[,config]])
 * axios.delete(url[,config])
 * axios.head(url[,config])
 * axios.put(url[,data[,config]])
 * axios.patch(url[,data[,config]])
 * 
 * 并发
 * axios.all(iterator)
 * axios.spread(callback)
 * 
 * 创建实例
 * axios.create([config])
 * var instance = axios.create({
 *   baseURL: 'https://some-domain.com/api/',
 *   timeout: 1000,
 *   headers: {'X-Custom-Header': 'foobar'}
 * })
 * 
 * baseURL自动加在url前面
 * transformRequest允许向服务器发送前，修改请求数据
 * transformResponse在传递给then/catch前，允许修改响应数据
 * timeout如果请求花费超过了timeout，请求将中断
 * withCredentials默认false，表示跨域请求时是否需要使用凭证
 * adapter允许自定义处理请求，以使测试更轻松，返回一个 promise 并应用一个有效的响应
 * `auth` 表示应该使用 HTTP 基础验证，并提供凭据
 * auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  }, 
  `onUploadProgress` 允许为上传处理进度事件
  `onDownloadProgress` 允许为下载处理进度事件
  `maxContentLength` 定义允许的响应内容的最大尺寸
 *`validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
   如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 
   否则，promise 将被 rejecte
 * validateStatus: function(status) {
 *  return status >= 200 && status < 300
 * }
 * maxRedirects定义在node中follow的最大重定向数目
 * HTTPAgent在node中用于定义在执行http时使用自定义代理，
 * Proxy定义代理服务器的主机名称和端口
 * 
 * 全局的axios默认值
 * axios.defaults.baseURL
 * axios.defaults.headers.common['Authorization']
 * axios.defaults.headers.post['Content-Type']
 * 
 * 自定义实例默认值
 * var instance = axios.create({
 *  baseURL: 'http://ss.com'
 * })
 * instance.defaultes.headers.common['Authorization']
 * 
 * 拦截器
 * 在请求或响应被then或catch处理前拦截他们
 * axios.interceptors.request.use(function(config) {
 *  return config;
 * }, function(error) {
 *  return Promise.reject(error)
 * })
 * 移除拦截器
  axios.interceptors.request.eject(instance)
 * */