const loadTools = async () => {
	const url = 'https://openapi.programming-hero.com/api/ai/tools';
	const res = await fetch(url);
	const data = await res.json();
	displayTools(data.data.tools);
};
const displayTools = (tools) => {
	console.log(tools);
	const toolsContainer = document.getElementById('tools-container');
	// show All
	const showAll = document.getElementById('show-all');
	if (tools.length > 6) {
		tools = tools.slice(0, 6);
		showAll.classList.remove('d-none');
	} else {
		showAll.classList.add('d-none');
	}
	tools.forEach((tool) => {
		console.log(tool);
		const toolsDiv = document.createElement('div');
		toolsDiv.classList.add('col');
		toolsDiv.innerHTML = `
        <div class="card h-100">
            <img src="${tool.image}" class="card-img-top " alt="..." />
            <div class="card-body">
                <h5 class="card-title fs-2">Features</h5>
                <p class="card-text">
                    1. ${tool.features[0]}
                </p>
                <p class="card-text">
                    1. ${tool.features[2]}
                </p>
                <p class="card-text">
                    1. ${tool.features[3]}
                </p>
            </div>
            <hr>
            <div class="d-flex  justify-content-between align-items-center mx-4"  >
                <div>
                    <h5 class="card-title fs-2 my-4">${tool.name}</h5>
                    <p class="my-4"> <i class="fa-regular fa-calendar-days"></i> ${tool.published_in}</p>
                </div>
                <div>
                    <i class="fa-solid fa-arrow-right fs-2 text-warning"></i>
                </div>
            </div>
        </div>
        `;
		toolsContainer.appendChild(toolsDiv);
	});
};

loadTools();
