function RkItemBox102_top(props) {
  return (
    <div>
    <h3 className="rkitemBox102_heading1">rkitemBox102 heading1</h3>
    <div className="rkitemBox102_img-holder">
    <img src="img.jpg" alt="img alt" title="Image Title" />
    </div>
    </div>
  );
}

function RkItemBox102_content(props) {
  return (
    <div>
    <h4 className="rkitemBox102_heading2">rkitemBox102 heading2</h4>
        <p>{props.pr_text}</p>
    </div>
  );
}

function RkItemBox102_btnHolder(props) {
  return (
    <div className="rkitemBox102_btn-holder">
    <button className="btn btn1-01" data-message="button1" tabindex="0">button1</button>
    <button className="btn btn1-01" data-message="button2" tabindex="0">button2</button>
    </div>
  );
}

export default class RkItemBox102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,... "
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
      <div className="rkitemBox102">
        <RkItemBox102_top />
        <RkItemBox102_content pr_text={this.state.text} />
        <RkItemBox102_btnHolder />
      </div>
    );
  }
}