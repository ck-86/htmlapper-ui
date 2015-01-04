/*** @jsx React.DOM */

var React = require('react');

var Tutorial = React.createClass({
	render: function(){
		return(
		<div className="section" id="how_it_works">
			<div>
				<p className="section-header">How it works</p>
				
				<p>
					<b>
						Its just like making a regular website using HTML, CSS and JavaScript.
					</b>
				</p>

				<ul className="tutorial-list">
					<li>
						Create a folder with your Project name and keep all your files (HTML,CSS,Images and JavaScipt files) in it.
						<p>
							<img src="images/demo1-1.png" alt="create a folder" className="tutorial-image"/>
						</p>
					</li>
					<li>
						Test it in your browser (make sure you have index.html file present).
					</li>
					<li>	
					 	Now zip your folder and upload to our site. thats it! we will email you your app (apk file).
					 	<p>
							<img src="images/demo2-2.png" alt="upload a project" className="tutorial-image" />
						</p>
					</li>
				</ul>
			</div>
		</div>
		);
	}
});

module.exports = Tutorial;