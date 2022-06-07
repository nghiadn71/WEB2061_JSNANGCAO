const Home = {
    render: () => 
    `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/slide1.webp" height="480" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/slide2.webp" height="480" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/slide3.webp" height="480" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="product">
            <h2 class="text-center mt-5 mb-3">SÁCH MỚI</h2>
            <div class="row">
              <div class="col">
                <img class="w-100" src="images/product1.jpg" width="200px" height="370px" alt="">
                <p>Chú thuật hồi chiến - Tập 3</p>
                <span class="me-5 text-danger">2.490.000₫</span>
                <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
              </div>
              <div class="col">
                <img class="w-100" src="images/product1.jpg" width="200px" height="370px" alt="">
                <p>Chú thuật hồi chiến - Tập 3</p>
                <span class="me-5 text-danger">2.490.000₫</span>
                <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
              </div>
              <div class="col">
                <img class="w-100" src="images/product1.jpg" width="200px" height="370px" alt="">
                <p>Chú thuật hồi chiến - Tập 3</p>
                <span class="me-5 text-danger">2.490.000₫</span>
                <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
              </div>
              <div class="col">
                <img class="w-100" src="images/product1.jpg" width="200px" height="370px" alt="">
                <p>Chú thuật hồi chiến - Tập 3</p>
                <span class="me-5 text-danger">2.490.000₫</span>
                <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
              </div>
              <div class="col">
                <img class="w-100" src="images/product1.jpg" width="200px" height="370px" alt="">
                <p>Chú thuật hồi chiến - Tập 3</p>
                <span class="me-5 text-danger">2.490.000₫</span>
                <span class="text-decoration-line-through ms-4 text-secondary">2.500.000₫</span>
              </div>
            </div>
    `
}

export default Home;