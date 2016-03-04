

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


/* About */
var AboutComponent = React.createClass({
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
React.render(<AboutComponent />, document.getElementById('about'));


/* Activities */
var activities = {
        projects: [
          {name: 'Portfolio Generator - This site', link: 'https://github.com/khanduri/portfolio-react'},
          {name: 'Workout Generator', link: 'https://workoutgen-stage.herokuapp.com/'},
          {name: 'color.js', link: 'https://github.com/khanduri/color.js'},
          {name: 'EZ Apps - iOS apps', link: 'http://ezapps.herokuapp.com/'},
          {name: 'Structure extractor - Craigslist', link: ''},
          {name: 'Transliteration - En to Hi', link: ''},
          {name: 'ANN - Emotion Recognition', link: ''},
          {name: 'Sudoku Solver - CSP', link: ''}
        ],
        groups: [
          {name: 'Asha for Education', link: ''},
          {name: 'Ekal Vidyalaya', link: ''},
          {name: 'USC Trekkers group', link: ''},
          {name: 'Engineering Exploration Volunteer', link: ''}
        ],
        hobbies: [
          {name: 'Tennis / Racquet ball enthusiast', link: ''},
          {name: 'Playing any outdoor sport', link: ''},
          {name: 'Practicing Yoga', link: ''}
        ]
      }

var ProjectsComponent = React.createClass({
  render: function(){
    var activities = this.props.items;

    return (
      <section id="projects" className="">
        <div className="content-section projects-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Activities</h2>

                <div className="row">
                  { Object.keys(activities).map(function(category){
                    return (
                      <div className="col-md-4"><div className="middle">{category.toUpperCase()}</div><br/>
                        {activities[category].map(function(task){
                          var link = task.link;
                          var name = task.name;
                          if (link){
                            return <div className="well"><a href={""+link}>{name}</a></div>
                          } else {
                            return <div className="well">{name}</div>
                          }
                        })}
                      </div>
                    )
                  })}
                </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
});
React.render(<ProjectsComponent items={activities}/>, document.getElementById('projects'));


/* Contact */
var contact = {
  github: 'khanduri',
  twitter: 'khandurip',
  linkedin: 'prashantkhanduri',
  facebook: 'prashant.khanduri'
}

var ContactComponent = React.createClass({
  render: function(){

    var contact = this.props.items;

    return (
      <section id="contact" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Contact</h2>
            <ul className="list-inline banner-social-buttons">
              {contact.twitter ? <li><a href={"https://twitter.com/" + contact.twitter} className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a></li>: null }
              {contact.github ? <li><a href={"https://github.com/" + contact.github} className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a></li>: null }
              {contact.linkedin ? <li><a href={"https://www.linkedin.com/in/"+contact.linkedin} className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">LinkedIn</span></a></li>: null }
              {contact.facebook ? <li><a href={"https://www.facebook.com/"+contact.facebook} className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a></li>: null }
            </ul>
          </div>
        </div>
      </section>
    )
  }
});
React.render(<ContactComponent items={contact}/>, document.getElementById('contact'));


/* Learn */
var learn = {
        current: {
          languages: [
            ['python', 90],
            ['javascript', 80]
          ],
          tools: [
            ['vim', 80],
            ['shell-scripting', 90]
          ],
          frameworks: [
            ['react', 40],
            ['react native', 40],
            ['flask', 80]
          ]
        },
        past: {
          languages: [
            ['C#', 60],
            ['Java ', 70],
            ['PHP', 50],
            ['Perl', 40],
            ['C / C++ ', 70],
            ['Self', 60],
            ['objective-c', 60]
          ],
          tools: [
            ['eclipse', 60],
            ['x-code', 60],
            ['visual-studio', 80]
          ],
          frameworks: [
            ['django', 80],
            ['jquery', 70],
            ['angular', 60],
            ['yeoman', 60],
            ['code-igniter', 50],
            ['cake-php', 40],
            ['mason', 50]
          ]
        }
      }

var ProgressDisplayComponent = React.createClass({
  render: function(){
    var title = this.props.title;
    var current = this.props.items;

   return (
      <div className="row">
        <h2 className="text-center">{title}</h2>
        <div className="row">
            { Object.keys(current).map(function(category){
              return (
                <div className="col-md-4"><div className="middle">{category.toUpperCase()}</div><br/>
                  {current[category].sort(function(a, b){ return -(a[1] - b[1]); }).map(function(topic){
                    return (<div className="progress"><div className={"progress-bar prog-"+topic[1]}>{topic[0]}</div></div>)
                  })}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
});

var LearnComponent = React.createClass({
  render : function(){
 
    var rows = [];

    var current = this.props.items.current;
    rows.push(<ProgressDisplayComponent items={current} title={"Current interest"}/>);

    var past = this.props.items.past;
    rows.push(<ProgressDisplayComponent items={past} title={"In the Past"}/>);


    return (
      <section id="learn" className="content-section">
        <div className="content-section learn-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              {rows}           
            </div>
          </div>
        </div>
      </section>
    )
  }
});

React.render(<LearnComponent items={learn}/>, document.getElementById('learn'));

