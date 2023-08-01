function plotGraph() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const maxValue = parseFloat(document.getElementById("maxValue").value);

  // Check if input value is greater than max value
  if (inputValue > maxValue) {
    alert("Input value cannot be greater than max value.");
    return;
  }

  // Calculate percentage of input value and max value
  const inputPercentage = (inputValue / maxValue) * 100;
  const maxPercentage = 100;

  // Set height of bars based on the percentage
  document.getElementById("inputBar").style.height = `${inputPercentage}%`;
  document.getElementById("maxBar").style.height = `${maxPercentage}%`;

  // Set vertical gradient background for the input bar using jQuery
  const color1 = "#FFFFFF";
  const color2 = "#C2E3FF";
  const color3 = "#008CFE";
  const color4 = "#003F73";

  const gradient = `linear-gradient(${180}deg, ${color1}, ${color2}, ${color3}, ${color4})`;

  $("#inputBar").css({
    backgroundImage: gradient,
    backgroundSize: "100% 100%",
    backgroundPosition: "0% 100%",
  });

  const currentPercentage =
    ($("#inputBar").height() / $(".graph").height()) * 100;
  const targetPercentage = inputPercentage;
  const speed = 0.5; // Adjust speed for smoothness (0.1 to 1)

  let currentStep = 0;
  const totalSteps = Math.abs(currentPercentage - targetPercentage) / speed;

  const interval = setInterval(function () {
    const newPercentage =
      currentPercentage +
      ((targetPercentage - currentPercentage) / totalSteps) * currentStep;
    $("#inputBar").css("backgroundPosition", `0% ${100 - newPercentage}%`);
    currentStep++;
    if (currentStep >= totalSteps) {
      clearInterval(interval);
    }
  }, 10);
}
