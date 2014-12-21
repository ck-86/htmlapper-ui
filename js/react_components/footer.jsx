/*** @jsx React.DOM */

var React = require('react');

var Footer = React.createClass({
	render: function () {
		return(
			<div className="footer">
				<p className="footer-header">Get in touch with us</p>
				<p className="footer-message-box">
					Thanks for using our site. We hope you enjoyed making your app.
					If you have any suggestion to improve our service 
					contact us at htmlapper@gmx.com
				</p>
			</div>
		);
	}
});

module.exports = Footer;