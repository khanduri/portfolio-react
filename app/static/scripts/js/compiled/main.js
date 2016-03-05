
/* About */
var AboutPrashantComponent = React.createClass({displayName: "AboutPrashantComponent",
  render: function(){
    return (
        React.createElement("section", {id: "about", className: "content-section text-center"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
              React.createElement("h2", null, "About Me"), 
              React.createElement("p", null, "Hi there! I'm Prashant Khanduri"), 
              React.createElement("p", null, "I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)"), 
              React.createElement("p", null, "On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for ", React.createElement("a", {href: "#", "ng-click": "scroll('#experience')"}, "some of it"), ", the other portion ends up on a ", React.createElement("a", {href: "https://github.com/khanduri/"}, "public domain")), 
              React.createElement("p", null, "I also ", React.createElement("a", {href: "http://khanduri.github.io/"}, "blog"), ", but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge"), 
              React.createElement("p", null), 
              React.createElement("p", null, "In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though"), 
              React.createElement("p", null, "You know a lot about me now! .. ", React.createElement("a", {href: "#contact", class: "page-scroll"}, "Ok your turn"))
            )
          )
        )
    )
  }
});

if (info.about == 'prashant'){
  React.render(React.createElement(AboutPrashantComponent, null), document.getElementById('about'));
}


/* Contact */

var ContactComponent = React.createClass({displayName: "ContactComponent",
  render: function(){

    var contact = this.props.items;

    return (
      React.createElement("section", {id: "contact", className: "container content-section text-center"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
            React.createElement("h2", null, "Contact"), 
            React.createElement("ul", {className: "list-inline banner-social-buttons"}, 
              contact.twitter ? React.createElement("li", null, React.createElement("a", {href: "https://twitter.com/" + contact.twitter, className: "btn btn-default btn-lg"}, React.createElement("i", {className: "fa fa-twitter fa-fw"}), " ", React.createElement("span", {className: "network-name"}, "Twitter"))): null, 
              contact.github ? React.createElement("li", null, React.createElement("a", {href: "https://github.com/" + contact.github, className: "btn btn-default btn-lg"}, React.createElement("i", {className: "fa fa-github fa-fw"}), " ", React.createElement("span", {className: "network-name"}, "Github"))): null, 
              contact.linkedin ? React.createElement("li", null, React.createElement("a", {href: "https://www.linkedin.com/in/"+contact.linkedin, className: "btn btn-default btn-lg"}, React.createElement("i", {className: "fa fa-linkedin fa-fw"}), " ", React.createElement("span", {className: "network-name"}, "LinkedIn"))): null, 
              contact.facebook ? React.createElement("li", null, React.createElement("a", {href: "https://www.facebook.com/"+contact.facebook, className: "btn btn-default btn-lg"}, React.createElement("i", {className: "fa fa-facebook fa-fw"}), " ", React.createElement("span", {className: "network-name"}, "Facebook"))): null
            )
          )
        )
      )
    )
  }
});

if (info.contact){
  React.render(React.createElement(ContactComponent, {items: info.contact}), document.getElementById('contact'));
}


/* Education */

var EducationDisplayComponent = React.createClass({displayName: "EducationDisplayComponent",
  render : function(){

    var institute = this.props.items;
    return (
      React.createElement("li", {className: "timeline-inverted", key: institute.id}, 
        React.createElement("div", {className: "timeline-badge"}, React.createElement("i", {className: "fa fa-graduation-cap"})), 
        React.createElement("div", {className: "timeline-panel"}, 
          React.createElement("div", {className: "timeline-heading"}, 
            React.createElement("div", {className: "timeline-title"},  institute.title), 
            React.createElement("div", {className: "timeline-dates"},  institute.dates), 
            React.createElement("div", {className: "timeline-location"},  institute.loc), 
            React.createElement("br", null), 
            React.createElement("div", {className: "timeline-course"},  institute.course), 
            React.createElement("div", {className: "timeline-body"},  institute.desc)
          )
        )
      )
    )
  }
});

