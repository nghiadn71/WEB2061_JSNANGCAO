import { getBookCategory } from "../../api/book";
import { getCategory } from "../../api/category";

const BookCategory = {
    render: async (id) => {
        const response = await getBookCategory(id);
        const {data} = response;
        const response2 = await getCategory(id);
        const category = response2.data;
        return (
            `

          <div class="product">
            <h2 class="text-center mt-5 mb-3">${category.name}</h2>
            <div class="row row-cols-5">
            ${
                data.map((book) => (
                    `
                    <a class="text-decoration-none text-body" href="/book/${book.id}">
                    <div class="col">
                        <img class="w-100" src="${book.main_image}" width="200px" height="370px" alt="">
                        <p>${book.name}</p>
                        <span class="me-5 text-danger">${book.sale_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</span>
                        <span class="text-decoration-line-through ms-4 text-secondary">${book.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</span>
                    </div>
                </a>
                    `
                )).join('')
            }
                
            </div>
            `
        )
    }
}

export default BookCategory;