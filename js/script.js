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
        <div class="card h-100">
            <img src="${tool.image}" class="card-img-fluid h-100" alt="..." />
            <div class="card-body">
                <h5 class="card-title fs-2">Features</h5>
                <p class="card-text">
                    1. ${tool.features[0]}
                </p>
                <p class="card-text">
                    2. ${tool.features[1]}
                </p>
                <p class="card-text">
                    3. ${tool.features[2]}
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
	aiUniverseAll();
	const btnShow = document.getElementById('show-all');
	btnShow.classList.add('d-none');
});
aiUniverse();
