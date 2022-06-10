import { getCategories } from "../api/category";
import Cart from "./Cart";

const Header = {
    render: async () => {
        const response = await getCategories();
        const {data} = response;

        return (
            `
        <header>
        <nav class="bg-light position-relative">
            <div class="header d-flex">
                <form class="d-flex align-self-center ms-4" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn border-danger" type="submit"><i class="bi bi-search text-danger"></i></button>
                </form>
                <a href="#"><img class="pt-4 pb-4" style="margin-left: 350px;" src="../../images/logo.webp" alt=""></a>
                <div class="icon align-self-center position-absolute end-0 me-4">
                    <a class="login text-dark text-decoration-none me-3" href="#"><i class="bi bi-box-arrow-in-right"> Đăng nhập</i></a>
                    <a class="register text-dark text-decoration-none me-3" href="#"><i class="bi bi-person-plus-fill"> Đăng ký</i></a>
                    <a class="cart text-dark text-decoration-none" href="/cart-detail" id="cart">${Cart.render()}</a>
                    
                </div>
            </div>
        </nav>
    </header>
    <div class="dropdown mt-3 mb-3">
        <button class="btn btn-secondary dropdown-toggle btn-danger" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-border-width"></i> Danh mục sản phẩm
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="/">Home</a></li>
        ${
            data.map((category) => (
                `
                <li><a class="dropdown-item" href="/book-category/${category.id}">${category.name}</a></li>
                `
            )).join('')
        }
        </ul>
    </div>
        `
        )
    }
}

export default Header;