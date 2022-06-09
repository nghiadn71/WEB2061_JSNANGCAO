import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/client/Home.js';
import BookDetail from './pages/client/BookDetail';
import CartDetail from './pages/client/CartDetail';
import router from './helpers/router';

import 'bootstrap/dist/js/bootstrap.js';

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = await Header.render(id);
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    if (content.afterRender) {
        content.afterRender(id);
    }
}
router.on({
    '/': () => render(Home),
    'book/detail/:id': (data) => render(BookDetail, data.data.id),
    '/cart-detail': () => render(CartDetail),
});
router.resolve();
    