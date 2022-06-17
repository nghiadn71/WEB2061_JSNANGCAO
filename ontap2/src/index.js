import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import router from './helpers/router';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    if (content.afterRender) {
        content.afterRender(id);
    }
}

router.on({
    '/': () => render(Post),
    '/add-post': () => render(AddPost),
    '/edit-post/:id': (data) => render(EditPost, data.data.id),
});
router.resolve();