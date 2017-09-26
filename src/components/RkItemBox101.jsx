function RkItemBox101_imgHolder(props) {
  return (
    <div className="rkitemBox101_img-holder">
    <img src="img.jpg" alt="img alt" title="Image Title" />
    </div>
  );
}

function RkItemBox101_content(props) {
  return (
    <div>
    <h3 className="rkitemBox101_heading">ItemBox title</h3>
    <hr />
    <p>{props.pr_text}</p>
    </div>
  );
}

function RkItemBox101_btnHolder(props) {
  return (
    <div className="rkitemBox101_btn-holder">
    <button className="btn btn1-01" data-message="button1" tabindex="0">button1</button>
    <button className="btn btn1-01" data-message="button2" tabindex="0">button2</button>
    </div>
  );
}

export default class RkrkItemBox101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,..."
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <div className="rkitemBox101">
        <RkItemBox101_imgHolder />
        <RkItemBox101_content pr_text={this.state.text}/>
        <RkItemBox101_btnHolder />
      </div>
      
    );
  }
}