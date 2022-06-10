import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";
import { createCategory } from "../../../api/category";
import reRender from "../../../helpers/reRender";
import CategoryAdmin from "./CategoryAdmin";

const AddFormCategory = {
    render: () => {
        return (
            `
            ${HeaderAdmin.render()}
            
            <div class="content-wrapper">
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Thêm danh mục</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Tên danh mục</label>
                      <input class="form-control" placeholder="Tên danh mục" id="name">
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
             const submitData = {
                name: name,
             };
             await createCategory(submitData);
             await reRender('#content', CategoryAdmin)
        })
    }
}

export default AddFormCategory;