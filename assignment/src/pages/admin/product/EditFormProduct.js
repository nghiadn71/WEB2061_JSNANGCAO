import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { getBook } from "../../../api/book";
import { getCategories } from "../../../api/category";
import { updateBook } from "../../../api/book";
import reRender from "../../../helpers/reRender";
import ProductAdmin from "./ProductAdmin";

const EditFormProduct = {
    render: async (id) => {
        let product = {
            name: '',
            main_image: '',
            price: '',
            sale_price: '',
            category_id: ''
        }
        const response = await getBook(id);
        const book = response.data;
        const response2 = await getCategories();
        const categories = response2.data;
        return (
            `
            ${HeaderAdmin.render()}

            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Sửa sản phẩm</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Tên sản phẩm</label>
                      <input type="text" class="form-control" placeholder="Tên sản phẩm" id="name" value="${book.name}">
                    </div>
                    <div class="form-group">
                    <div class="row">
                      <div class="col-6 offset-3">
                          <img src="${book.main_image}" class="img-thumbnail">
                      </div>
                  </div>
                      <label for="exampleInputName1">Hình ảnh</label>
                      <input type="text" class="form-control" placeholder="Hình ảnh" id="main_image" value="${book.main_image}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Giá gốc</label>
                      <input type="number" class="form-control" id="price" value="${book.price}">
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea1">Giá đã giảm</label>
                        <input type="number" class="form-control" id="sale_price" value="${book.sale_price}">
                      </div>
                      <div class="form-group">
                      <select class="form-select" aria-label="Default select example" id="category_id">
                      <option>Chọn danh mục</option>
                      ${
                        categories.map(category => (
                            `
                                <option ${category.id == book.category_id ? 'selected' : ''} value="${category.id}">${category.name}</option>
                            `
                        ))
                      }
                      
                      </select>
                      </div>
                    <button type="button" class="btn btn-primary me-2 text-white" id="btn">Update</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
        </div>
            ${FooterAdmin.render()}
            `
        )
    },

    afterRender: (id) => {
        const updateBtn = document.querySelector('#btn');
        updateBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const main_image = document.querySelector('#main_image').value;
            const price = document.querySelector('#price').value;
            const sale_price = document.querySelector('#sale_price').value;
            const category_id = document.querySelector('#category_id').value;

            const submitData = {
                name: name,
                main_image: main_image,
                price: price,
                sale_price: sale_price,
                category_id: category_id,
            };

            await updateBook(id, submitData);
            await reRender('#content', ProductAdmin);
        })
    }
}

export default EditFormProduct;