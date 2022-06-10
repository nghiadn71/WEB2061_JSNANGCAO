import HeaderAdmin from "../../../components/HeaderAdmin";
import FooterAdmin from "../../../components/FooterAdmin";

const AddFormProduct = {
    render: () => {
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
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Tên sản phẩm">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Hình ảnh</label>
                      <input type="file" class="form-control" id="exampleInputName1" placeholder="Hình ảnh">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Đơn giá</label>
                      <input type="number" class="form-control" id="exampleInputName1" value="0">
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea1">Mô tả</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputName1">Số lượng</label>
                        <input type="number" class="form-control" id="exampleInputName1" value="1">
                      </div>
                    <button type="submit" class="btn btn-primary me-2 text-white">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
        </div>
            ${FooterAdmin.render()}
            `
        )
    }
}

export default AddFormProduct;