import { deletePost, getPost, updatePost } from "../api/post";
import reRender from "../helpers/reRender";
import Post from "./Post";

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
            <form>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" value="${data.title}">
                <p id="titleError" style="color: red;"></p>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Thumbnail</label>
                <img id="showThumbnail" src="${data.thumbnail}" width="80" alt="">
                <input type="text" class="form-control" id="thumbnail" value="${data.thumbnail}">
                <p id="thumbnailError" style="color: red;"></p>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Short desc</label>
                <input type="text" class="form-control" id="short_desc" value="${data.short_desc}">
                <p id="short_descError" style="color: red;"></p>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Desc</label>
                <input type="text" class="form-control" id="desc" value="${data.desc}">
                <p id="descError" style="color: red;"></p>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" value="${data.status}">
                <p id="statusError" style="color: red;"></p>
            </div>
            <button type="button" class="btn btn-primary" id="updateBtn">Update</button>
            </form>
            `
        );
    },
    afterRender: (id) => {
        const updateBtn = document.querySelector('#updateBtn');
        updateBtn.addEventListener('click', async () => {
            const title = document.querySelector('#title').value;
            const thumbnail = document.querySelector('#thumbnail').value;
            const short_desc = document.querySelector('#short_desc').value;
            const desc = document.querySelector('#desc').value;
            const status = document.querySelector('#status').value;

            const submitData = {
                title: title,
                thumbnail: thumbnail,
                short_desc: short_desc,
                desc: desc,
                status: status,
            }

            await updatePost(submitData, id);
            await reRender('#content', Post);
        });

        const thumbnailElement = document.querySelector('#thumbnail');
        thumbnailElement.addEventListener('input', () => {
            const thumbnailValue = thumbnailElement.value;
            const showThumbnail = document.querySelector('#showThumbnail');
            showThumbnail.src = thumbnailValue;
        });
    }
}

export default EditPost;