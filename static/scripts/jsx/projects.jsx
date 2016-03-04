
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


