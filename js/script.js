const loadTools = async () => {
	const url = 'https://openapi.programming-hero.com/api/ai/tools';
	const res = await fetch(url);
	const data = await res.json();
	displayTools(data.data.tools);
};
const displayTools = (data) => {
	console.log(data);
	const toolsContainer = document.getElementById('tools-container');
	data.forEach((tool) => {
		console.log(tool);
		const toolsDiv = document.createElement('div');
		toolsDiv.classList.add('col');
		toolsDiv.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
        </div>
        `;
		toolsContainer.appendChild(toolsDiv);
	});
};

loadTools();
