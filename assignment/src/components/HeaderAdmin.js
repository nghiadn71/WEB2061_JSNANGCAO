const HeaderAdmin = {
    render: () => {
        return (
            `
            <!-- plugins:css -->
            <link rel="stylesheet" href="../src/pages/admin/app/vendors/mdi/css/materialdesignicons.min.css">
            <link rel="stylesheet" href="../src/pages/admin/app/vendors/base/vendor.bundle.base.css">
            <!-- endinject -->
            <!-- plugin css for this page -->
            <link rel="stylesheet" href="../src/pages/admin/app/vendors/datatables.net-bs4/dataTables.bootstrap4.css">
            <!-- End plugin css for this page -->
            <!-- inject:css -->
            <link rel="stylesheet" href="../src/pages/admin/app/css/style.css">
            <!-- endinject -->
            <link rel="shortcut icon" href="../src/pages/admin/app/images/favicon.png" />

            <div class="container-scroller">
            <!-- partial:partials/_navbar.html -->
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
              <div class="navbar-brand-wrapper d-flex justify-content-center">
                <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
                  <a class="" href="index.html"><img style="margin-left: 70px;" width="50px" height="50px" src="../src/pages/admin/app/images/logo_kd.webp" alt="logo"/></a>
                  <a class="navbar-brand brand-logo-mini" href="index.html"><img src="../src/pages/admin/app/images/logo-mini.svg" alt="logo"/></a>
                  <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span class="mdi mdi-sort-variant"></span>
                  </button>
                </div>  
              </div>
              <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul class="navbar-nav mr-lg-4 w-100">
                  <li class="nav-item nav-search d-none d-lg-block w-100">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="search">
                          <i class="mdi mdi-magnify"></i>
                        </span>
                      </div>
                      <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="search" aria-describedby="search">
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                  <li class="nav-item dropdown me-1">
                    <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
                      <i class="mdi mdi-message-text mx-0"></i>
                      <span class="count"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                      <p class="mb-0 font-weight-normal float-left dropdown-header">Tin nhắn</p>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                            <img src="../src/pages/admin/app/images/faces/face4.jpg" alt="image" class="profile-pic">
                        </div>
                        <div class="item-content flex-grow">
                          <h6 class="ellipsis font-weight-normal">David Grey
                          </h6>
                          <p class="font-weight-light small-text text-muted mb-0">
                            The meeting is cancelled
                          </p>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                            <img src="../src/pages/admin/app/images/faces/face2.jpg" alt="image" class="profile-pic">
                        </div>
                        <div class="item-content flex-grow">
                          <h6 class="ellipsis font-weight-normal">Tim Cook
                          </h6>
                          <p class="font-weight-light small-text text-muted mb-0">
                            New product launch
                          </p>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                            <img src="../src/pages/admin/app/images/faces/face3.jpg" alt="image" class="profile-pic">
                        </div>
                        <div class="item-content flex-grow">
                          <h6 class="ellipsis font-weight-normal"> Johnson
                          </h6>
                          <p class="font-weight-light small-text text-muted mb-0">
                            Upcoming board meeting
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown me-4">
                    <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                      <i class="mdi mdi-bell mx-0"></i>
                      <span class="count"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                      <p class="mb-0 font-weight-normal float-left dropdown-header">Thông báo</p>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                          <div class="item-icon bg-success">
                            <i class="mdi mdi-information mx-0"></i>
                          </div>
                        </div>
                        <div class="item-content">
                          <h6 class="font-weight-normal">Application Error</h6>
                          <p class="font-weight-light small-text mb-0 text-muted">
                            Just now
                          </p>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                          <div class="item-icon bg-warning">
                            <i class="mdi mdi-settings mx-0"></i>
                          </div>
                        </div>
                        <div class="item-content">
                          <h6 class="font-weight-normal">Settings</h6>
                          <p class="font-weight-light small-text mb-0 text-muted">
                            Private message
                          </p>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="item-thumbnail">
                          <div class="item-icon bg-info">
                            <i class="mdi mdi-account-box mx-0"></i>
                          </div>
                        </div>
                        <div class="item-content">
                          <h6 class="font-weight-normal">New user registration</h6>
                          <p class="font-weight-light small-text mb-0 text-muted">
                            2 days ago
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="nav-item nav-profile dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                      <img src="../src/pages/admin/app/images/faces/admin.jpg" alt="profile"/>
                      <span class="nav-profile-name">Administrators</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                      <a class="dropdown-item">
                        <i class="mdi mdi-settings text-primary"></i>
                        Cài đặt
                      </a>
                      <a class="dropdown-item">
                        <i class="mdi mdi-logout text-primary"></i>
                        Đăng xuất
                      </a>
                    </div>
                  </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                  <span class="mdi mdi-menu"></span>
                </button>
              </div>
            </nav>
            <!-- partial -->
            <div class="container-fluid page-body-wrapper">
              <!-- partial:partials/_sidebar.html -->
              <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/admin">
                      <i class="mdi mdi-home menu-icon"></i>
                      <span class="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/category-admin">
                      <i class="mdi mdi-book-multiple menu-icon"></i>
                      <span class="menu-title">Danh mục</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/product-admin">
                      <i class="mdi mdi-package-variant menu-icon"></i>
                      <span class="menu-title">Sản phẩm</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <!-- partial -->
              <div class="main-panel">
            `
        )
    }
}

export default HeaderAdmin;