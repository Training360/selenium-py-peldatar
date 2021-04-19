class Products extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
    {
      id: 1,
      category: 'Sporting Goods',
      price: '49.99',
      qty: 12,
      name: 'football' },
    {
      id: 2,
      category: 'Sporting Goods',
      price: '9.99',
      qty: 15,
      name: 'baseball' },
    {
      id: 3,
      category: 'Sporting Goods',
      price: '29.99',
      qty: 14,
      name: 'basketball' },
    {
      id: 4,
      category: 'Electronics',
      price: '99.99',
      qty: 34,
      name: 'iPod Touch' },
    {
      id: 5,
      category: 'Electronics',
      price: '399.99',
      qty: 12,
      name: 'iPhone 5' },
    {
      id: 6,
      category: 'Electronics',
      price: '199.99',
      qty: 23,
      name: 'nexus 7' }];



  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "",
      category: "",
      qty: 0 };

    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value };

    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {

      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState({ products: newProducts });
    //  console.log(this.state.products);
  }
  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(SearchBar, { filterText: this.state.filterText, onUserInput: this.handleUserInput.bind(this) }), /*#__PURE__*/
      React.createElement(ProductTable, { onProductTableUpdate: this.handleProductTable.bind(this), onRowAdd: this.handleAddEvent.bind(this), onRowDel: this.handleRowDel.bind(this), products: this.state.products, filterText: this.state.filterText })));



  }}


class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("input", { type: "text", placeholder: "Search...", value: this.props.filterText, ref: "filterTextInput", onChange: this.handleChange.bind(this) })));




  }}



class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return /*#__PURE__*/React.createElement(ProductRow, { onProductTableUpdate: onProductTableUpdate, product: product, onDelEvent: rowDel.bind(this), key: product.id });
    });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/


      React.createElement("button", { type: "button", onClick: this.props.onRowAdd, className: "btn btn-success pull-right" }, "Add"), /*#__PURE__*/
      React.createElement("table", { className: "table table-bordered" }, /*#__PURE__*/
      React.createElement("thead", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Name"), /*#__PURE__*/
      React.createElement("th", null, "price"), /*#__PURE__*/
      React.createElement("th", null, "quantity"), /*#__PURE__*/
      React.createElement("th", null, "category"))), /*#__PURE__*/



      React.createElement("tbody", null,
      product))));







  }}



class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return /*#__PURE__*/(
      React.createElement("tr", { className: "eachRow" }, /*#__PURE__*/
      React.createElement(EditableCell, { onProductTableUpdate: this.props.onProductTableUpdate, cellData: {
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id } }), /*#__PURE__*/

      React.createElement(EditableCell, { onProductTableUpdate: this.props.onProductTableUpdate, cellData: {
          type: "price",
          value: this.props.product.price,
          id: this.props.product.id } }), /*#__PURE__*/

      React.createElement(EditableCell, { onProductTableUpdate: this.props.onProductTableUpdate, cellData: {
          type: "qty",
          value: this.props.product.qty,
          id: this.props.product.id } }), /*#__PURE__*/

      React.createElement(EditableCell, { onProductTableUpdate: this.props.onProductTableUpdate, cellData: {
          type: "category",
          value: this.props.product.category,
          id: this.props.product.id } }), /*#__PURE__*/

      React.createElement("td", { className: "del-cell" }, /*#__PURE__*/
      React.createElement("input", { type: "button", onClick: this.onDelEvent.bind(this), value: "X", className: "del-btn" }))));




  }}


class EditableCell extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("td", null, /*#__PURE__*/
      React.createElement("input", { type: "text", name: this.props.cellData.type, id: this.props.cellData.id, value: this.props.cellData.value, onChange: this.props.onProductTableUpdate })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Products, null), document.getElementById('container'));

/*
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/