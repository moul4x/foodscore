<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
    [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
        display: none !important;
    }
    </style>

    %{--<asset:stylesheet src="application.css"/>--}%
    <asset:stylesheet src="/bootstrap/bootstrap.css"/>
    <asset:stylesheet src="/bootstrap/creative.css"/>
    <asset:stylesheet src="/bootstrap/magnific-popup.css"/>
    <asset:stylesheet src="/sweetalert.css"/>
    <asset:stylesheet src="/font-awesome/css/font-awesome.css"/>
    <asset:stylesheet src="/application.css"/>
    <asset:stylesheet src="/autocomplete.css"/>
    <asset:stylesheet src="/jquery-ui.css"/>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico"/>

    <asset:javascript src="/libs/sweetalert.min.js"/>
    <asset:javascript src="/libs/papaparse.js"/>
    <asset:javascript src="/libs/jquery-1.12.4.js"/>
    <asset:javascript src="/libs/jquery-ui.js"/>
    <asset:javascript src="/libs/autocomplete.js"/>
%{--    <asset:javascript src="/bootstrap/jquery.js"/>--}%
    <asset:javascript src="/bootstrap/scrollreveal.js"/>
    <asset:javascript src="/bootstrap/jquery.magnific-popup.js"/>
    <asset:javascript src="/bootstrap/bootstrap.js"/>
    <asset:javascript src="/bootstrap/creative.js"/>
    <asset:javascript src="/libs/moment-with-locales.js"/>
    <asset:javascript src="/libs/lodash.core.js"/>
    <asset:javascript src="/libs/sweetalert.min.js"/>
    <asset:javascript src="/foodscore/app.js"/>

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>

<body ng-app="foodscore" id="page-top">


<nav id="mainNav" class="navbar navbar-default navbar-fixed-top affix-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
           %{-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>--}%
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" >
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a  href="#/menus">Menus</a>
                </li>
                <li>
                    <a  href="#/aliments">Aliments</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

%{--<header style="background-image: '${assetPath(src: 'bootstrap/header.jpg')}'">
    <div class="header-content">
        <div class="header-content-inner">
            <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
            <hr>

            <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
            <a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
        </div>
    </div>
</header>--}%

<section class="bg-primary" id="about">
    <div class="">
        <div class="row">
          <div class="text-center">
                <h2 class="section-heading">Foodscore</h2>
                <hr class="light">

                <div ui-view></div>
            %{--    <p class="text-faded">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                <a href="#services" class="page-scroll btn btn-default btn-xl sr-button" data-sr-id="6"
                   style="; visibility: visible;  -webkit-transform: translateY(20px) scale(0.9); opacity: 0;transform: translateY(20px) scale(0.9); opacity: 0;">Get Started!</a>
            </div>--}%
        </div>
    </div>
</section>

%{--<section  id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">At Your Service</h2>
                <hr class="primary">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">
                    <i class="fa fa-4x fa-diamond text-primary sr-icons" data-sr-id="2"
                       style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                    <h3>Sturdy Templates</h3>

                    <p class="text-muted">Our templates are updated regularly so they don't break.</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">
                    <i class="fa fa-4x fa-paper-plane text-primary sr-icons" data-sr-id="3"
                       style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                    <h3>Ready to Ship</h3>

                    <p class="text-muted">You can use this theme as is, or you can make changes!</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">
                    <i class="fa fa-4x fa-newspaper-o text-primary sr-icons" data-sr-id="4"
                       style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                    <h3>Up to Date</h3>

                    <p class="text-muted">We update dependencies to keep things fresh.</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">
                    <i class="fa fa-4x fa-heart text-primary sr-icons" data-sr-id="5"
                       style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                    <h3>Made with Love</h3>

                    <p class="text-muted">You have to make your websites with love these days!</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="no-padding" id="portfolio">
    <div class="container-fluid">
        <div class="row no-gutter popup-gallery">
            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/1.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/1.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/2.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/2.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/3.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/3.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/4.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/4.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/5.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/5.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-sm-6">
                <a href="${assetPath(src: 'bootstrap/portfolio/fullsize/6.jpg')}" class="portfolio-box">
                    <img src="${assetPath(src: 'bootstrap/portfolio/thumbnails/6.jpg')}" class="img-responsive" alt="">

                    <div class="portfolio-box-caption">
                        <div class="portfolio-box-caption-content">
                            <div class="project-category text-faded">
                                Category
                            </div>

                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<aside class="bg-dark">
    <div class="container text-center">
        <div class="call-to-action">
            <h2>Free Download at Start Bootstrap!</h2>
            <a href="http://startbootstrap.com/template-overviews/creative/" class="btn btn-default btn-xl sr-button"
               data-sr-id="7"
               style="; visibility: visible;  -webkit-transform: translateY(20px) scale(0.9); opacity: 0;transform: translateY(20px) scale(0.9); opacity: 0;">Download Now!</a>
        </div>
    </div>
</aside>--}%

<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <h2 class="section-heading">Let's Get In Touch!</h2>
                <hr class="primary">

                <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
            </div>

            <div class="col-lg-4 col-lg-offset-2 text-center">
                <i class="fa fa-phone fa-3x sr-contact" data-sr-id="9"
                   style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                <p>123-456-6789</p>
            </div>

            <div class="col-lg-4 text-center">
                <i class="fa fa-envelope-o fa-3x sr-contact" data-sr-id="10"
                   style="; visibility: visible;  -webkit-transform: scale(0.3); opacity: 0;transform: scale(0.3); opacity: 0;"></i>

                <p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p>
            </div>
        </div>
    </div>
</section>

<div class="footer" role="contentinfo"></div>

%{--<div id="spinner" class="spinner" style="display:none;">
    <g:message code="spinner.alt" default="Loading&hellip;"/>
</div>--}%

</body>

</html>
