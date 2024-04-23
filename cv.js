// Get references to the "Download CV" buttons by their unique IDs
const downloadButtonHome = document.getElementById("download-cv-home");
const downloadButtonAbout = document.getElementById("download-cv-about");
const downloadButtonContact = document.getElementById("download-cv-contact");

// Define a common function for downloading the CV
function downloadCV(fileUrl) {
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary URL for the blob
            const objectURL = URL.createObjectURL(blob);

            // Create a link element for the download
            const downloadLink = document.createElement("a");
            downloadLink.href = objectURL;
            downloadLink.download = "shekharPowar.pdf"; // Specify the default download file name

            // Trigger a click event on the link to initiate the download
            downloadLink.click();

            // Revoke the object URL to release resources
            URL.revokeObjectURL(objectURL);
        })
        .catch(error => {
            console.error("Error downloading the file:", error);
        });
}

// Add click event listeners to the buttons
downloadButtonHome.addEventListener("click", function() {
    // Specify the URL of the file you want to download
    const fileUrl = "shekharPowar.pdf"; // Replace with the actual path to your file

    // Call the common download function
    downloadCV(fileUrl);
});

downloadButtonAbout.addEventListener("click", function() {
    // Specify the URL of the file you want to download for the "About" section
    const fileUrl = "shekharPowar.pdf"; // Replace with the actual path to your file

    // Call the common download function
    downloadCV(fileUrl);
});

downloadButtonContact.addEventListener("click", function() {
    // Specify the URL of the file you want to download for the "Contact" section
    const fileUrl = "shekharPowar.pdf"; // Replace with the actual path to your file

    // Call the common download function
    downloadCV(fileUrl);
});
