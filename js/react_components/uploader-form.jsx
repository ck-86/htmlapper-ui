/*** @jsx React.DOM */

var React = require('react');
//jQuery = $ = require('jquery');
require('../jquery.form.js');


var UploaderForm = React.createClass({

	getInitialState: function(){
		this.fileType     = '';
		this.errorMessage = [];
		return {status:null};
	},

	validateEmail : function (email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}, 

	onFileSelect: function(e){
		var self = this;
		// Span
	    var span = document.getElementsByClassName('upload-path');
	    // Button
	    var uploader = document.getElementsByName('upload');
	    // On change
			var file = uploader[0].files[0];

			self.fileType = file.type;
			console.log(file.type);

			if(file.type==='application/zip'){
				span[0].innerHTML = "<strong>"+file.name+"<strong/>" + " is ready to upload.";
			} else {
				span[0].innerHTML = "<p class='form-error'>File is not supported. Please select zip file.</p>";
			}
	},

	onSubmit: function(e){
		var self = this;
		e.preventDefault();

		//validate form
		var form = {};
			form.appName  	= document.getElementsByName('appName')[0].value;
			form.appEmail 	= document.getElementsByName('appEmail')[0].value; 
			form.appWebsite = document.getElementsByName('appWebsite')[0].value;
			form.uploadFile = document.getElementsByName('upload')[0].value;


		console.log('File Type', self.fileType);

		// Check form feild
		if(!form.appName){
			self.errorMessage.push('Application Name Is Required');
		}

		if(!form.appEmail){
			self.errorMessage.push('Email address is required.');
		} else {
			if(!self.validateEmail(form.appEmail)){
				self.errorMessage.push('Email is invalid.');
			}
		}

		if(!form.uploadFile || self.fileType!=='application/zip'){
			self.errorMessage.push('Please select your zip file.');
		}

		// Show error message if form is not valid
		if(self.errorMessage.length > 0){
			console.log('Form is not valid',self.errorMessage);

			var errorString = '';

			self.errorMessage.map(function(error){
				errorString += '<li>'+error+'</li>';
			});

			errorString = '<ul>'+errorString+'</ul>'

			this.refs.errorMessage.getDOMNode().innerHTML = errorString;
			console.log('REFS',this.refs.errorMessage.getDOMNode().innerHTML);

			self.errorMessage = []; //reset
		} else {
			// Start Uploading
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
			
		}

	},

	removeError:function(){
		this.refs.errorMessage.getDOMNode().innerHTML = "";
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
					
					<div ref="errorMessage" className="errorMessage"></div>

					<form className="form" onSubmit={this.onSubmit} onFocus={this.removeError} ref="uploader" id="uploader" encType="multipart/form-data"  method="POST" action="/upload">
						

						<input type="text" className="form-input" name="appName" placeholder="Application Name"/>
						
						<input type="text" className="form-input" name="appEmail" placeholder="Your Email Address"/>

						<input type="text" className="form-input" name="appWebsite" placeholder="Reverse domain-style identifier (com.example.app)"/>

						<div className="browse-wrap">
						    <div className="title">Choose a file to upload</div>
						    <input type="file" name="upload" className="upload" title="Choose a file to upload" onChange={this.onFileSelect} />
							<span className="upload-path"></span>
						</div>

						
						<input type="submit" className="button-bg" value="submit" />
					</form>
				</div>
			</div>
		);
	}
});

module.exports = UploaderForm;