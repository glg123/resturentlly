<!DOCTYPE html>
@if(app()->getLocale() === "en")
    <html lang="{{app()->getLocale()}}">
    @else
        <html lang="{{app()->getLocale()}}">
        @endif


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
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
                  rel="stylesheet">

            <!-- Icon Font Stylesheet -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

            <!-- Libraries Stylesheet -->
            <link href="site/lib/animate/animate.min.css" rel="stylesheet">
            <link href="site/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
            <link href="site/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet"/>

            <!-- Customized Bootstrap Stylesheet -->
            <link href="site/css/bootstrap.min.css" rel="stylesheet">

            <!-- Template Stylesheet -->
            <link href="site/css/style.css" rel="stylesheet">
        </head>
        @if(app()->getLocale() === "en")
            <body dir="ltr">

            @else
                <body dir="rtl">

                @endif


                <div class="container-xxl bg-white p-0">
                    <!-- Spinner Start -->
                    <div id="spinner"
                         class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">{{__('views.loading')}}...</span>
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
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse">
                                <span class="fa fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <div class="navbar-nav ms-auto py-0 pe-4">
                                    @if(!auth()->user())
                                        <a href="/register"
                                           class="nav-item nav-link active">{{__('views.register')}}</a>
                                        <a href="/choose_login"
                                           class="nav-item nav-link active">{{__('views.login')}}</a>
                                    @else
                                        <div class="nav-item dropdown">
                                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">

                                                {{auth()->user()->first_name}} {{auth()->user()->last_name}}
                                            </a>
                                            <div class="dropdown-menu m-0">

                                                <a href="" class="dropdown-item">  {{__('views.my_profile')}}</a>
                                                <a id="logout" href="#"
                                                   class="dropdown-item">  {{__('views.logout')}}</a>

                                            </div>
                                        </div>
                                    @endif

                                    <div class="nav-item dropdown">
                                        <?php
                                        $lang_list = [
                                            'ar' => [
                                                'code' => 'ar',
                                                'text' => __('views.Arabic_swicher'),
                                            ],
                                            'en' => [
                                                'code' => 'en',
                                                'text' => __('views.English_swicher'),
                                            ],
                                        ];
                                        ?>

                                        <a href="#" class="nav-link dropdown-toggle"
                                           data-bs-toggle="dropdown">  @if(app()->getLocale() === "en")
                                                {{__('views.English_swicher')}}
                                            @else
                                                {{__('views.Arabic_swicher')}}
                                            @endif</a>
                                        <div class="dropdown-menu m-0">
                                            @foreach($lang_list as $lang_item )
                                                <a href="{{ route('site.dashboard.lang', $lang_item['code']) }}"
                                                   class="dropdown-item">{{$lang_item['text']}}</a>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>

                                <a href="pricing" class="btn btn-primary py-2 px-4">{{__('views.Subscribe_Now')}}</a>
                            </div>
                        </nav>

                        <div class="container-xxl py-5 bg-dark hero-header mb-5">
                            <div class="container my-5 py-5">
                                <div class="row align-items-center g-5">
                                    <div class="col-lg-6 text-center text-lg-start">
                                        <h1 class="display-3 text-white animated slideInLeft">{{$settings->title}}</h1>
                                        <p class="text-white animated slideInLeft mb-4 pb-2">{!! $settings->description !!}</p>
                                        <a href=""
                                           class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">{{__('views.Read_More')}}</a>
                                    </div>
                                    <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                        <img class="img-fluid" src="{{url($settings->slider_front_img)}}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Navbar & Hero End -->


                    <!-- Service Start -->
                    <div class="container-xxl py-5">
                        <div class="container">
                            <div class="row g-4">
                                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="service-item rounded pt-3">
                                        <div class="p-4">
                                            <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                            <h5>{{__('views.Reserve with a Click')}}</h5>
                                            <p>{{__('views.Save your time and easily reserve a table at a best restaurant, which is suitable for your occasion and lifestyle.')}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="service-item rounded pt-3">
                                        <div class="p-4">
                                            <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                            <h5>{{__('views.Have a best service')}}</h5>
                                            <p>{{__('views.Have a special dinner with my table through reserving a table at best restaurants. Hundreds of restaurants offers wait your reservation.')}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="service-item rounded pt-3">
                                        <div class="p-4">
                                            <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                            <h5>{{__('views.Connect with diners')}}</h5>
                                            <p>{{__('views.For the restaurants, we help you to be the first choice for your customers. Book your restaurants Resturentlly App.')}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div class="service-item rounded pt-3">
                                        <div class="p-4">
                                            <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                            <h5>{{__('views.24/7 Service')}}</h5>
                                            <p>{{__('views. helps you easily filter the restaurants list based on your preferences, and smartly provide you real time information and updates about the restaurants.')}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Service End -->


                    <!-- About Start -->
                    <div class="container-xxl py-5">
                        <div class="container">
                            <div class="row g-5 align-items-center">
                                <div class="col-lg-6">
                                    <div class="row g-3">
                                        <div class="col-6 text-start">
                                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"
                                                 src="site/img/about-1.jpg">
                                        </div>
                                        <div class="col-6 text-start">
                                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s"
                                                 src="site/img/about-2.jpg" style="margin-top: 25%;">
                                        </div>
                                        <div class="col-6 text-end">
                                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s"
                                                 src="site/img/about-3.jpg">
                                        </div>
                                        <div class="col-6 text-end">
                                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"
                                                 src="site/img/about-4.jpg">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <h5 class="section-title ff-secondary text-start text-primary fw-normal">{{__('views.About_Us')}}</h5>
                                    <h1 class="mb-4">{{__('views.Welcome_to')}} <i
                                                class="fa fa-utensils text-primary me-2"></i>{{env('APP_NAME')}}
                                    </h1>
                                    <p class="mb-4">{{$settings->about_us}}</p>

                                    <div class="row g-4 mb-4">
                                        <div class="col-sm-6">
                                            <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                                <h1 class="flex-shrink-0 display-5 text-primary mb-0"
                                                    data-toggle="counter-up">15</h1>
                                                <div class="ps-4">
                                                    <p class="mb-0">{{__('views.Years_of')}}</p>
                                                    <h6 class="text-uppercase mb-0">{{__('views.Experience')}}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                                <h1 class="flex-shrink-0 display-5 text-primary mb-0"
                                                    data-toggle="counter-up">50</h1>
                                                <div class="ps-4">
                                                    <p class="mb-0">{{__('views.Popular')}}</p>
                                                    <h6 class="text-uppercase mb-0">{{__('views.Restaurants')}}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="btn btn-primary py-3 px-5 mt-2" href="">{{__('views.Read_More')}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- About End -->


                    <!-- Team Start -->
                    <div class="container-xxl pt-5 pb-3">
                        <div class="container">
                            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h5 class="section-title ff-secondary text-center text-primary fw-normal">{{__('views.Team_Client')}}</h5>
                                <h1 class="mb-5">{{__('views.Our Master Client')}}</h1>
                            </div>
                            <div class="row g-4">
                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="team-item text-center rounded overflow-hidden">
                                        <div class="rounded-circle overflow-hidden m-4">
                                            <img class="img-fluid" src="site/img/team-1.jpg" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('views.Full Name')}}</h5>
                                        <small>Designation</small>
                                        <div class="d-flex justify-content-center mt-3">
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="team-item text-center rounded overflow-hidden">
                                        <div class="rounded-circle overflow-hidden m-4">
                                            <img class="img-fluid" src="site/img/team-2.jpg" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('views.Full Name')}}</h5>
                                        <small>Designation</small>
                                        <div class="d-flex justify-content-center mt-3">
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="team-item text-center rounded overflow-hidden">
                                        <div class="rounded-circle overflow-hidden m-4">
                                            <img class="img-fluid" src="site/img/team-3.jpg" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('views.Full Name')}}</h5>
                                        <small>Designation</small>
                                        <div class="d-flex justify-content-center mt-3">
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div class="team-item text-center rounded overflow-hidden">
                                        <div class="rounded-circle overflow-hidden m-4">
                                            <img class="img-fluid" src="site/img/team-4.jpg" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('views.Full Name')}}</h5>
                                        <small>Designation</small>
                                        <div class="d-flex justify-content-center mt-3">
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square btn-primary mx-1" href=""><i
                                                        class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Team End -->


                    <!-- Testimonial Start -->
                    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="container">
                            <div class="text-center">
                                <h5 class="section-title ff-secondary text-center text-primary fw-normal">
                                    {{__('views.Testimonial')}}</h5>
                                <h1 class="mb-5"></h1>
                            </div>
                            <div class="owl-carousel testimonial-carousel">
                                <div class="testimonial-item bg-transparent border rounded p-4">
                                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod
                                        eos labore diam</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded-circle"
                                             src="site/img/testimonial-1.jpg" style="width: 50px; height: 50px;">
                                        <div class="ps-3">
                                            <h5 class="mb-1">{{__('views.Client Name')}}</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-item bg-transparent border rounded p-4">
                                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod
                                        eos labore diam</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded-circle"
                                             src="site/img/testimonial-2.jpg" style="width: 50px; height: 50px;">
                                        <div class="ps-3">
                                            <h5 class="mb-1">{{__('views.Client Name')}}</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-item bg-transparent border rounded p-4">
                                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod
                                        eos labore diam</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded-circle"
                                             src="site/img/testimonial-3.jpg" style="width: 50px; height: 50px;">
                                        <div class="ps-3">
                                            <h5 class="mb-1">{{__('views.Client Name')}}</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-item bg-transparent border rounded p-4">
                                    <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod
                                        eos labore diam</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded-circle"
                                             src="site/img/testimonial-4.jpg" style="width: 50px; height: 50px;">
                                        <div class="ps-3">
                                            <h5 class="mb-1">{{__('views.Client Name')}}</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial End -->


                    <!-- Footer Start -->
                    <!-- Footer End -->


                    <!-- Back to Top -->

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
                <script type="text/javascript"
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

                <script>
                    $('#logout').click(function () {
                        $.ajax({
                            type: 'GET',
                            url: '{{route('logout')}}',
                            datatype: 'html',
                            cache: 'false',
                            success: function (response) {

                                localStorage.clear();
                                $.cookie('auth', null, {path: '/'})
                                document.location.href = '{{url('/')}}';
                            },
                            error: function () {

                            }
                        });
                    });
                </script>
                <!-- Template Javascript -->
                <script src="site/js/main.js"></script>
                </body>

        </html>
