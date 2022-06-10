import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { getCategories } from "../../../api/category";
import { createBook } from "../../../api/book";
import reRender from "../../../helpers/reRender";
import ProductAdmin from "./ProductAdmin";

const AddFormProduct = {
    render: async () => {
      const response = await getCategories();
      const {data} = response;
        return (
            `
            ${HeaderAdmin.render()}

            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Thêm sản phẩm</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Tên sản phẩm</label>
                      <input type="text" class="form-control" placeholder="Tên sản phẩm" id="name">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Hình ảnh</label>
                      <input type="text" class="form-control" placeholder="Hình ảnh" id="main_image">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Giá gốc</label>
                      <input type="number" class="form-control" id="price">
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea1">Giá đã giảm</label>
                        <input type="number" class="form-control" id="sale_price">
                      </div>
                      <div class="form-group">
                      <select class="form-select" aria-label="Default select example" id="category_id">
                      <option selected>Chọn danh mục</option>
                      ${
                        data.map(category => (
                          `
                          <option value="${category.id}">${category.name}</option>
                          `
                        ))
                      }
                      </select>
                      </div>
                    <button type="button" class="btn btn-primary me-2 text-white" id="btn">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
        </div>
            ${FooterAdmin.render()}
            `
        )
    },

    afterRender: () => {
      const submitBtn = document.querySelector('#btn');
      submitBtn.addEventListener('click', async () => {
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
          category_id: category_id

        };
        await createBook(submitData);
        await reRender('#content', ProductAdmin);
      });
    }
}

export default AddFormProduct;