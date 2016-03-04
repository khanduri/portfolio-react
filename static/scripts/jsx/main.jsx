

/* Navigation */
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
                    <i className="fa fa-play-circle"></i>  <span className="light">HOME</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden"><a href="#page-top"></a></li>
                    <li><a className="page-scroll" href="#about">About</a></li>
                    <li><a className="page-scroll" href="#learn">Learn</a></li>
                    <li><a className="page-scroll" href="#experience">Experience</a></li>
                    <li><a className="page-scroll" href="#education">Education</a></li>
                    <li><a className="page-scroll" href="#projects">Activities</a></li>
                    <li><a className="page-scroll" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
});
React.render(<NavigationComponent />, document.getElementById('navigation'));


