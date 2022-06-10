import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { getBooks } from "../../../api/book";
import reRender from "../../../helpers/reRender";
import { deleteBook } from "../../../api/book";

const ProductAdmin = {
    render: async () => {
      const response = await getBooks();
      const {data} = response;
        return (
            `
            ${HeaderAdmin.render()}
            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh sách sản phẩm</h4>
                  <a href="/add-form-product">
                    <button class="btn btn-info text-white"><i class="mdi mdi-database-plus"></i> Thêm sản phẩm</button>
                  </a>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên sản phẩm</th>
                          <th>Hình ảnh</th>
                          <th>Giá gốc</th>
                          <th>Giá giảm</th>
                          <th>ID danh mục</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                      ${
                        data.map(book => (
                          `
                          <tr>
                          <td>${book.id}</td>
                          <td>${book.name}</td>
                          <td>
                              <img style="width: 80px; height: 80px;" src="${book.main_image}" alt="">
                          </td>
                          <td>${book.price}₫</td>
                          <td>${book.sale_price}₫</td>
                          <td>${book.category_id}</td>
                          <td>
                            <a href="/edit-form-product/${book.id}">
                              <button class="btn btn-primary text-white">Sửa</button>
                            </a>
                              <button class="btn btn-danger text-white"
                              data-id="${book.id}" 
                              id="deleteBtns"
                              >Xóa
                              </button>
                          </td>
                        </tr>
                          `
                        )).join('')
                      }
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </div>
        <!-- content-wrapper ends -->
            ${FooterAdmin.render()}
            `
        )
    },

    afterRender: () => {
      const deteleBtns = document.querySelectorAll('#deleteBtns');
      deteleBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const btnId = btn.dataset.id;
          await deleteBook(btnId);
          await reRender('#content', ProductAdmin);
        })
      })
    }
}

export default ProductAdmin;