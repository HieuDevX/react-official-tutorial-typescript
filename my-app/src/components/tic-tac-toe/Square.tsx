import * as React from "react";

interface IProps {
  value: string;
  // function type
  onClick: () => void;
}

// interface IState {
//   value: string;
// }

// class Square extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       value: ""
//     };
//   }

//   public render() {
//     return (
//       <button className="square" onClick={this.props.onClick}>
//         {this.props.value}
//       </button>
//     );
//   }

//   private onClickHandle = () => {
//     this.setState({ value: "X" });
//   };
// }

const Square: React.FC<IProps> = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
