// TODO

// note: ES6 syntax, withou {} implicitly return


var GroceryList = () => (
  <div>
    <ListTitle />
    <ul>
      <Beer />
      <Noodles />
    </ul>
  </div>
);

var ListTitle = () => (
  <h2>Stuff to Buy</h2>
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
