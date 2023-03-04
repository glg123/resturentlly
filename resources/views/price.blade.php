<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="utf-8">
    <title>{{env('APP_NAME')}}</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="site/img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="site/lib/animate/animate.min.css" rel="stylesheet">
    <link href="site/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="site/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="site/css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="site/css/style.css" rel="stylesheet">

    <!------ Include the above in your HEAD tag ---------->
</head>

<body>
<div class="container-xxl bg-white p-0">
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="{{route('home')}}" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>{{env('APP_NAME')}}</h1>
                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0 pe-4">
                    <a href="/dashboards/register" class="nav-item nav-link active">Register</a>
                    <a href="/dashboards/login" class="nav-item nav-link active">Login</a>
                </div>
                <a href="{{route('price')}}" class="btn btn-primary py-2 px-4">Subscribe Now</a>
            </div>
        </nav>

        <div class="container-xxl py-5 bg-dark hero-header mb-5">

        </div>
    </div>
    <!-- Navbar & Hero End -->


    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="card card-pricing text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
                        <div class="bg-transparent card-header pt-4 border-0">
                            <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span class="price">3</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div class="card-body pt-0">
                            <ul class="list-unstyled mb-4">
                                <li>Up to 5 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates</li>
                                <li>Free cancelation</li>
                            </ul>
                            <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="card card-pricing popular shadow text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
                        <div class="bg-transparent card-header pt-4 border-0">
                            <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span class="price">6</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div class="card-body pt-0">
                            <ul class="list-unstyled mb-4">
                                <li>Up to 5 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates</li>
                                <li>Free cancelation</li>
                            </ul>
                            <a href="https://www.totoprayogo.com" target="_blank" class="btn btn-primary mb-3">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="card card-pricing text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
                        <div class="bg-transparent card-header pt-4 border-0">
                            <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span class="price">9</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div class="card-body pt-0">
                            <ul class="list-unstyled mb-4">
                                <li>Up to 5 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates</li>
                                <li>Free cancelation</li>
                            </ul>
                            <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="card card-pricing text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
                        <div class="bg-transparent card-header pt-4 border-0">
                            <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="60">$<span class="price">12</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                        </div>
                        <div class="card-body pt-0">
                            <ul class="list-unstyled mb-4">
                                <li>Up to 5 users</li>
                                <li>Basic support on Github</li>
                                <li>Monthly updates</li>
                                <li>Free cancelation</li>
                            </ul>
                            <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<!-- JavaScript Libraries -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="site/lib/wow/wow.min.js"></script>
<script src="site/lib/easing/easing.min.js"></script>
<script src="site/lib/waypoints/waypoints.min.js"></script>
<script src="site/lib/counterup/counterup.min.js"></script>
<script src="site/lib/owlcarousel/owl.carousel.min.js"></script>
<script src="site/lib/tempusdominus/js/moment.min.js"></script>
<script src="site/lib/tempusdominus/js/moment-timezone.min.js"></script>
<script src="site/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

<!-- Template Javascript -->
<script src="site/js/main.js"></script>
</body>

</html>
