// 用来封装请求
import service from './index'


export default {

  // 1、获取首页数据  get
  recommend() {
    return service.get(`/recommend`)
  },

  // 2、搜索  post
  search(value) {
    // 参数: value: 搜索关键词
    return service.post(`/search`, { value })
  },

  // 3、分类查询  get 
  catagorical(id) {
    // id:默认分类的id
    return service.get(`/classification?mallSubId=${id}`)
  },

  // 4、查询获取购物车数据  get
  getCard() {
    return service.post(`/getCard`)
  },

  // 5、购物车加减商品  post
  editCart({ count, id, mallPrice }) {
    return service.post(`/editCart`, {
      // 数量
      count,
      // 商品的id
      id,
      // 价格
      mallPrice
    })
  },

  // 6、购物车商品删除 post 
  deleteShop(idArr) {
    // id: 商品id(数组)
    return service.post(`/deleteShop`, idArr)
  },

  // 7、购物车支付页面  post
  order({ address, tel, orderId, totalPrice, idDirect, count }) {
    return service.post(`/order`, {
      // 收货地址
      address,
      // 电话
      tel,
      // 所有商品的id(数组)
      orderId,
      // 总价
      totalPrice,
      // 用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
      idDirect,
      // 数量
      count
    })
  },

  // 8、单个商品详情  get
  goods(id) {
    // id:商品的id
    return service.get(`/goods/one?id=${id}`)
  },

  // 9、收藏单个商品  post
  collection(goods) {
    // goods: 商品的详情信息
    return service.post(`/collection`, goods)
  },

  // 10、取消收藏  post
  cancelCollection(id) {
    // id:商品的cid
    return service.post(`/cancelCollection`, { id })
  },

  // 11、查询商品是否已收藏  post
  isCollection(id) {
    // id:商品的id
    return service.post(`/isCollection`, { id })
  },

  // 12、加入购物车 post
  addShop(id) {
    // id:商品的id
    return service.post(`/addShop`, id)
  },

  // 13、退出登录  post
  loginOut() {
    return service.post(`/loginOut`, {})
  },

  // 14、获取用户信息 post
  queryUser() {
    return service.post(`/queryUser`, {})
  },

  // 15、修改保存用户信息  post
  saveUser({ gender, year, month, day, id, nickname, email }) {
    return service.post(`/saveUser`, {
      // 性别
      gender,
      // 年
      year,
      // 月
      month,
      // 日
      day,
      // 用户id
      id,
      // 昵称
      nickname,
      email
    })
  },

  // 16、查询用户订单数量  get
  orderNum() {
    return service.get(`/myOrder/orderNum`)
  },

  // 17、商品评论  post
  goodsOne({ id, rate, content, anonymous, _id, order_id, image }) {
    return service.post(`/goodsOne/comment`, {
      // 商品cid
      id,
      // 分数
      rate,
      // 内容
      content,
      // 是否匿名
      anonymous,
      // 商品的_id
      _id,
      // 商品的order_id
      order_id,
      image
    })
  },

  // 18、获取登录注册默认验证码  get
  verify() {
    return service.get(`/verify`)
  },

  // 19、查询用户收货地址  get
  getAddress() {
    return service.get(`/getAddress`)
  },

  // 20、查询默认收货地址  get
  getDefaultAddress() {
    return service.get(`/getDefaultAddress`)
  },

  // 21、设置默认收货地址  post
  setDefaultAddress(id) {
    // id: 地址id
    return service.post(`/setDefaultAddress`, id)
  },

  // 22、增加收货地址  post
  address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode}) {
    return service.post(`/address`, {
      // 用户名
      name,
      // 电话
      tel,
      // 省+市+区+详细地址
      address,
      // 是否默认
      isDefault,
      // 省
      province,
      // 市
      city,
      // 区
      county,
      // 详细地址
      addressDetail,
      // 地区代码
      areaCode,
    })
  },

  // 23、删除地址  post
  deleteAddress(id) {
    // id:地址_id
    return service.post(`/deleteAddress`, id)
  },

  // 24、查询我的收藏  get
  collectionList() {
    return service.get(`/collection/list`)
  },

  // 25、注册  post
  register({ nickname, password, verify }) {
    return service.post(`/register`, {
      // 用户名
      nickname,
      // 密码
      password,
      // 验证码
      verify
    })
  },

  // 26、登录  post
  login({ nickname, password, verify }) {
    return service.post(`/login`, {
      // 用户名
      nickname,
      // 密码
      password,
      // 验证码
      verify
    })
  },

  // 27、订单查询  get
  getMyOrder() {
    return service.get(`/myOrder`)
  },

  // 28、查询已评价  get
  alreadyEvaluated() {
    return service.get(`/alreadyEvaluated`)
  },

  // 29、查询未评价  get
  tobeEvaluated() {
    return service.get(`/tobeEvaluated`)
  },

  // 30、查询单条评论  post
  evaluateOne({ id, _id }) {
    return service.post(`/evaluateOne`, {
      // 商品的id
      id,
      // 数据库的那条id
      _id
    })
  }
}