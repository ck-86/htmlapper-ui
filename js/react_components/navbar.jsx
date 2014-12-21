/*** @jsx React.DOM */

var React = require('react');

var Navbar = React.createClass({
	render: function(){
		return(
			<div className="nav-bar">
				<span className="nav-bar-brand"><b>html</b>apper</span>
				<span className="nav-bar-menu-panel">
				</span>
			</div>
		);
	}
})

module.exports = Navbar;