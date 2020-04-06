<html>
    <head>
        <meta charset="UTF-8"/>
<style>
html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
}

/* =14px */
h1 {
  font-size: 2.4rem;
}

/* =24px */
.container__item {
  margin: 0 auto 40px;
}

.landing-page-container {
  width: 100%;
  min-height: 100%;
  height: 90rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  color: #09383E;
}

.content__wrapper {
  max-width: 1200px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.header {
  width: 100%;
  height: 2rem;
  padding: 4.5rem 0;
  display: block;
}

.menu-icon {
  width: 2.5rem;
  height: 1.5rem;
  display: inline-block;
  cursor: pointer;
}

.header__item {
  display: inline-block;
  float: left;
}

.menu-icon__line {
  width: 1.5rem;
  height: 0.2rem;
  background-color: #0C383E;
  display: block;
}
.menu-icon__line:before, .menu-icon__line:after {
  content: '';
  width: 1.5rem;
  height: 0.2rem;
  background-color: #0C383E;
  display: inline-block;
  position: relative;
}
.menu-icon__line:before {
  left: 0.5rem;
  top: -0.6rem;
}
.menu-icon__line:after {
  top: -1.8rem;
}

.heading {
  width: 90%;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.7rem;
  margin: 0 auto;
  text-align: center;
}

.social-container {
  width: 7.25rem;
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
  float: right;
}
.social-container .social__icon {
  width: 1.5rem;
  float: left;
  cursor: pointer;
}
.social-container .social__icon.social__icon--dr {
  margin-left: 1.25rem;
}
.social-container .social__icon.social__icon--in {
  margin-left: 1.5rem;
}
.social-container .social__icon.social__icon--fb img {
  margin: 0 0.25rem;
}

.coords {
  font-size: 1rem;
  display: inline-block;
  -webkit-transform: rotate(-90deg) translateY(50%);
          transform: rotate(-90deg) translateY(50%);
  float: left;
  position: relative;
  top: 40%;
  letter-spacing: 0.2rem;
  left: -11.5rem;
  margin: 0;
}

.ellipses-container {
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: 10.5rem;
}
.ellipses-container .greeting {
  position: absolute;
  top: 11.6rem;
  left: 13rem;
  right: 0;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 4rem;
  font-size: 2.2rem;
  font-weight: 400;
  opacity: 0.5;
}
.ellipses-container .greeting:after {
  content: '';
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  background-color: #0C383E;
  position: relative;
  top: -0.65rem;
  left: -5.05rem;
}

.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses__outer--thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(9, 56, 62, 0.1);
  -webkit-animation: ellipsesOrbit 15s ease-in-out infinite;
          animation: ellipsesOrbit 15s ease-in-out infinite;
}
.ellipses__outer--thin:after {
  content: "";
    top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  opacity: 0.15;
}

.ellipses__outer--thick {
  width: 99.5%;
  height: 99.5%;
  border-color: #09383E transparent;
  border-width: 2px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-animation: ellipsesRotate 15s ease-in-out infinite;
          animation: ellipsesRotate 15s ease-in-out infinite;
}

.ellipses__orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: #09383E;
  top: 5rem;
  right: 6.75rem;
}
.ellipses__orbit:before {
  content: '';
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  display: inline-block;
  background-color: #09383E;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.scroller {
  width: 7.5rem;
  display: inline-block;
  float: right;
  position: relative;
  top: -15%;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
  overflow: hidden;
}
.scroller .page-title {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5rem;
  display: inline-block;
  float: left;
  margin-top: 1rem;
}
.scroller .timeline {
  width: 1.5rem;
  height: 9rem;
  display: inline-block;
  float: right;
}
.scroller .timeline .timeline__unit {
  width: 100%;
  height: 0.1rem;
  display: block;
  background-color: #0C383E;
  margin: 0 0 2rem;
  opacity: 0.2;
}
.scroller .timeline .timeline__unit.timeline__unit--active {
  opacity: 1;
}
.scroller .timeline .timeline__unit.timeline__unit--active:after {
  opacity: 0.2;
}
.scroller .timeline .timeline__unit:after {
  content: '';
  width: 70%;
  height: 0.1rem;
  display: block;
  position: relative;
  float: right;
  background-color: #0C383E;
  top: 1rem;
}

@-webkit-keyframes ellipsesRotate {
  0% {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  100% {
    -webkit-transform: rotate(-405deg);
            transform: rotate(-405deg);
  }
}

@keyframes ellipsesRotate {
  0% {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  100% {
    -webkit-transform: rotate(-405deg);
            transform: rotate(-405deg);
  }
}
@-webkit-keyframes ellipsesOrbit {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes ellipsesOrbit {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

</style>
    </head>

    <body>
        <div class="container">
            <div class="container__item landing-page-container">
                <div class="content__wrapper">

                    <header class="header">
                        <div class="menu-icon header__item">
                            <span class="menu-icon__line"></span>
                        </div>

                        <h1 class="heading header__item"><?php
echo $_SERVER['HTTP_HOST'];
?></h1>


                    </header>

                    <p class="coords">N 41° 45' 30.173"  /  W 12° 30' 40.30"</p>

                    <div class="ellipses-container">

                        <h2 class="greeting">nginx</h2>

                        <div class="ellipses ellipses__outer--thin">

                            <div class="ellipses ellipses__orbit"></div>

                        </div>

                        <div class="ellipses ellipses__outer--thick"></div>
                    </div>

                    <div class="scroller">
                        <p class="page-title">docker</p>

                        <div class="timeline">
                            <span class="timeline__unit"></span>
                            <span class="timeline__unit timeline__unit--active"></span>
                            <span class="timeline__unit"></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </body>
</html>
