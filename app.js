// TODO

// note: ES6 syntax, withou {} implicitly return

// props would become a list of GroceryListItems
var GroceryList = (props) => {
  // props at [i] is a GroceryListItem, add to ul element

  // new feature: mouseover/clicking an item in the GroceryList does something
  // This click function will be called when the first `<li>` below is clicked on

  // We want to define it where it has access to `props`
  // var onListItemClick = (event) => {
  //   console.log('yea boi');
  // };
   
  // { }
  return (
    <div>
      <ListTitle />
      <ul> 
        {props.groceryitems.map(groceryitem =>
          <GroceryListItem name={groceryitem} />
        )}
      </ul>
    </div>
  );
};

var ListTitle = () => (
  <h2>Stuff to Buy</h2>
);

// make a reusable GroceryListItem component that dynamically renders given grocery item
// var GroceryListItem = (grocery) => {
//   // props needs to contain a dynamic 'name' to each GListItem
//   // could be props.name = 'name of item', still within a li element
//   var onListItemClick = (event) => {
//     console.log('wow!');
//   };
//   return (
//     <li onClick={onListItemClick}>{grocery.name}</li>
//   );
  
// };

// ES6 class style - now can manipulate 'state'
class GroceryListItem extends React.Component {
  // constructor method
  constructor(props) {
    // pass all parent props to child
    super(props)
    // 'state' is an object literal, must initialize in constructor
    this.state = {hover: false};
  }

  // upon clicking a list item, 'hover' is toggled to opposite of what it was,
  // and render will run again to update
  onListItemClick(event) {
    this.setState({
      hover: !this.state.hover
    });
    console.log('wow! you altered this component\'s state!');
  };

  // EVERY React class Component MUST have 'render' method
  render() {

    // make a 'style' conditional on state to allow updating based on user interaction
    var style = {
      // what this line does: state.textDecoration is a property linked to function
      // the function: ternary operator with 'this.state.hover' as conditional
      // if true, return 'bold', false, 'none'
      textDecoration: this.state.hover ? 'bold' : 'none'
      // add more 'suchDecoration' properties for more interactions
    };

    return (
      // props is no longer an argument to be passed
      // now accessed with 'this.props'

      //
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.name}</li>
    );
  }
}

// make an array of GroceryListItems
var groceryItems = [
  // each GListItem is passed a prop with 'name'
  'Beer',
  'Noodles',
  'Mint Chip Ice Cream',
  'Masks'
];

// render GroceryList onto div tag in index.html with id of app
ReactDOM.render(<GroceryList groceryitems={groceryItems}/>, document.getElementById("app"));
