function uploader(document) {
    // Span
    var span = document.getElementsByClassName('upload-path');
    // Button
    var uploader = document.getElementsByName('upload');
    // On change
    for (item in uploader) {
        // Detect changes
        uploader[item].onchange = function() {
            // Echo filename in span
            if (this.files[0]) {
                span[0].innerHTML = "<b>"+this.files[0].name + "</b> is ready to upload.";
            }
        }
    }

} uploader(document);
