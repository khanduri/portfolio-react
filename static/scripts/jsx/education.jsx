
/* Education */
var education = {
        institutes: [
          {
            title: 'University of Southern California',
            loc: 'Los Angeles, CA',
            course: 'Masters in Computer Science',
            desc: 'Specialization in Human Language technology (Applied Artificial Intelligence)',
            dates: '2008 - 2009'
          },
          {
            title: 'University of Waterloo',
            loc: 'Ontario, Canada',
            course: 'Bachelor in Applied Science – Computer Engineering (Honors)',
            desc: 'Option in Software Engineering',
            dates: '2003 - 2008'
          }
        ]
      }


var EducationDisplayComponent = React.createClass({
  render : function(){
 
    var institute = this.props.items;
    return (
      <li className="timeline-inverted">
        <div className="timeline-badge"><i className="fa fa-graduation-cap"></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <div className="timeline-title">{ institute.title }</div>
            <div className="timeline-dates">{ institute.dates }</div>
            <div className="timeline-location">{ institute.loc }</div>
            <br/>
            <div className="timeline-course">{ institute.course }</div>
            <div className="timeline-body">{ institute.desc }</div>
          </div>
        </div>
      </li>
    )
  }
});

var EducationComponent = React.createClass({
  render : function(){
 
    var rows = [];

    var education = this.props.items;
    education.institutes.map(function(institute){
      rows.push(<EducationDisplayComponent items={institute} />);
    });

    return (
      <section id="education" className="">
        <div className="content-section education-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Education</h2>

              <div className="container">
                <ul className="timeline">
                  {rows}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
});

React.render(<EducationComponent items={education} />, document.getElementById('education'));
