import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { getCategories } from "../../../api/category";
import { deleteCategory } from "../../../api/category";
import reRender from "../../../helpers/reRender";

const CategoryAdmin = {
    render: async () => {
      const response = await getCategories();
      const {data} = response;
        return (
            `
            ${HeaderAdmin.render()}
            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh mục sản phẩm</h4>
                  <a href="/add-form-category">
                    <button class="btn btn-info text-white"><i class="mdi mdi-book-plus"></i> Thêm danh mục</button>
                  </a>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên danh mục</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                      ${
                        data.map(category => (
                          `
                          <tr>
                          <td>${category.id}</td>
                          <td>${category.name}</td>
                          <td>
                            <a href="/edit-form-category/${category.id}">
                              <button class="btn btn-primary text-white">Sửa</button>
                            </a>
                              
                              <button class="btn btn-danger text-white"
                              data-id="${category.id}"
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
      const deleteBtns = document.querySelectorAll('#deleteBtns');
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const btnId = btn.dataset.id;
          await deleteCategory(btnId);
          await reRender('#content', CategoryAdmin);
        })
      })
      
    }
}

export default CategoryAdmin;