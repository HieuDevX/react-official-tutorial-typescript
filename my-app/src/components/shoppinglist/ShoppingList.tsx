import * as React from "react";

interface IProps {
  name: string;
}

class ShoppingList extends React.Component<IProps, {}> {
  public static defaultProps = {
    name: "Token"
  };

  public render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
