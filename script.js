const apiURL = "https://api.msigma.in/btech/v2/branches/";

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  })
  .then((data) => {
    if (data.status === "success") {
      const branches = data.branches;
      branches.slice(0, 10).forEach((branch) => {
        var container = document.querySelector(`.container`);
        const branchId = branch.id;
        const branchName = branch.name;
        const branchShortName = branch.short;

        var divItem = document.createElement("div");
        var courseName = document.createElement("p");
        var price = document.createElement("p");
        var ApplyButton = document.createElement("button");

        ApplyButton.innerHTML = '<a href="#">Apply Now</a>';
        courseName.textContent = branchName;
        price.textContent = "Fee starting at ₹799 per subject";
        divItem.className = "course-item";
        divItem.textContent = branchShortName;

        const randomTextColor = getRandomColor();
        divItem.style.color = randomTextColor;

        divItem.appendChild(courseName);
        divItem.appendChild(ApplyButton);
        divItem.appendChild(price);
        container.appendChild(divItem);
      });
    } else {
      console.error("API returned an error status.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