var EducationComponent = React.createClass({displayName: "EducationComponent",
  render : function(){

    var rows = [];

    var education = this.props.items;
    education.institutes.map(function(institute){
      rows.push(React.createElement(EducationDisplayComponent, {items: institute}));
    });

    return (
      React.createElement("section", {id: "education", className: ""}, 
        React.createElement("div", {className: "content-section education-section"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
              React.createElement("h2", {className: "text-center"}, "Education"), 

              React.createElement("div", {className: "container"}, 
                React.createElement("ul", {className: "timeline"}, 
                  rows
                )
              )

            )
          )
        )
      )
    )
  }
});

if (info.education){
  React.render(React.createElement(EducationComponent, {items: info.education, key: "education"}), document.getElementById('education'));
}


/* Experience */

var ExperienceDutyDisplayComponent = React.createClass({displayName: "ExperienceDutyDisplayComponent",

  render: function(){
    var duty = this.props.items;
    return (
      React.createElement("div", null, " - ",  duty )
    )
  }
});

var ExperienceContentDisplayComponent = React.createClass({displayName: "ExperienceContentDisplayComponent",

  render: function(){
    var content = this.props.items;

    var rows = [];
    content.duties.map(function(duty){
      rows.push(React.createElement(ExperienceDutyDisplayComponent, {items: duty}))
    });

    return (
      React.createElement("div", {className: "timeline-body"}, 
        React.createElement("br", null), 
        React.createElement("div", null, 
        React.createElement("b", null,  content.team_name, ":")
        ), 
         content.team_desc, 
         rows 
      )
    )
  }
});

var ExperienceDisplayComponent = React.createClass({displayName: "ExperienceDisplayComponent",
  render: function(){
    var work = this.props.items;

    var rows = [];
    work.body.map(function(content){
      rows.push(React.createElement(ExperienceContentDisplayComponent, {items: content}));
    });

   return (
      React.createElement("li", {className: "timeline-inverted"}, 
        React.createElement("div", {className: "timeline-badge"}, React.createElement("i", {className: "fa " + work.fa_class})), 
        React.createElement("div", {className: "timeline-panel"}, 
          React.createElement("div", {className: "timeline-heading"}, 
            React.createElement("h4", {className: "timeline-title"},  work.title), 
            React.createElement("div", {className: "timeline-location"},  work.loc), 
            React.createElement("div", {className: "timeline-dates"},  work.dates), 
            React.createElement("div", {className: "timeline-position"},  work.position), 

             rows 

          )
        )
      )

    )
  }
});

var ExperienceComponent = React.createClass({displayName: "ExperienceComponent",
  render : function(){

    var rows = [];

    var experiences = this.props.items;
    experiences.map(function(experience){
      rows.push(React.createElement(ExperienceDisplayComponent, {items: experience}));
    });

    return (
      React.createElement("section", {id: "experience", className: ""}, 
        React.createElement("div", {className: "content-section experience-section"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
              React.createElement("h2", {className: "text-center"}, "Experience"), 

              React.createElement("div", {className: "container"}, 
                React.createElement("ul", {className: "timeline"}, 
                  rows
                )
              )

            )
          )
        )
      )
    )
  }
});

if (info.experience){
  React.render(React.createElement(ExperienceComponent, {items: info.experience}), document.getElementById('experience'));
}


/* Learn */

var ProgressDisplayComponent = React.createClass({displayName: "ProgressDisplayComponent",
  render: function(){
    var title = this.props.title;
    var current = this.props.items;

   return (
      React.createElement("div", {className: "row"}, 
        React.createElement("h2", {className: "text-center"}, title), 
        React.createElement("div", {className: "row"}, 
             Object.keys(current).map(function(category){
              return (
                React.createElement("div", {className: "col-md-4"}, React.createElement("div", {className: "middle"}, category.toUpperCase()), React.createElement("br", null), 
                  current[category].sort(function(a, b){ return -(a[1] - b[1]); }).map(function(topic){
                    return (React.createElement("div", {className: "progress"}, React.createElement("div", {className: "progress-bar prog-"+topic[1]}, topic[0])))
                  })
                )
              )
            })
        )
      )
    )
  }
});

