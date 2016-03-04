
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


