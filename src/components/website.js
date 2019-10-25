import React from "react";

const Website = () => {
   return (
      <div>
        <div id="colorlib-page">
          <div className="container-wrap">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Thomas Febrianto</a></h1>
                <span className="position"><a href="#">Beginner Full Stack Developer</a> From Indonesia</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                    <li><a href="#" data-nav-section="about">About</a></li>
                    <li><a href="#" data-nav-section="services">Soft Skill</a></li>
                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                    <li><a href="#" data-nav-section="education">Education</a></li>
                    <li><a href="#" data-nav-section="blog">Portfolio</a></li>
                    <li><a href="#" data-nav-section="contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
              <div className="colorlib-footer">
                <p>
                    Copyright ©
                </p><ul>
                    <li><a href="https://www.facebook.com/thomas.delgando.f.seiei?ref=bookmarks"><i className="icon-facebook2" /></a></li>
                    <li><a href="https://twitter.com/Thomas_F_Seiei"><i className="icon-twitter2" /></a></li>
                    <li><a href="https://www.instagram.com/thomas_f_seiei/"><i className="icon-instagram" /></a></li>
                    <li><a href="https://www.linkedin.com/in/thomas-febrianto-ba4407192/"><i className="icon-linkedin2" /></a></li>
                  </ul>
                </div>
              </aside>
              <div id="colorlib-main">
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                  <div className="flexslider js-fullheight">
                    <ul className="slides">
                      <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                              <div className="slider-text-inner js-fullheight">
                                <div className="desc">
                                  <h1>Hi! <br />I'm Thomas</h1>
                                  <p><a href="https://www.linkedin.com/in/thomas-febrianto-ba4407192/" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                              <div className="slider-text-inner">
                                <div className="desc">
                                  <h1>I am <br /> Web app Developer</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="colorlib-about" data-section="about">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                          <div className="col-md-12">
                            <div className="about-desc">
                              <span className="heading-meta">About Us</span>
                              <h2 className="colorlib-heading">Who Am I?</h2>
                              <p><strong>Hi I'm Thomas Febrianto</strong>, I’ve always loved words, and I’ve always loved adventure.
                                I'm just a beginner web developer, I started cooding because I thought cooding was fun and cool, and yes, it was all because of my curiosity about the world of programming, I wanted to know more about how to develop and create applications more structured and efficient. still learning, and continuing to develop to become a real full stack develooper.</p>
                              <p>You don’t know much about me. Let's fix that. Here are a few facts, opinions and perspectives—a peek into my brainium.</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                            <div className="services color-1">
                              <span className="icon2"><i className="icon-bulb" /></span>
                              <h3>The best ideas are simple and human</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                            <div className="services color-2">
                              <span className="icon2"><i className="icon-globe-outline" /></span>
                              <h3>I love anime. All things about anime, actually. But especially the music.</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                            <div className="services color-3">
                              <span className="icon2"><i className="icon-data" /></span>
                              <h3>I have big curiosity about sains,technology and mystery</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                            <div className="services color-4">
                              <span className="icon2"><i className="icon-phone3" /></span>
                              <h3>I’m 103% addicted to technology.</h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                            <div className="services color-1">
                              <span className="icon2"><i className="icon-bulb" /></span>
                              <h3>“Too much” is relative</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                            <div className="services color-2">
                              <span className="icon2"><i className="icon-globe-outline" /></span>
                              <h3>According to my friends and family, I watch too much TV.</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                            <div className="services color-3">
                              <span className="icon2"><i className="icon-data" /></span>
                              <h3>I love watch mystery,tech,and like every body super hero movie</h3>
                            </div>
                          </div>
                          <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                            <div className="services color-4">
                              <span className="icon2"><i className="icon-phone3" /></span>
                              <h3>I do coding some time.</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div></section>
                <section className="colorlib-services" data-section="services">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">What I do?</span>
                        <h2 className="colorlib-heading">Here are some of my expertise</h2>
                      </div>
                    </div>
                    <div className="row row-pt-md">
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                          <span className="icon">
                            <i className="icon-bulb" />
                          </span>
                          <div className="desc">
                            <h3>Critical thinking</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                          <span className="icon">
                            <i className="icon-data" />
                          </span>
                          <div className="desc">
                            <h3>Access, analyze, and synthesize information</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                          <span className="icon">
                            <i className="icon-phone3" />
                          </span>
                          <div className="desc">
                            <h3>Curiosity, creative, and innovative</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-4">
                          <span className="icon">
                            <i className="icon-layers2" />
                          </span>
                          <div className="desc">
                            <h3>Project, Tim and Time management</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                          <span className="icon">
                            <i className="icon-data" />
                          </span>
                          <div className="desc">
                            <h3>Good communication</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-center animate-box">
                        <div className="services color-6">
                          <span className="icon">
                            <i className="icon-phone3" />
                          </span>
                          <div className="desc">
                            <h3>Minimum Viable Product (MVP)</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="colorlib-skills" data-section="skills">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading animate-box">My Skills</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <p>My skill is far beyond perfect, but I have the will and hard work to improve that skills</p>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>Photoshop</h3>
                          <div className="progress">
                            <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>jQuery</h3>
                          <div className="progress">
                            <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                              <span>60%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>HTML5</h3>
                          <div className="progress">
                            <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>CSS3</h3>
                          <div className="progress">
                            <div className="progress-bar color-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>Javasript</h3>
                          <div className="progress">
                            <div className="progress-bar color-5" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>React.JS</h3>
                          <div className="progress">
                            <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>Redux</h3>
                          <div className="progress">
                            <div className="progress-bar color-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                              <span>70%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>Bootstrap, Reactstrap, Material-UI</h3>
                          <div className="progress">
                            <div className="progress-bar color-3" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>NodeJs</h3>
                          <div className="progress">
                            <div className="progress-bar color-4" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>Express</h3>
                          <div className="progress">
                            <div className="progress-bar color-5" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>MongoDB, Mongoose</h3>
                          <div className="progress">
                            <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                          <h3>MySQL</h3>
                          <div className="progress">
                            <div className="progress-bar color-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                          <h3>Firebase</h3>
                          <div className="progress">
                            <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                              <span>70%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="colorlib-education" data-section="education">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Fullstack Web Developer at
                                    IMPACTBYTE
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <p><a href="https://impactbyte.com/"> https://impactbyte.com/</a> </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Intro to programming &amp; basic Javasript
                                    Hacktiv8
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                  <p><a href="https://hacktiv8.com"> https://hacktiv8.com</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <h4 className="panel-title">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Associate Degree: Logistic management at
                                    Politeknik Citra Widya Edukasi
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                  <p><a href="https://cwe.ac.id/"> https://cwe.ac.id/</a></p>	
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="colorlib-blog" data-section="blog">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">See</span>
                        <h2 className="colorlib-heading">My Project</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="blog-entry">
                          <a href="https://thomas2048-game.netlify.com" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" /></a>
                          <div className="desc">
                            <h3><a href="https://thomas2048-game.netlify.com">Game 2048</a></h3>
                            <p>I make this game using only html, css, javascript and canvas, in order to learn basic programming. just use W, S, A, and D tu play.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="blog-entry">
                          <a href="https://thomas-todos.netlify.com/" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" /></a>
                          <div className="desc">
                            <h3><a href="https://thomas-todos.netlify.com/">todos</a></h3>
                            <p>I using Javasript DOM in this one, to learn using time, and local storage in javasript .</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="blog-entry">
                          <a href="https://adopet-indo.netlify.com/" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" /></a>
                          <div className="desc">
                            <h3><a href="https://adopet-indo.netlify.com/">AdoPets (Full Stack Developer more active in Back-end)</a></h3>
                            <p> I and my team using all our full stack skill for this project like react redux for front-end, node-express for back-end, and mongodb for data base. AdoPets is an online platform for finding pets especially "dogs". AdoPets this can help you and your family find the pet, especially the dog that you are looking for.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 animate-box">
                        <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="colorlib-contact" data-section="contact">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="colorlib-heading">Contact</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                          <div className="colorlib-icon">
                            <i className="icon-globe-outline" />
                          </div>
                          <div className="colorlib-text">
                            <p><a href="#">thomas-f-seiei@hotmail.com</a></p>
                          </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                          <div className="colorlib-icon">
                            <i className="icon-map" />
                          </div>
                          <div className="colorlib-text">
                            <p>Meruya,Jakarta</p>
                          </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                          <div className="colorlib-icon">
                            <i className="icon-phone" />
                          </div>
                          <div className="colorlib-text">
                            <p><a href="tel://">+6285935024264</a></p>
                          </div>
                        </div>
                        <a href="https://github.com/thomasfebrianseiei">
                          <img src="images/github.png" width="400px" height="150px" title="github" alt="link" />
                        </a>
                      </div>
                      <div className="col-md-7 col-md-push-1">
                        <div className="row">
                          <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                            <form action>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                              </div>
                              <div className="form-group">
                                <textarea name id="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                              </div>
                              <div className="form-group">
                                <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
    );
  }
  


export default Website;
