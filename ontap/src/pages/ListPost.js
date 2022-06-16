import { getPosts } from "../api/post";
import { deletePost } from "../api/post";
import reRender from "../helpers/reRender";

const Post = {
    render: async () => {
        const response = await getPosts();
        const {data} = response;
        return (
            `
            <a href="/add-post" class="btn btn-primary">Them bai viet</a>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Short desc</th>
                <th scope="col">Desc</th>
                <th scope="col">Status</th>
                <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
            ${
                data.map(post => (
                    `
                    <tr>
                        <th scope="row">${post.id}</th>
                        <td>${post.title}</td>
                        <td>
                        <img src="${post.thumbnail}" width="50" />
                        
                        </td>
                        <td>${post.short_desc}</td>
                        <td>${post.desc}</td>
                        <td>${post.status}</td>
                        <td>
                            <a href="/edit-post/${post.id}">
                                <button class="btn btn-info" type="button">Sua</button>
                            </a>
                            <button class="btn btn-danger" type="button" data-id="${post.id}" id="deleteBtns">Xóa</button>
                        </td>
                    </tr>
                    `
                )).join('')
            }
                
            </tbody>
            </table>
            `
        )
    },

    afterRender: () => {
        const deleteBtns = document.querySelectorAll('#deleteBtns');
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', async () => {
                confirm('Bạn có muốn xóa');
                const btnId = btn.dataset.id;
                await deletePost(btnId);
                await reRender('#content', Post);
            })
        })
    }


}

export default Post;