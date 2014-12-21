/*** @jsx React.DOM */

var React = require('react');
//jQuery = $ = require('jquery');
require('../jquery.form.js');


var UploaderForm = React.createClass({

	getInitialState: function(){
		return {status:null};
	},

	onFileSelect: function(e){
		// Span
    var span = document.getElementsByClassName('upload-path');
    // Button
    var uploader = document.getElementsByName('upload');
    // On change
		var file = uploader[0].files[0];
		console.log(file);
		span[0].innerHTML = "<strong>"+file.name+"<strong/>" + " is ready to upload.";
	},

	onSubmit: function(e){
		var self = this;
		e.preventDefault();
		
		self.setState({status:"uploading"});

		$("#uploader").ajaxSubmit({
			error : function(xhr) {
				console.log("Error ", xhr.status);
			},
			uploadProgress: function(event, position, total, percentComplete) {
		        self.setState({status:'uploading', percent:percentComplete});
		    },
			success : function(response) {
				console.log("Upload done:", response);
				self.setState({status:"done"});
			}
		});

	},

	render:function(){
		if(this.state.status==='uploading'){

			var progressStyle = {
				width:this.state.percent+'%'
			}

			return(
				<div className="section" id="lets_upload_your_app">
					<div>
						<p className="section-header">Uploading</p>
						<div>
							Please wait your file is uploading...
						</div>
						<div className="progress">
							<div className="progress-bar" style={progressStyle} /> 
						</div>
					</div>
				</div>
			);
		}

		if(this.state.status==='done'){
			return(
				<div className="section" id="lets_upload_your_app">
					<div>
						<p className="section-header">Upload completed!</p>
						<div>
							We will soon email you you app (apk file).
						</div>
					</div>
				</div>
			);
		}


		return(
			<div className="section" id="lets_upload_your_app">
				<div>
					<p className="section-header">Lets upload your app!</p>
					<form className="form" onSubmit={this.onSubmit} ref="uploader" id="uploader" encType="multipart/form-data"  method="POST" action="/upload">
						<input type="text" className="form-input" name="appName" placeholder="Application Name"/>
						
						<input type="text" className="form-input" name="appEmail" placeholder="Your Email Address"/>

						<div className="browse-wrap">
						    <div className="title">Choose a file to upload</div>
						    <input type="file" name="upload" className="upload" title="Choose a file to upload" onChange={this.onFileSelect} />
						</div>
						<span className="upload-path"></span>
						
						<input type="submit" className="button-bg" value="submit" />
					</form>
				</div>
			</div>
		);
	}
});

module.exports = UploaderForm;