document.getElementById("displayButton").addEventListener("click", function() {
    // Get the number from the input box
    const number = document.getElementById("numberInput").value;

    // Display the number in the display area
    document.getElementById("displayArea").textContent = `Amount spent: ${number}`;

    // Get the number from the input box
    const date = document.getElementById("dayInput").value;

    // Display the number in the display area
    document.getElementById("displayAreaDate").textContent = `Day bought: ${date}`;

});

document.getElementById("updateButton").addEventListener("click", function() {
    // Get the current progress and total amount from the input fields
    const currentProgress = parseInt(document.getElementById("currentProgress").value);
    const totalAmount = parseInt(document.getElementById("totalAmount").value);

    // Calculate the progress percentage
    const progressPercentage = Math.min((currentProgress / totalAmount) * 100, 100);

    // Update the progress bar width
    document.getElementById("progressBar").style.width = `${progressPercentage}%`;

    // Update the progress text
    document.getElementById("progressText").textContent = `Progress: ${currentProgress} / ${totalAmount} (${Math.round(progressPercentage)}%)`;
});
