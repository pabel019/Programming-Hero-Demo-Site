const milestonesData = JSON.parse(data).data;

// loading milestones

function loadingMilestones() {
	const milestones = document.querySelector(".milestones");

	milestones.innerHTML = `${milestonesData
		.map(function (milestone) {
			return `<div class="milestone border-b  id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMilestones(this , ${
				milestone._id
			})"></div>
      <div onclick = "openMilestone(this , ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules
				.map(function (module) {
					return `<div class="module border-b">
          <p>${module.name}</p>
        </div>`;
				})
				.join("")}
    </div>
  </div>`;
		})
		.join("")}`;
}

// openMilestone

function openMilestone(milestoneElement, id) {
	const currentPanel = milestoneElement.parentNode.nextElementSibling;
	const shownPanel = document.querySelector(".show");
	const active = document.querySelector(".active");

	if (active && !milestoneElement.classList.contains("active")) {
		active.classList.remove("active");
	}
	milestoneElement.classList.toggle("active");

	if (shownPanel && !currentPanel.classList.contains("show")) {
		shownPanel.classList.remove("show");
	}
	currentPanel.classList.toggle("show");

	showMilestone(id);
}

function showMilestone(id) {
	const milestoneImage = document.querySelector(".milestoneImage");
	const title = document.querySelector(".title");
	const details = document.querySelector(".details");

	milestoneImage.style.opacity = "0";
	milestoneImage.src = milestonesData[id].image;
	title.innerText = milestonesData[id].name;
	details.innerText = milestonesData[id].description;
}

// event listen

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
	this.style.opacity = "1";
};

function markMilestones(checkbox, id) {
	const mileStonesList = document.querySelector(".milestones");
	const doneList = document.querySelector(".doneList");
	const item = document.getElementById(id);

	if (checkbox.checked) {
		mileStonesList.removeChild(item);
		doneList.appendChild(item);
	} else {
		mileStonesList.appendChild(item);
		doneList.removeChild(item);
	}
}
// function Call
loadingMilestones();
