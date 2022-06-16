import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./pages/ListPost";
import AddPost from "./pages/addPost";
import EditPost from "./pages/editPost";
import router from "./helpers/router";

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();
    if (content.afterRender) {
        content.afterRender(id);
    }
}

router.on({
    '/': () =>  render(Post),
    '/add-post': () =>  render(AddPost),
    '/edit-post/:id': (data) =>  render(EditPost, data.data.id),
})
router.resolve();