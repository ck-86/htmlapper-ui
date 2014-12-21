/*** @jsx React.DOM */

var React = require('react');

var Intro = React.createClass({
	render: function(){
		return(
			<div className="intro">
				<h1>Lets build mobile app!</h1>
					<h3 className="intro-caption">
						Now web developers can easily build mobile apps.
					</h3>
				
					<div>
						<a href="#how_it_works" className="button-bg">How it works</a>
						<a href="#lets_upload_your_app" className="button-bg">
							Lets get start
						</a>
					</div>
			</div>
		);
	}
});

module.exports = Intro;