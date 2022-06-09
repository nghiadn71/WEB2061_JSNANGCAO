import { getBook } from "../../api/book";
import reRender from "../../helpers/reRender";
import Cart from "./CartDetail";

const BookDetail = {
    render: async (id) => {
    const response = await getBook(id);
    const {data} = response;

        return (
            `
            <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <img class="w-100 mb-3" src="${data.main_image}" alt="">
                <img class="w-100 mb-3" src="${data.main_image}" alt="">
                <img class="w-100 mb-3" src="${data.main_image}" alt="">
              </div>
              <div class="col-9">
                <img class="w-100" src="${data.main_image}" alt="">
              </div>
            </div>
            
          </div>
          <div class="col-7">
            <h3 class="mb-4">${data.name}</h3>
            <div class="d-flex border-top border-bottom pt-2 pb-2">
              <span class="fs-4 me-4 text-danger">${data.sale_price}</span>
              <span class="fs-4 text-decoration-line-through text-secondary">${data.price}</span>
            </div>
            <div class="row mt-4">
              <div class="col me-5">
                <h5>Thông số</h5>
                <p>Có dây giày</p>
                <p>Thân giày bằng vải dệt với các mảng da lộn may phủ ngoài</p>
                <p>Lớp lót bằng vải dệt</p>
                <p>Đế giữa bằng nhựa EVA</p>
                <p>Đế ngoài bằng cao su</p>
              </div>
              <div class="col ms-4">
                <h5 class="mb-4">Số lượng</h5>
                <div class="d-flex mb-4">
                  <button class="btn btn-outline-danger border ps-3 pe-3 pt-1 pb-1" id="reduce"><i class="bi bi-dash-lg"></i></button>
                  <!-- <input class="ps-3 pe-3 pt-1 pb-1" type="button" value=""> -->
                  <input class="w-25 text-center ms-2 me-2" type="number" id="cartValue" value="1">
                  <button class="btn btn-outline-danger border ps-3 pe-3 pt-1 pb-1" id="increase"><i class="bi bi-plus-lg"></i></button>
                </div>
                <a href="/cart-detail"><button class="btn btn-danger mb-2"
                data-id="${data.id}"
                data-main_image="${data.main_image}"
                data-name="${data.name}"
                data-price="${data.price}"
                id="btn-add-cart"
                >THÊM VÀO GIỎ HÀNG
                </button></a>
                <br>
                <button class="btn btn-danger">MUA NGAY</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img class="w-100 mt-5 mb-5" src="../../images/banner-p1.jpg" alt="">
        </div>
        <div class="comment border">
          <h2 class="bg-danger p-2 fs-5 text-white">BÌNH LUẬN</h2>
          <div class="list-comment ps-3 pe-5">
            <div class="row">
              <h3 class="fs-5">Nghĩa</h3>
              <p class="mb-0">Sản phẩm tốt!!</p>
              <p class="text-primary">Trả lời</p>
            </div>
            <div class="row">
              <h3 class="fs-5">Thảo</h3>
              <p class="mb-0">Sản phẩm tốt!!</p>
              <p class="text-primary">Trả lời</p>
            </div>
            <div class="row">
              <h3 class="fs-5">Mai</h3>
              <p class="mb-0">Sản phẩm tốt!!</p>
              <p class="text-primary">Trả lời</p>
            </div>

            <div class="input-group mb-3 ms-3 me-3">
              <input type="text" class="form-control w-25" placeholder="Viết bình luận..." aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-danger" type="button" id="button-addon2">Đăng</button>
            </div>
          </div>

        </div>

        <div class="">
          <h2 class="text-bold fs-1 text-center mt-4 mb-3">Sản phẩm cùng loại</h2>
          <div class="row">
            <div class="col">
              <img class="w-100" src="../../images/product1.jpg" alt="">
              <p>Giày retropy f2</p>
              <span class="me-5 text-danger">2.490.000₫</span>
              <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
            </div>
            <div class="col">
              <img class="w-100" src="../../images/product1.jpg" alt="">
              <p>Giày retropy f2</p>
              <span class="me-5 text-danger">2.490.000₫</span>
              <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
            </div>
            <div class="col">
              <img class="w-100" src="../../images/product1.jpg" alt="">
              <p>Giày retropy f2</p>
              <span class="me-5 text-danger">2.490.000₫</span>
              <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
            </div>
            <div class="col">
              <img class="w-100" src="../../images/product1.jpg" alt="">
              <p>Giày retropy f2</p>
              <span class="me-5 text-danger">2.490.000₫</span>
              <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
            </div>
            <div class="col">
              <img class="w-100" src="../../images/product1.jpg" alt="">
              <p>Giày retropy f2</p>
              <span class="me-5 text-danger">2.490.000₫</span>
              <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
            </div>
          </div>
        </div>
            `
        )
    },

    afterRender: () => {
        const btnReduce = document.querySelector('#reduce');
        btnReduce.addEventListener('click', () => {
            let result = document.querySelector('#cartValue');
            let qty = result.value;
            if(!isNaN(qty)){
              result.value--;
              return false;
            }
        });

        const btnIncrease = document.querySelector('#increase');
        btnIncrease.addEventListener('click', () => {
            let result = document.querySelector('#cartValue');
            let qty = result.value;
            if(!isNaN(qty)) {
              result.value++;
              return false;
            }
        })

        const btnAddCart = document.querySelector('#btn-add-cart');
        btnAddCart.addEventListener('click', () => {
          const item = {
            id: btnAddCart.dataset.id,
            name: btnAddCart.dataset.name,
            main_image: btnAddCart.dataset.main_image,
            price: btnAddCart.dataset.price,
            value: +document.querySelector('#cartValue').value || 1
          };
  
          const cartItemsString = localStorage.getItem('cart');
          const cartItems = JSON.parse(cartItemsString || '[]');
  
          if(!cartItems.length) {
            cartItems.push(item);
          } else {
            const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
            if (existItem) {
              existItem.value += item.value;
            } else {
              cartItems.push(item);
            }
          }
          localStorage.setItem('cart', JSON.stringify(cartItems));

          reRender('#cart', Cart)
        });
    }
      
}

export default BookDetail;