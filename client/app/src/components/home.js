import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"; // CSS file for styling
import $ from "jquery";



const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // When scrollY crosses a threshold, set isVisible to true
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  useEffect(() => {
    // Parallax
    function scrollBanner() {
      $(document).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          top: scrollPos / 2 + 'px',
          opacity: 1 - scrollPos / 700,
        });

        $('.parallax-00').css({
          top: scrollPos / -3.5 + 'px',
        });

        $('.parallax-01').css({
          top: scrollPos / -2.8 + 'px',
        });

        $('.parallax-top-shadow').css({
          top: scrollPos / -2 + 'px',
        });
      });
    }
    scrollBanner();

    // Page cursors
    // document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
    //   $('#cursor').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
    //   $('#cursor2').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
    //   $('#cursor3').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
    // });

    // // var t = document.getElementById('cursor'),
    //   var e = document.getElementById('cursor2'),
    //   i = document.getElementById('cursor3');

    // function n() {
    //   e.classList.add('hover');
    //   i.classList.add('hover');
    // }

    // function s() {
    //   e.classList.remove('hover');
    //   i.classList.remove('hover');
    // }

    // s();
    // var r = document.querySelectorAll('.hover-target');
    // for (var a = r.length - 1; a >= 0; a--) {
    //   o(r[a]);
    // }

    // function o(t) {
    //   t.addEventListener('mouseover', n);
    //   t.addEventListener('mouseout', s);
    // }

    // Scroll back to top
    $(document).ready(function () {
      var offset = 300;
      var duration = 400;

      $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
          $('.scroll-to-top').addClass('active-arrow');
        } else {
          $('.scroll-to-top').removeClass('active-arrow');
        }
      });

      $('.scroll-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
      });

      // Hero Case study images
      $('.case-study-name:nth-child(1)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(1)').addClass('show');
        $('.case-study-name:nth-child(1)').addClass('active');
      });

      $('.case-study-name:nth-child(2)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(2)').addClass('show');
        $('.case-study-name:nth-child(2)').addClass('active');
      });

      $('.case-study-name:nth-child(3)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(3)').addClass('show');
        $('.case-study-name:nth-child(3)').addClass('active');
      });

      $('.case-study-name:nth-child(4)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(4)').addClass('show');
        $('.case-study-name:nth-child(4)').addClass('active');
      });

      $('.case-study-name:nth-child(1)').trigger('mouseenter');
    });
  }, []); 

  

  return (
    <div>
    <div className="shadow-title parallax-top-shadow" style={{ top: '-0.5px' }}>
      OPTICOURSE
    </div>
    <div
      className="section-parallax parallax-00"
      style={{ backgroundImage: "url('http://www.ivang-design.com/svg-load/parallax/parallax-0.png')", top: '-0.285714px' }}
    ></div>
    <div
      className="section-parallax parallax-01"
      style={{ backgroundImage: "url('http://www.ivang-design.com/svg-load/parallax/parallax-01.png')", top: '-0.357143px' }}
    ></div>
    <div className="section full-height">
      <div className="section-title-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center parallax-fade-top" style={{ top: '0.5px', opacity: '0.998571' }}>
              <p>Welcome to Opticourse</p>
              <h1>
                Streamlining
                <br />
                Your Courses
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section full-height z-bigger">
      <ul className="case-study-wrapper">
        <li className="case-study-name active">
          <a href="#" className="hover-target">
            light
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            flare
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            nature
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            fire
          </a>
        </li>
      </ul>
      <ul className="case-study-images">
        <li className="show">
          <div className="img-hero-background">
            <img src="http://www.ivang-design.com/svg-load/parallax/light.jpg" alt="" />
          </div>
          <div className="hero-number-back">01</div>
          <div className="hero-number">01</div>
          <div className="hero-number-fixed">04</div>
          <div className="case-study-title">graphic design, interaction</div>
        </li>
        <li className="">
          <div className="img-hero-background">
            <img src="http://www.ivang-design.com/svg-load/parallax/flare.jpg" alt="" />
          </div>
          <div className="hero-number-back">02</div>
          <div className="hero-number">02</div>
          <div className="case-study-title">advertising, art direction</div>
        </li>
        <li className="">
          <div className="img-hero-background">
            <img src="http://www.ivang-design.com/svg-load/parallax/nature.jpg" alt="" />
          </div>
          <div className="hero-number-back">03</div>
          <div className="hero-number">03</div>
          <div className="case-study-title">photography, retouching</div>
        </li>
        <li className="">
          <div className="img-hero-background">
            <img src="http://www.ivang-design.com/svg-load/parallax/fire.jpg" alt="" />
          </div>
          <div className="hero-number-back">04</div>
          <div className="hero-number">04</div>
          <div className="case-study-title">photography, advertising</div>
        </li>
      </ul>
    </div>

    <div className="section padding-top-bottom over-hide background-dark z-bigger-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <a href="#" className="hover-target">
              <div className="project-link-wrap">
                <p>get started</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="scroll-to-top hover-target"></div>

    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </div>
  );
};

export default Home;
