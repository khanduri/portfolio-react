
/* Experience */
var experience = [
        {
          fa_class: 'fa-spin fa-credit-card',
          title: 'Affirm',
          loc: 'San Fransisco, CA',
          dates: '2015 - current',
          position: 'Software Engineer',
          body: [
            {
              team_name: 'Platform team',
              team_desc: 'The team is responsible for building our own proprietary financial platform, as well as our real-time high-throughput data processing pipeline',
              duties: [
                'Build and maintain the bank authentication pipeline for pulling in account infromation',
                'Setting up dashboards for monitoring and alerting over bank auth pipeline'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-circle-o-notch',
          title: 'Jawbone',
          loc: 'San Fransisco, CA',
          dates: '2014 - 2015',
          position: 'Senior Software Engineer',
          body: [
            {
              team_name: 'Insights & Intelligence team',
              team_desc: 'The team is responsible for building an intelligent guide that helps our users make good health choices',
              duties: [
                'Building the core intelligence for the Smart Coach brand',
                'Building the Insights system and the internal CRM system to manage the insight content'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-comment-o',
          title:'Hearsay Social',
          loc:'San Fransisco, CA',
          dates:'2012 - 2014',
          position:'Programmer',
          body: [
            {
              team_name: 'Engagement team',
              team_desc: 'Team\'s goal was to keep the user engagement up and unblock any onboarding issues (growing the monthly active users)',
              duties: [
                'Designed and developed a notification platform for our software',
                'Worked on building the analytics and reporting framework'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-windows',
          title:'Microsoft Inc',
          loc:'Seattle, WA',
          dates:'2009 - 2012',
          position:'Software Developer',
          body: [
            {
              team_name: 'Bing - Relevance',
              team_desc: 'Team was responsible for ranking the top documents in Bing\'s algorithmic web search results (Top 100K queries)',
              duties: [
                'Developing new algorithms to extract ranking signals and features from petabytes of user browsing activity logs',
                'Using data mining and machine learning techniques to optimize user satisfaction metrics'
              ]
            },
            {
              team_name: 'Windows Live',
              team_desc: 'Worked with two separate groups (Service Management / Monetization) on delivering project critical components',
              duties: [
                'Implemented a service for syncing data from a system store to a DHCP server (for the server to hand out correct IP leases required for PXE booting)',
                'Helped design the next generation monetization solution to better target Hotmail users'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-code',
          title: 'Internships',
          loc: 'Various Locations',
          dates: '2004 - 2009',
          position: 'Intern',
          body: [
            {
              team_name: 'Microsoft Corporation',
              team_desc: 'Windows Live Mesh - May 2009 – Aug 2009',
              duties: [
                'Created an assembly that provisioned a delegated authentication token management service'
              ]
            },
            {
              team_name: 'Amazon.com Inc',
              team_desc: 'Personalization - Aug 2007 - Dec 2007',
              duties: [
                'Worked on a ranking mechanism to generate a tag set which describe the list recommended items'
              ]
            },
            {
              team_name: 'Sun Microsystems',
              team_desc: 'Complex Systems Group - Jan 2006 - Apr 2006',
              duties: [
                'Participated in the design and development of a simulation infrastructure for the behavioral analysis of wireless sensor networks'
              ]
            },
            {
              team_name: 'Amazon.com Inc',
              team_desc: 'Digital Media Technologies - May 2005 - Aug 2005',
              duties: ['Worked on the variety of upgrades to the digital media pipeline (mainly the first internal REST client to the S3 service)'
              ]
            },
            {
              team_name: 'Epson Canada',
              team_desc: 'Barcode Recognition - Jan 2004 - Apr 2004',
              duties: [
                'Developed a universal 2D barcode decoding application for hand-held image-scanners'
              ]
            }
          ]
        }
      ]

var ExperienceDutyDisplayComponent = React.createClass({

  render: function(){
    var duty = this.props.items;
    return (
      <div> - { duty }</div>
    )
  }
});

var ExperienceContentDisplayComponent = React.createClass({

  render: function(){
    var content = this.props.items;

    var rows = [];
    content.duties.map(function(duty){
      rows.push(<ExperienceDutyDisplayComponent items={duty} />)
    });

    return (
      <div className="timeline-body">
        <br/>
        <div>
        <b>{ content.team_name }:</b>
        </div>
        { content.team_desc }
        { rows }
      </div>
    )
  }
});

var ExperienceDisplayComponent = React.createClass({
  render: function(){
    var work = this.props.items;

    var rows = [];
    work.body.map(function(content){
      rows.push(<ExperienceContentDisplayComponent items={content} />);
    });

   return (
      <li className="timeline-inverted">
        <div className="timeline-badge"><i className={"fa " + work.fa_class }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">{ work.title }</h4>
            <div className="timeline-location">{ work.loc }</div>
            <div className="timeline-dates">{ work.dates }</div>
            <div className="timeline-position">{ work.position }</div>
            
            { rows }

          </div>
        </div>
      </li>

    )
  }
});

var ExperienceComponent = React.createClass({
  render : function(){
 
    var rows = [];

    var experiences = this.props.items;
    experiences.map(function(experience){
      rows.push(<ExperienceDisplayComponent items={experience} />);
    });

    return (
      <section id="experience" className="">
        <div className="content-section experience-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Experience</h2>

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

React.render(<ExperienceComponent items={experience} />, document.getElementById('experience'));


