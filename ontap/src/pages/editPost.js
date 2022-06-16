import { getPost, updatePost } from "../api/post";
import reRender from "../helpers/reRender";
import Post from "./ListPost";

const EditPost = {
    render: async (id) => {
        let post = {
            title: '',
            thumbnail: '',
            short_desc: '',
            desc: '',
            status: '',
        }
        const response = await getPost(id);
        const {data} = response;
        return (
            `
            <form style="max-width: 300px;">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" value="${data.title}">
                <p id="titleerr"></p>
            </div>
            <div class="mb-3">
            <img src="${data.thumbnail}" id="showThumbnail" width="90"/>
                <label for="exampleInputPassword1" class="form-label">Thumbnail</label>
                <input type="text" class="form-control" id="thumbnail" value="${data.thumbnail}">
                <p id="thumbnailerr"></p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Short desc</label>
                <input type="text" class="form-control" id="short_desc" value="${data.short_desc}">
                <p id="shortdescerr"></p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Desc</label>
                <input type="text" class="form-control" id="desc" value="${data.desc}">
                <p id="descerr"></p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" value="${data.status}">
                <p id="statuserr"></p>
            </div>
            <button type="button" class="btn btn-primary" id="updateBtn">Update</button>
        </form>
            `
        )
    },

    afterRender: (id) => {
        const updateBtn = document.querySelector('#updateBtn');
        updateBtn.addEventListener('click', async () => {
            const title = document.querySelector('#title').value;
            const thumbnail = document.querySelector('#thumbnail').value;
            const short_desc = document.querySelector('#short_desc').value;
            const desc = document.querySelector('#desc').value;
            const status = document.querySelector('#status').value;

            const titleerr = document.querySelector('#titleerr');
            const thumbnailerr = document.querySelector('#thumbnailerr');
            const shortdescerr = document.querySelector('#shortdescerr');
            const descerr = document.querySelector('#descerr');
            const statuserr = document.querySelector('#statuserr');

            if (title == "") {
                titleerr.innerHTML = "Không được bỏ trống title";
            } else {
                titleerr.innerHTML = "";
            }
            if (thumbnail == "") {
                thumbnailerr.innerHTML = "Không được để trống thumbnail";
            } else {
                thumbnailerr.innerHTML = "";
            }
            if (short_desc == "") {
                shortdescerr.innerHTML = "Không được để trống short desc";
            } else {
                shortdescerr.innerHTML = "";
            }
            if (desc == "") {
                descerr.innerHTML = "Không được để trống desc";
            } else {
                descerr.innerHTML = "";
            }
            if (status == "") {
                statuserr.innerHTML = "Không được để trống status";
            } else {
                statuserr.innerHTML = "";
            }


            if (title == "" || thumbnail == "" || short_desc == "" || desc == "" || status == "") {
                return false
            } else {

                const submitData = {
                    title: title,
                    thumbnail: thumbnail,
                    short_desc: short_desc,
                    desc: desc,
                    status: status,
                }
                alert('Sửa thành công');
                await updatePost(id, submitData);
                await reRender('#content', Post)
            }

            
        })

        const thumbnailElement = document.querySelector('#thumbnail');
        thumbnailElement.addEventListener('input', () => {
            const thumbnailValue = thumbnailElement.value;
            const imgElement = document.querySelector('#showThumbnail');
            imgElement.src = thumbnailValue;
        })
    }
}

export default EditPost;