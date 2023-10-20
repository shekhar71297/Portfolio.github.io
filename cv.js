

// Get a reference to the "Download CV" button by its ID
const downloadButton = document.getElementById("download-cv");

// Add a click event listener to the button
downloadButton.addEventListener("click", function() {
    // Specify the URL of the file you want to download
    const fileUrl = "Shekhar P Resume(Pune).pdf"; // Replace with the actual path to your file

    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary URL for the blob
            const objectURL = URL.createObjectURL(blob);

            // Create a link element for the download
            const downloadLink = document.createElement("a");
            downloadLink.href = objectURL;
            downloadLink.download = "Shekhar P Resume(Pune).pdf"; // Specify the default download file name

            // Trigger a click event on the link to initiate the download
            downloadLink.click();

            // Revoke the object URL to release resources
            URL.revokeObjectURL(objectURL);
        })
        .catch(error => {
            console.error("Error downloading the file:", error);
        });
});
