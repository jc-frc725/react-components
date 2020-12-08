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
        {props.groceryitems[0]}
        {props.groceryitems[1]}
        {props.groceryitems[2]}
        {props.groceryitems[3]}
      </ul>
    </div>
  );
};

var ListTitle = () => (
  <h2>Stuff to Buy</h2>
);

// make a reusable GroceryListItem component that dynamically renders given grocery item
var GroceryListItem = (grocery) => {
  // props needs to contain a dynamic 'name' to each GListItem
  // could be props.name = 'name of item', still within a li element
  var onListItemClick = (event) => {
    console.log('wow!');
  };
  return (
    <li onClick={onListItemClick}>{grocery.name}</li>
  );
  
};

// make an array of GroceryListItems
var groceryItems = [
  // each GListItem is passed a prop with 'name'
  <GroceryListItem name='Beer'/>,
  <GroceryListItem name='Noodles'/>,
  <GroceryListItem name='Mint Chip Ice Cream'/>,
  <GroceryListItem name='Masks'/>
];

// render GroceryList onto div tag in index.html with id of app
ReactDOM.render(<GroceryList groceryitems={groceryItems}/>, document.getElementById("app"));
