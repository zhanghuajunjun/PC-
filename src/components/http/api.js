// 用来封装请求
import service from './index'


export default {
  // 1、首页数据
  home() {
    return service.get(`/goods/home`)
  },
  // 2、为你推荐
  recommend() {
    return service.get(`/goods/recommend`)
  },
  // 3、所有商品
  allGoods(
    // 请求页数(必填)
    page,
    // 请求条数(必填)
    size,
    // 排序方式 1为升序 -1为降序
    sort,
    // 价格区间 从多少开始
    priceGt,
    // 价格区间 到哪结束
    priceLte) {
    return service.get(`/goods/allGoods?page=${page}&size=${size}sort=${sort}priceGt=${priceGt}priceLte=${priceLte}`)
  },
  // 4、搜索商品
  search(
    // 关键字
    keyword) {
    return service.get(`/goods/search?keyword=${keyword}`)
  },
  // 5、商品详情
  detail(
    // 商品id
    productId) {
    return service.get(`/goods/search?productId=${productId}`)
  },
  // 6、登录
  login({ username, password }) {
    return service.post(`/users/login`, {
      username,
      password
    })
  },
  // 7、注册
  register({ username, password }) {
    return service.post(`/users/register`, {
      username,
      password
    })
  },
  // 8、加入购物车
  addCart(productId) {
    return service.post(`/goods/addCart`,
      {
        // 商品id
        productId
      }
    )
  },
  // 9、查询购物车
  getCarts() {
    return service.get(`/goods/getCarts`)
  },
  // 10、删除购物车的商品
  delCart(productId) {
    return service.post(`/goods/delCart`,
      {
        // 商品_id
        productId
      }
    )
  },
  // 11、修改购物车数量
  editCart({ productId, count }) {
    return service.post(`/goods/editCart`,
      {
        // 商品_id
        productId,
        // 数量
        count
      }
    )
  },
  // 12、获取全部收获地址
  list() {
    return service.get(`/address/list`)
  },
  // 13、添加收获地址
  addAddress({ username, phone, address, isDefault }) {
    return service.post(`/address/addAddress`,
      {
        // 用户名
        username,
        // 电话
        phone,
        // 地址
        address,
        // 是否为默认地址
        isDefault
      }
    )
  },
  // 14、设置默认地址
  setDefault({ addressId }) {
    return service.post(`/address/setDefault`,
      {
        // 地址的_id
        addressId
      }
    )
  },
  // 15、修改地址
  editAddress({ addressId, username, phone, address, isDefault }) {
    return service.post(`/address/editAddress`,
      {
        // 地址的_id
        addressId,
        // 用户名
        username,
        // 电话
        phone,
        // 地址
        address,
        // 是否为默认地址
        isDefault
      }
    )
  },
  // 16、删除地址
  deleteAddress(addressId) {
    return service.post(`/address/deleteAddress`,
      {
        // 地址的_id
        addressId
      }
    )
  },
}