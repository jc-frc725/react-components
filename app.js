// TODO

// create a GroceryList component
// var GroceryList = () => { return
//     <ul>
//       <li>Beer</li>
//       <li>Noodles</li>
//     </ul>
// };

// note: ES6 syntax, withou {} implicitly return
var GroceryList = () => (
  <ul>
    <li>Beer</li>
    <li>Noodles</li>
  </ul>
);

// render GroceryList onto div tag in index.html with id of app
ReactDOM.render(<GroceryList />, document.getElementById("app"));
