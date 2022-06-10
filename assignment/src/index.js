import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/client/Home.js';
import BookDetail from './pages/client/BookDetail';
import CartDetail from './pages/client/CartDetail';
import HomeAdmin from './pages/admin/HomeAdmin';
import CategoryAdmin from './pages/admin/category/CategoryAdmin';
import ProductAdmin from './pages/admin/product/ProductAdmin';
import AddFormCategory from './pages/admin/category/AddFormCategory';
import AddFormProduct from './pages/admin/product/AddFormProduct';
import EditFormCategory from './pages/admin/category/EditFormCategory';
import EmptyHeader from './components/emptyHeader';
import EmptyFooter from './components/EmptyFooter';
import router from './helpers/router';

import 'bootstrap/dist/js/bootstrap.js';

const render = async (header,content,footer, id) => {
    document.querySelector('#header').innerHTML = await header.render(id);
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = footer.render();

    if (content.afterRender) {
        content.afterRender(id);
    }
}

router.on({
    '/': () => render(Header, Home, Footer),
    '/book/:id': (data) => render(Header, BookDetail, Footer, data.data.id),
    '/cart-detail': () => render(Header, CartDetail, Footer),
    '/admin': () => render(EmptyHeader, HomeAdmin, EmptyFooter),
    '/category-admin': () => render(EmptyHeader, CategoryAdmin, EmptyFooter),
    '/product-admin': () => render(EmptyHeader, ProductAdmin, EmptyFooter),
    '/add-form-category': () => render(EmptyHeader, AddFormCategory, EmptyFooter),
    '/edit-form-category/:id': (data) => render(EmptyHeader, EditFormCategory, EmptyFooter, data.data.id),
    '/add-form-product': () => render(EmptyHeader, AddFormProduct, EmptyFooter),
});
router.resolve();
    