
var NavigationComponent = React.createClass({
  render: function(){
    return (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                    <i className="fa fa-play-circle"></i>  <span className="light">Start</span> Bootstrap
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden"><a href="#page-top"></a></li>
                    <li><a className="page-scroll" href="#about">About</a></li>
                    <li><a className="page-scroll" href="#download">Download</a></li>
                    <li><a className="page-scroll" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
});



var AboutPage = React.createClass({
  render: function(){
    return (
        <section id="about" className="content-section text-center">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>About Me</h2>
              <p>Hi there! I'm Prashant Khanduri</p>
              <p>I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)</p>
              <p>On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for <a href='#' ng-click="scroll('#experience')">some of it</a>, the other portion ends up on a <a href="https://github.com/khanduri/">public domain</a></p>
              <p>I also <a href="http://khanduri.github.io/">blog</a>, but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge</p>
              <p></p>
              <p>In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though</p>
              <p>You know a lot about me now! .. <a href='#' ng-click="scroll('#contact')">Ok your turn</a></p>
            </div>
          </div>
        </section>
    )
  }
});


var DownloadPage = React.createClass({
  render: function(){
    return (
    <section id="download" className="content-section text-center">
        <div className="download-section">
            <div className="container">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2>Download Grayscale</h2>
                    <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
                    <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
                </div>
            </div>
        </div>
    </section>
    )
  }
});


var ContactPage = React.createClass({
  render: function(){
    return (
    <section id="contact" className="container content-section text-center">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
                <h2>Contact Start Bootstrap</h2>
                <p>Feel free to email us to provide some feedback on our templates, give us suggestions for new templates and themes, or to just say hello!</p>
                <p><a href="mailto:feedback@startbootstrap.com">feedback@startbootstrap.com</a>
                </p>
                <ul className="list-inline banner-social-buttons">
                    <li>
                        <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
  }
});


React.render(<NavigationComponent />, document.getElementById('navigation'));
React.render(<AboutPage />, document.getElementById('about'));
React.render(<DownloadPage />, document.getElementById('download'));
React.render(<ContactPage />, document.getElementById('contact'));

