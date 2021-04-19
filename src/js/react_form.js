function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //In the Settings for this pen, I've selected Babel for a Javascript preprocessor. 
//I also brought in  'React' and 'ReactDOM' libraries via the Codepen's 'Quick Add' feature.
//The React CDN allows me to construct the Application component used to create the form.
//The ReactDOM CDN is necessary to access the React's virtual DOM and renders the JSX to the page.


class Application extends React.Component {
  constructor(props) {
    super(props);

    //the Application component's state is below, which records the user's input. 
    _defineProperty(this, "inputCheck",











    e => {
      let filter = e.target.getAttribute('filter');
      e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '');
      this.setState({ [e.target.name]: e.target.value });

    });_defineProperty(this, "submitCheck",

    () => {

      if (!this.state.firstName || !this.state.lastName) {
        alert("A name field is empty.");
      } else if (this.state.phone.length < 10 || !this.state.phone) {
        alert("Phone number is not long enough.");
      } else if (!this.state.email.match(/@./g)) {
        alert("Email is in the wrong format.");
      } else {
        this.setState({ display: true });
      }
    });_defineProperty(this, "resetForm",

    () => {
      this.setState({
        display: !this.state.display,
        firstName: '',
        lastName: '',
        phone: 0,
        email: '' });

    });this.state = { //the display property on state allows me to toggle the view of the form vs. the view of the user's data
      display: false, firstName: "", lastName: "", phone: 0, email: "" };} //the displayForm function returns the JSX needed to display the form, and record the user's information
  displayForm() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "form" }, /*#__PURE__*/
      React.createElement("div", { className: "header" }, /*#__PURE__*/
      React.createElement("h1", null, "Welcome!"), /*#__PURE__*/
      React.createElement("p", null, "Please provide your information below.")), /*#__PURE__*/

      React.createElement("div", { className: "inputcontainer" }, /*#__PURE__*/

      React.createElement("input", { filter: "[^a-zA-Z ]", name: "firstName", placeholder: "First Name", onChange: this.inputCheck }), /*#__PURE__*/
      React.createElement("input", { filter: "[^a-zA-Z ]", name: "lastName", placeholder: "Last Name", onChange: this.inputCheck }), /*#__PURE__*/
      React.createElement("input", { filter: "[^0-9]", maxLength: "10", name: "phone", placeholder: "Phone Number", onChange: this.inputCheck }), /*#__PURE__*/
      React.createElement("input", { placeholder: "Email Address", onChange: e => {this.setState({ email: e.target.value });} }), /*#__PURE__*/


      React.createElement("button", { onClick: this.submitCheck }, "Submit"))));



  }

  /* Below is my displayData function. It returns the JSX needed to display the user's info after it is recorded. */
  displayData() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "form" }, /*#__PURE__*/


      React.createElement("p", null, this.state.lastName, ", ", this.state.firstName), /*#__PURE__*/
      React.createElement("p", null, this.state.phone, " | ", this.state.email), /*#__PURE__*/



      React.createElement("button", { onClick: this.resetForm }, "Reset")));


  }
  render() {
    {/* Here in the render method, I'm returning a ternary operator that displays either the form, or the user's data, depending on the boolean value that is currently set to this.state.display*/}
    return this.state.display ? this.displayData() : this.displayForm();
  }}


{/*Here, I'm invoking the ReactDOM and connected. Here is where this Application component is being connected to the HTML portion of the pen, and thus displaying the form on the page */}
ReactDOM.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById('app'));