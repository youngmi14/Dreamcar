class Siseon extends Component {
    constructor() {
      super();
      this.state = {
        isFocus: false,
        inputVal: "",
      };
    }
  
    focus = (msg) => {
      this.setState(
        {
          isFocus: !this.state.isFocus,
          inputVal: msg,
        },
        () => {
          this.state.inputVal = "";
        }
      );
    };
  
    render() {
      return (
        <div className="Siseon">
          <Nav />
          <div className="siseonWrapper">
            <div className="title">시승신청</div>
            <div className="form">
              <form className="formm">
                <div className="half">
                  <div className="question">개인 상세 정보</div>
                  <div className="row">
                    <div className="require">*</div>
                    <input
                      onFocus={() => {
                        this.focus("beautify");
                      }}
                      onBlur={this.focus}
                      className="beautify"
                      type="text"
                      id="5"
                    ></input>
                    <div
                      className={`text${this.state.inputVal === "beautify" ? "up" : ""}`}
                    >
                      이름
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>




//준영님 이거 책임져요

class Siseon extends Component {
    constructor() {
      super();
      this.state = {
        isFocus: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        inputVal: "",
      };
    }
  
    focus = (n) => {
      console.log(this.state.isFocus[n]);
  
      this.setState({
        isFocus[n]: true
      });

      <input
                    onFocus={() => {
                      this.focus(0);
                    }}
                    onBlur={() => {
                      this.focus(0);
                    }}
                    className="beautify"
                    type="text"
                    id="1"
                  ></input>
                  <div className={`text${this.state.isFocus[0] ? "up" : ""}`}>
                    이름
                  </div>


class Siseon extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      inputVal: "",
    };
  }

  focus = (n) => {

    console.log(this.state.isFocus[0]);

        this.setState({
            isFocus[1]: true,
            //inputVal: "",
          });

    // this.setState({
    //   isFocus[n]: true,
    //   //inputVal: "",
    // });
  };
//
  render() {
    return (
      <div className="Siseon">
        <Nav />
        <div className="siseonWrapper">
          <div className="title">시승신청</div>
          <div className="form">
            <form className="formm">
              <div className="half">
                <div className="question">개인 상세 정보</div>
                <div className="row">
                  <div className="require">*</div>
                  <input
                    onFocus={() => {
                      this.focus(0);
                    }}
                    onBlur={() => {
                      this.focus(0);
                    }}
                    className="beautify"
                    type="text"
                    id="1"
                  ></input>
                  <div className={`text${this.state.isFocus[0] ? "up" : ""}`}>
                    이름
                  </div>
                </div>