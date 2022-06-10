import Cart from "../../components/Cart";
import reRender from "../../helpers/reRender";

const CartDetail = {
    render: async () => {
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      let totalPrice = 0;
      cartItems.forEach(cartItem => {
        totalPrice += (cartItem.sale_price) * (cartItem.value);
      });
        return (
            `
            <div class="banner">
            <img class="w-100" src="../../images/banner-list-product.webp" alt="">
        </div>

        <div class="cart">
            <h2 class="fs-4 mt-3">GIỎ HÀNG</h2>

            <table class="table">
                <thead>
                  <tr>
                    <th class="text-center col-8" scope="col-3">Sản phẩm</th>
                    <th class="text-center col-1" scope="col-3">Đơn giá</th>
                    <th class="text-center col-3" scope="col-3">Số lượng</th>
                    <th class="text-center col-1" scope="col-3">Tổng giá</th>
                  </tr>
                </thead>
                <tbody>
                ${
                  cartItems.map(item => (
                    
                    `
                    <tr>
                    <td>
                        <div class="row">
                            <div class="col-2">
                                <img class="w-100" src="${item.main_image}" alt="">
                            </div>
                            <div class="col-9">
                                <p class="mt-4 fw-bold fs-5 text-danger">${item.name}</p>
                                <p type="button" class="text-decoration-none text-danger"
                                data-id="${item.id}"
                                id="delete-cart-btns"
                                style="max-width: 30px"
                                >Xóa
                                </p>
                            </div>
                        </div>
                    </td>
                    <td><p class="mt-4 fs-5 fw-bold">${item.sale_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</p></td>
                        <td>
                        <div class="d-flex mb-4" style="margin-top: 30px; margin-left: 57px;">
                            <button class="btn btn-outline-danger border ps-3 pe-3 pt-1 pb-1"><i class="bi bi-dash-lg" id="reduce" data-id="${item.id}"></i></button>
                            <!-- <input class="ps-3 pe-3 pt-1 pb-1" type="button" value=""> -->
                            <input class="w-25 text-center ms-2 me-2 ps-3 pe-2" type="number" id="quantity" name="quantity" value="${item.value}">
                            <button class="btn btn-outline-danger border ps-3 pe-3 pt-1 pb-1"><i class="bi bi-plus-lg" id="increase" data-id="${item.id}"></i></button>
                        </div>
                      </td>
                      <td><p class="mt-4 fs-5 fw-bold">${((item.sale_price) * (item.value)).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p></td>
                  </tr>
                    `
                  )).join('')
                }
                  
                </tbody>
              </table>
              <div class="text-end">
                <span class="fs-5">Tổng: </span><span class="fs-3 fw-bold ms-3">${totalPrice = totalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                <br>
                <button class="btn btn-danger mt-1">THANH TOÁN</button>
              </div>
        </div>
            `
        )
    },

    afterRender: () => {
      
      const btnReduce = document.querySelector('#reduce');
      btnReduce.addEventListener('click', () => {
          let result = document.querySelector('#quantity');
          let qty = result.value;
          if(!isNaN(qty)){
            result.value--;
            return false;
          }
      });

        const btnIncrease = document.querySelector('#increase');
        btnIncrease.addEventListener('click', () => {
            let result = document.querySelector('#quantity');
            let qty = result.value;
            if(!isNaN(qty)) {
              result.value++;
              return false;
            }
        });

        const deleteCartBtns = document.querySelectorAll('#delete-cart-btns');
        deleteCartBtns.forEach((deleteCartBtn) => {
          deleteCartBtn.addEventListener('click', () => {
            const itemId = deleteCartBtn.dataset.id;
            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            const newCartItems = cartItems.filter((item) => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(newCartItems));
            reRender('#content', CartDetail);
            reRender('#cart', Cart);
          })
        })

        // deleteCartBtns.addEventListener('click', () => {
        //   const itemId = deleteCartBtns.dataset.id;
        //   const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        //   const newCartItems = cartItems.filter((item) => item.id !== itemId);
        //   localStorage.setItem('cart', JSON.stringify(newCartItems));
        //   reRender('#content', CartDetail);
        //   reRender('#cart', Cart);
        // })
    }
}

export default CartDetail;