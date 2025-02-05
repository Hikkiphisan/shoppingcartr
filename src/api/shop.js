export default {
    // Hàm lấy danh sách sản phẩm, gọi callback cb sau 1 khoảng thời gian
    getProducts: (cb, timeout) =>
        setTimeout(() => cb(_products), timeout || TIMEOUT),

    // Hàm mô phỏng việc mua sản phẩm, chỉ gọi callback cb sau một khoảng thời gian
    buyProducts: (payload, cb, timeout) =>
        setTimeout(() => cb(), timeout || TIMEOUT)
}