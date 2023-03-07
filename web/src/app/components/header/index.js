import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
export default function Main() {
  return (
    <>
      <header id="yl-header" className="yl-header-main header-style-two">
        <div className="container">
          <div className="yl-header-content clearfix">
            <div className="yl-brand-logo float-left"><a href="#">x</a>
            </div>
            <div className="yl-main-nav-wrap">
              <nav className="yl-main-navigation float-left ul-li">
                <ul id="main-nav" className="navbar-nav text-capitalize clearfix">
                  <li className="dropdown">
                    <a href="#">Home</a>
                    <ul className="dropdown-menu clearfix">
                      <li><a target="_blank" href="index.html">Home Page 1</a></li>
                      <li><a target="_blank" href="index-2.html">Home Page 2</a></li>
                      <li><a target="_blank" href="index-3.html">Home Page 3</a></li>
                      <li><a target="_blank" href="index-4.html">Home Page 4</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li className="dropdown">
                    <a href="#">Course</a>
                    <ul className="dropdown-menu clearfix">
                      <li><a target="_blank" href="course.html">Course</a></li>
                      <li><a target="_blank" href="course-details.html">Course Details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul className="dropdown-menu clearfix">
                      <li><a target="_blank" href="gallery.html">Gallery</a></li>
                      <li><a target="_blank" href="contact.html">Contact</a></li>
                      <li><a target="_blank" href="event.html">Event</a></li>
                      <li><a target="_blank" href="event-details.html">Event Details</a></li>
                      <li><a target="_blank" href="faq.html">Faq</a></li>
                      <li><a target="_blank" href="404.html">404</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Blog</a>
                    <ul className="dropdown-menu clearfix">
                      <li><a target="_blank" href="blog-1.html">Blog 1</a></li>
                      <li><a target="_blank" href="blog-2.html">Blog 2</a></li>
                      <li><a target="_blank" href="blog-details-1.html">Blog Details 1</a></li>
                      <li><a target="_blank" href="blog-details-2.html">Blog Details 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Instructor</a>
                    <ul className="dropdown-menu clearfix">
                      <li><a target="_blank" href="instructor.html">Instructor</a></li>
                      <li><a target="_blank" href="instructor-details.html">Instructor Details</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="yl-mobile-menu-wrap">
                <div className="yl-mobile_menu position-relative">
                  <div className="yl-mobile_menu_button yl-open_mobile_menu">
                    <i className="fas fa-bars"></i>
                  </div>
                  <div className="yl-mobile_menu_wrap">
                    <div className="mobile_menu_overlay yl-open_mobile_menu"></div>
                    <div className="yl-mobile_menu_content">
                      <div className="yl-mobile_menu_close yl-open_mobile_menu">
                        <i className="fas fa-times"></i>
                      </div>
                      <div className="m-brand-logo text-center">
                        <a href="#">s</a>
                      </div>
                      <nav className="yl-mobile-main-navigation  clearfix ul-li">
                        <ul id="m-main-nav" className="navbar-nav text-capitalize clearfix">
                          <li className="dropdown">
                            <a href="#">Home</a>
                            <ul className="dropdown-menu clearfix">
                              <li><a target="_blank" href="index.html">Home Page 1</a></li>
                              <li><a target="_blank" href="index-2.html">Home Page 2</a></li>
                              <li><a target="_blank" href="index-3.html">Home Page 3</a></li>
                              <li><a target="_blank" href="index-4.html">Home Page 4</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">About</a></li>
                          <li className="dropdown">
                            <a href="#">Course</a>
                            <ul className="dropdown-menu clearfix">
                              <li><a target="_blank" href="course.html">Course</a></li>
                              <li><a target="_blank" href="course-details.html">Course Details</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul className="dropdown-menu clearfix">
                              <li><a target="_blank" href="gallery.html">Gallery</a></li>
                              <li><a target="_blank" href="contact.html">Contact</a></li>
                              <li><a target="_blank" href="event.html">Event</a></li>
                              <li><a target="_blank" href="event-details.html">Event Details</a></li>
                              <li><a target="_blank" href="faq.html">Faq</a></li>
                              <li><a target="_blank" href="404.html">404</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Blog</a>
                            <ul className="dropdown-menu clearfix">
                              <li><a target="_blank" href="blog-1.html">Blog 1</a></li>
                              <li><a target="_blank" href="blog-2.html">Blog 2</a></li>
                              <li><a target="_blank" href="blog-details-1.html">Blog Details 1</a></li>
                              <li><a target="_blank" href="blog-details-2.html">Blog Details 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Instructor</a>
                            <ul className="dropdown-menu clearfix">
                              <li><a target="_blank" href="instructor.html">Instructor</a></li>
                              <li><a target="_blank" href="instructor-details.html">Instructor Details</a></li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="yl-header-cart-login float-right">
              <div className="yl-top-cart-login">
                <button><i className="fas fa-shopping-cart"></i></button>
              </div>
              <div className="yl-top-cart-login">
                <button data-toggle="modal" data-target="#exampleModal"><i className="fas fa-user"></i></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
