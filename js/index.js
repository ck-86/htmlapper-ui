/*** @jsx React.DOM */

jQuery = $ = require('jquery');
require('../css/style.css');
require('../css/animate.css');
require('./utils.js');
var React = require('react');


// Get all components
var Navbar 			= require('./react_components/navbar.jsx');
var Intro 			= require('./react_components/intro.jsx');
var Tutorial 		= require('./react_components/tutorial.jsx');
var UploaderForm 	= require('./react_components/uploader-form.jsx');
var Footer 			= require('./react_components/footer.jsx');


var Default = React.createClass({
	render : function(){
		return (
			<div>
				<Navbar />
				<Intro />
				<Tutorial />
				<UploaderForm />
				<Footer />
			</div>
		);
	}
});

React.render(<Default />, document.body);