var LearnComponent = React.createClass({displayName: "LearnComponent",
  render : function(){

    var rows = [];

    var current = this.props.items.current;
    rows.push(React.createElement(ProgressDisplayComponent, {items: current, title: "Current interest"}));

    var past = this.props.items.past;
    rows.push(React.createElement(ProgressDisplayComponent, {items: past, title: "In the Past"}));


    return (
      React.createElement("section", {id: "learn", className: "content-section"}, 
        React.createElement("div", {className: "content-section learn-section"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
              rows
            )
          )
        )
      )
    )
  }
});

if (info.learn){
  React.render(React.createElement(LearnComponent, {items: info.learn}), document.getElementById('learn'));
}



/* Navigation */
var NavigationComponent = React.createClass({displayName: "NavigationComponent",
  render: function(){

    var navigation = this.props.items;

    var rows = [];
    navigation.map(function(section){
      if (section != 'profile'){
        rows.push(React.createElement("li", null, React.createElement("a", {className: "page-scroll", href: "#"+section}, section)));
      }
    });

    return (
    React.createElement("nav", {className: "navbar navbar-custom navbar-fixed-top", role: "navigation"}, 
        React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "navbar-header"}, 
                React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-main-collapse"}, 
                    React.createElement("i", {className: "fa fa-bars"})
                ), 
                React.createElement("a", {className: "navbar-brand page-scroll", href: "#page-top"}, 
                    React.createElement("i", {className: "fa fa-play-circle"}), "  ", React.createElement("span", {className: "light"}, "HOME")
                )
            ), 

            React.createElement("div", {className: "collapse navbar-collapse navbar-right navbar-main-collapse"}, 
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    React.createElement("li", {className: "hidden"}, React.createElement("a", {href: "#page-top"})), 
                     rows 
                )
            )
        )
    )
    )
  }
});
if (info.navigation){
  React.render(React.createElement(NavigationComponent, {items: info.navigation}), document.getElementById('navigation'));
}



var HeaderComponent = React.createClass({displayName: "HeaderComponent",
  render: function(){
    var profile = this.props.items;
    return (
      React.createElement("div", {className: "intro-body"}, 
          React.createElement("div", {className: "container"}, 
              React.createElement("div", {className: "row"}, 
                  React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
                    React.createElement("h1", {className: "brand-heading"},  profile.name.first, " ",  profile.name.last), 
                    React.createElement("p", {className: "intro-text"}, " ",  profile.desc.first, React.createElement("br", null),  profile.desc.second), 
                    React.createElement("a", {href: "#about", className: "btn btn-circle page-scroll"}, 
                          React.createElement("i", {className: "fa fa-angle-double-down animated"})
                      )
                  )
              )
          )
      )
    )
  }
});

var FooterComponent = React.createClass({displayName: "FooterComponent",
  render: function(){
    var profile = this.props.items;
    return (
      React.createElement("div", {className: "container text-center"}, 
        React.createElement("p", null, "Copyright © ",  profile.name.first, " ",  profile.name.last, " - ",  new Date().getFullYear() )
      )
    )
  }
});
if (info.profile){
  React.render(React.createElement(HeaderComponent, {items: info.profile}), document.getElementById('header'));
  React.render(React.createElement(FooterComponent, {items: info.profile}), document.getElementById('footer'));
}


/* Activities */

var ActivitiesComponent = React.createClass({displayName: "ActivitiesComponent",
  render: function(){
    var activities = this.props.items;

    return (
      React.createElement("section", {id: "projects", className: ""}, 
        React.createElement("div", {className: "content-section projects-section"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
              React.createElement("h2", {className: "text-center"}, "Activities"), 

                React.createElement("div", {className: "row"}, 
                   Object.keys(activities).map(function(category){
                    return (
                      React.createElement("div", {className: "col-md-4"}, React.createElement("div", {className: "middle"}, category.toUpperCase()), React.createElement("br", null), 
                        activities[category].map(function(task){
                          var link = task.link;
                          var name = task.name;
                          if (link){
                            return React.createElement("div", {className: "well"}, React.createElement("a", {href: ""+link}, name))
                          } else {
                            return React.createElement("div", {className: "well"}, name)
                          }
                        })
                      )
                    )
                  })
                )

            )
          )
        )
      )
    )
  }
});
if (info.activities){
  React.render(React.createElement(ActivitiesComponent, {items: info.activities}), document.getElementById('activities'));
}
