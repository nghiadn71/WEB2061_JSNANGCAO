import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import router from './helpers/router';

import 'bootstrap/dist/js/bootstrap.js';

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    if (content.afterRender) {
        content.afterRender(id);
    }
}
router.on({
    '/': () => render(Home),
});
router.resolve();
    