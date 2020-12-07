// TODO

// note: ES6 syntax, withou {} implicitly return

// props would become a list of GroceryListItems
var GroceryList = (props) => (
  // props at [i] is a GroceryListItem, add to ul element
  <div>
    <ListTitle />
    <ul>
      {props.groceryItems[0]}
      {props.groceryItems[1]}
      {props.groceryItems[2]}
      {props.groceryItems[3]}
    </ul>
  </div>
);

var ListTitle = () => (
  <h2>Stuff to Buy</h2>
);

// make a reusable GroceryListItem component that dynamically renders given grocery item
var GroceryListItem = (props) => (
  // props needs to contain a dynamic 'name' to each GListItem
  // could be props.name = 'name of item', still within a li element
  <li>{props.name}</li>
);

// make an array of GroceryListItems
var groceryItems = [
  // each GListItem is passed a prop with 'name'
  <GroceryListItem name='Beer'/>,
  <GroceryListItem name='Noodles'/>,
  <GroceryListItem name='Mint Chip Ice Cream'/>,
  <GroceryListItem name='Masks'/>
];

// render GroceryList onto div tag in index.html with id of app
ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById("app"));
