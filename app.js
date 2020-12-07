// TODO

// note: ES6 syntax, withou {} implicitly return
var GroceryList = () => (
    <ul>
      <Beer />
      <Noodles />
    </ul>
);

// make React components for items in GroceryList
var Beer = () => (
  <li>Beer, but now it's own React component</li>
);

var Noodles = () => (
  <li>Noodles, but now it's own React component</li>
);

// render GroceryList onto div tag in index.html with id of app
ReactDOM.render(<GroceryList />, document.getElementById("app"));
