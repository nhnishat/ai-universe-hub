const loadTools = async () => {
	const url = 'https://openapi.programming-hero.com/api/ai/tools';
	const res = await fetch(url);
	const data = await res.json();
	displayTools(data.data.tools);
};
const displayTools = (tools) => {
	console.log(tools);
	const toolsContainer = document.getElementById('tools-container');
	toolsContainer.innerHTML = '';
	tools.forEach((singleTool) => {
		// console.log(tool);
		const toolsDiv = document.createElement('div');
		toolsDiv.classList.add('col');
		toolsDiv.innerHTML = `
        <div class="card h-100">
            <img src="${singleTool.image}" class="card-img-fluid h-100" alt="..." />
            <div class="card-body">
                <h5 class="card-title fs-2 fw-semibold">Features</h5>
                <p class="card-text">
                    1. ${singleTool.features[0]}
                </p>
                <p class="card-text">
                    2. ${singleTool.features[1]}
                </p>
                <p class="card-text">
                    3. ${singleTool.features[2]}
                </p>
            </div>
            <hr>
            <div class="d-flex  justify-content-between align-items-center mx-4"  >
                <div>
                    <h5 class="card-title fs-2 my-4 fw-semibold">${singleTool.name}</h5>
                    <p class="my-4"> <i class="fa-regular fa-calendar-days"></i> ${singleTool.published_in}</p>
                </div>
                <div>
                    <i onclick="loadToolsDetails('${singleTool.id}')" class="fa-solid fa-arrow-right fs-2 text-warning" data-bs-target="#toolsDetailsModal"data-bs-toggle="modal" data-bs-target="#toolsDetailsModal"></i>
					
                </div>
            </div>
        </div>
        `;
		toolsContainer.appendChild(toolsDiv);
	});
	// Stop Loader
	toggleSpinner(false);
};
// Modal
const loadToolsDetails = async (id) => {
	const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	displayToolsDetails(data.data);
};
const displayToolsDetails = (tool) => {
	console.log(tool);
	const accuracyShow = document.getElementById('accuracy-show');
	accuracyShow.innerHTML = `
	${tool.accuracy.score * 100 > 0 ? tool.accuracy.score * 100 : 'No'}% accuracy
	`;
	const imageAdded = document.getElementById('modal-img');
	imageAdded.innerHTML = `
	<img src="${tool.image_link[0]}" class="img-fluid h-100" alt="">
	`;

	const modalTextInput = document.getElementById('modal-text-input');
	modalTextInput.innerHTML = `
	</h3>${tool.input_output_examples[1].input} </h3>
	`;
	const modalTextOutput = document.getElementById('modal-text-output');
	modalTextOutput.innerHTML = `
	<p>${tool.input_output_examples[1].output}</p>
	`;
};
// Slice section
const aiUniverse = async () => {
	const url = 'https://openapi.programming-hero.com/api/ai/tools';
	const res = await fetch(url);
	const data = await res.json();
	displayTools(data.data.tools.slice(0, 6));
};

const aiUniverseAll = async () => {
	const url = 'https://openapi.programming-hero.com/api/ai/tools';
	const res = await fetch(url);
	const data = await res.json();
	displayTools(data.data.tools);
};
document.getElementById('btn-show-all').addEventListener('click', function () {
	toggleSpinner(true);
	aiUniverseAll();
	const btnShow = document.getElementById('show-all');
	btnShow.classList.add('d-none');
});
// spinner section
const toggleSpinner = (isLoading) => {
	const loaderSection = document.getElementById('loader-section');
	if (isLoading) {
		loaderSection.classList.remove('d-none');
	} else {
		loaderSection.classList.add('d-none');
	}
};
// aiUniverse();
