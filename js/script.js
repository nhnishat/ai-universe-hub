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
	tools.forEach((tool) => {
		// console.log(tool);
		const toolsDiv = document.createElement('div');
		toolsDiv.classList.add('col');
		toolsDiv.innerHTML = `
        <div class="card h-100 shadow-lg rounded">
            <img src="${tool.image}" class="card-img-fluid h-100" alt="..." />
            <div class="card-body">
                <h5 class="card-title fs-2 fw-semibold">Features</h5>
                <p class="card-text ">
                    1. ${tool.features[0] ? tool.features[0] : 'No Data Found'}
                </p>
                <p class="card-text">
                    2. ${tool.features[1] ? tool.features[1] : 'No Data Found'}
                </p>
                <p class="card-text">
                    3. ${tool.features[2] ? tool.features[2] : 'No Data Found'}
                </p>
            </div>
            <hr>
            <div class="d-flex  justify-content-between align-items-center mx-4"  >
                <div>
                    <h5 class="card-title fs-2 my-4 fw-semibold">${
											tool.name
										}</h5>
                    <p class="my-4"> <i class="fa-regular fa-calendar-days"></i> ${
											tool.published_in
										}</p>
                </div>
                <div>
                    <i onclick="loadToolsDetails('${
											tool.id
										}')" class="fa-solid fa-arrow-right fs-2 text-warning" data-bs-target="#toolsDetailsModal"data-bs-toggle="modal" data-bs-target="#toolsDetailsModal"></i>
					
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
const displayToolsDetails = (SingleTool) => {
	console.log(SingleTool);
	const cardDescription = document.getElementById('card-description');
	cardDescription.innerHTML = `
	<p class="mt-2 fw-semibold">${SingleTool.description}</p>
	`;
	const cardContentSection = document.getElementById('card-content-section');
	cardContentSection.innerHTML = `
	<div class="d-flex justify-content-between align-items-center my-5">
		<div class="  text-center rounded text-success fw-bold fs-4"> 
			<p>${SingleTool.pricing[0].plan}</br>
			${SingleTool.pricing[0].price}</p>
		</div>
		<div class="  text-center rounded  text-warning fw-bold fs-4">
			<p>${SingleTool.pricing[1].plan} </br>
			${SingleTool.pricing[1].price} </p>
		</div>
		<div class="  text-center rounded text-danger fw-bold fs-5">
			<p>${SingleTool.pricing[2].plan} </br>
			${SingleTool.pricing[2].price} </p>
		</div>
	</div>
	`;
	const featuresIntegrationsSection = document.getElementById(
		'features-integrations-section'
	);
	featuresIntegrationsSection.innerHTML = `
	<div class="d-flex justify-content-between align-items-center g-5">
		<div>
			<h5 class="card-title fs-2 fw-semibold">Features</h5>
			<ul>
				<li class="mt-4 mb-2">${SingleTool.features[1].feature_name}</li>		
			</ul>
			<ul>
				<li class="my-2">${SingleTool.features[2].feature_name}</li>		
			</ul>
			<ul>
				<li class="my-2">${SingleTool.features[3].feature_name}</li>		
			</ul>
		</div>
			<div>
				<h5 class="card-title fs-2 fw-semibold">Integrations</h5>
				<ul>
					<li class="my-2">${
						SingleTool.integrations[0]
							? SingleTool.integrations[0]
							: 'No Data found'
					}</li>
					<li class="my-2"> ${
						SingleTool.integrations[1]
							? SingleTool.integrations[1]
							: 'No Data found'
					}</li>
					<li class="my-2">${
						SingleTool.integrations[2]
							? SingleTool.integrations[2]
							: 'No Data found'
					}</li>
					<li class="my-2">${
						SingleTool.integrations[3]
							? SingleTool.integrations[3]
							: 'No Data found'
					}</li>
					<li class="my-2">${
						SingleTool.integrations[4]
							? SingleTool.integrations[4]
							: 'No Data found'
					}</li>
				</ul>
		</div>
	</div>
	`;

	// Right Card modal
	const accuracyShow = document.getElementById('accuracy-show');
	accuracyShow.innerHTML = `
	${
		SingleTool.accuracy.score * 100 > 0 ? SingleTool.accuracy.score * 100 : 'No'
	}% accuracy
	`;
	const imageAdded = document.getElementById('modal-img');
	imageAdded.innerHTML = `
	<img src="${SingleTool.image_link[0]}" class="img-fluid h-100" alt="">
	`;

	const modalTextInput = document.getElementById('modal-text-input');
	modalTextInput.innerHTML = `
	<h3 class="mt-4 mb-4 fw-bold">${SingleTool.input_output_examples[1].input} </h3>
	`;
	const modalTextOutput = document.getElementById('modal-text-output');
	modalTextOutput.innerHTML = `
	<p>${SingleTool.input_output_examples[1].output}</p>
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
aiUniverse();
