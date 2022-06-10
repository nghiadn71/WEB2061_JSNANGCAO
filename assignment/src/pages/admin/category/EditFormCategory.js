import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { getCategory } from "../../../api/category";
import { updateCategory } from "../../../api/category";
import reRender from "../../../helpers/reRender";
import CategoryAdmin from "./CategoryAdmin";

const EditFormCategory = {
    render: async (id) => {
        let category = {
            name: ''
        }
        if (id) {
            const response = await getCategory(id);
            category = response.data;
        }
        return (
            `
            ${HeaderAdmin.render()}
            
            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Sửa danh mục</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Tên danh mục</label>
                      <input class="form-control" placeholder="Tên danh mục" id="name" value="${category.name}">
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
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
             const submitData = {
                name: name,
             };
             await updateCategory(id, submitData);
             await reRender('#content', CategoryAdmin)
        })
    }
}

export default EditFormCategory;