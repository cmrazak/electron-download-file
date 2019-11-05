const { ipcRenderer } = require("electron");
function downloadFile() {
    ipcRenderer.send("download", {
        url: "http://localhost:8080/downloadFile/Untitled.png",
        properties: { directory: "D:/test-app-sts/file" }
    });
}
ipcRenderer.on("download complete", (event, file) => {
    console.log(file); // Full file path
});

ipcRenderer.on("download progress", (event, progress) => {
    console.log(progress); // Progress in fraction, between 0 and 1
    const progressInPercentages = progress * 100; // With decimal point and a bunch of numbers
    const cleanProgressInPercentages = Math.floor(progress * 100); // Without decimal point
});

var downloadEl = document.getElementById('downloadBtn');
downloadEl.addEventListener('click', function () {
    downloadFile();
});