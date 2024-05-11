window.addEventListener('load', function(e) {
	function getAllEvents() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '/api/pgdaScores');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				let events = JSON.parse(xhr.responseText);
				displayEvents(events);
			}
		};
		xhr.send();
	}

	function displayEvents(events) {
		let tableBody = document.querySelector('#eventTable tbody');
		tableBody.innerHTML = '';
		events.forEach(function(event) {
			let row = `<tr data-id="${event.id}">
                           <td>${event.id}</td>
                           <td>${event.score}</td>
                           <td>${event.player_name}</td>
                           <td>${event.tournament_name}</td>
                           <td>${event.tournament_date}</td>
                           <td>${event.league}</td>
                           <td>${event.tournament_result}</td>
                           <td>${event.national_ranking}</td>
                           <td><button class="deleteBtn" data-id="${event.id}">Delete</button></td>
                           <td><button class="editBtn" data-id="${event.id}">Edit</button></td>
                       </tr>`;
			tableBody.innerHTML += row;
		});

		document.querySelectorAll('.deleteBtn').forEach(function(button) {
			button.addEventListener('click', function() {
				let eventId = this.getAttribute('data-id');
				deleteEvent(eventId);
			});
		});

		document.querySelectorAll('.editBtn').forEach(function(button) {
			button.addEventListener('click', function() {
				let eventId = this.getAttribute('data-id');
				editEvent(eventId);
			});
		});
	}

	document.querySelector('#createForm').addEventListener('submit', function(event) {
		event.preventDefault();

		let formData = new FormData(this);
		let json = {};
		formData.forEach(function(value, key) {
			json[key] = value;
		});

		let xhr = new XMLHttpRequest();
		xhr.open('POST', '/api/pgdaScores');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				getAllEvents();
			}
		};
		xhr.send(JSON.stringify(json));
	});

	function deleteEvent(eventId) {
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', '/api/pgdaScores/' + eventId);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				getAllEvents();
			}
		};
		xhr.send();
	}

	function editEvent(eventId) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '/api/pgdaScores/' + eventId);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let event = JSON.parse(xhr.responseText);
					document.getElementById('editScore').value = event.score;
					document.getElementById('editPlayerName').value = event.player_name;
					document.getElementById('editTournamentName').value = event.tournament_name;
					document.getElementById('editTournamentDate').value = event.tournament_date;
					document.getElementById('editLeague').value = event.league;
					document.getElementById('editTournamentResult').value = event.tournament_result;
					document.getElementById('editNationalRanking').value = event.national_ranking;
					document.getElementById('editModal').style.display = 'block';
					document.getElementById('editForm').addEventListener('submit', function(e) {
						e.preventDefault();
						let updatedEvent = {
							score: document.getElementById('editScore').value,
							player_name: document.getElementById('editPlayerName').value,
							tournament_name: document.getElementById('editTournamentName').value,
							tournament_date: document.getElementById('editTournamentDate').value,
							league: document.getElementById('editLeague').value,
							tournament_result: document.getElementById('editTournamentResult').value,
							national_ranking: document.getElementById('editNationalRanking').value
						};
						let putXhr = new XMLHttpRequest();
						putXhr.open('PUT', '/api/pgdaScores/' + eventId);
						putXhr.setRequestHeader('Content-Type', 'application/json');
						putXhr.onreadystatechange = function() {
							if (putXhr.readyState === 4 && putXhr.status === 200) {
								document.getElementById('editModal').style.display = 'none';
								getAllEvents();
							}
						};
						putXhr.send(JSON.stringify(updatedEvent));
					});
				} else {
					console.error('Failed to retrieve event data');
				}
			}
		};
		xhr.send();
	}

	function generateCreateForm() {
		let form = document.createElement('form');
		form.id = 'createForm';

		let label = document.createElement('label');
		label.textContent = 'Score:';
		form.appendChild(label);

		let input = document.createElement('input');
		input.type = 'text';
		input.id = 'score';
		input.name = 'score';
		input.required = true;
		form.appendChild(input);

		let submitBtn = document.createElement('button');
		submitBtn.type = 'submit';
		submitBtn.textContent = 'Create Event';
		form.appendChild(submitBtn);

		return form;
	}

	function generateEventTable(events) {
		let table = document.createElement('table');
		table.id = 'eventTable';
		table.classList.add('table', 'mt-3');

		let tableHead = document.createElement('thead');
		let headRow = document.createElement('tr');
		['ID', 'Score', 'Player Name', 'Tournament Name', 'Tournament Date', 'League', 'Tournament Result', 'National Ranking', 'Delete', 'Edit'].forEach(function(heading) {
			let th = document.createElement('th');
			th.textContent = heading;
			headRow.appendChild(th);
		});
		tableHead.appendChild(headRow);
		table.appendChild(tableHead);

		let tableBody = document.createElement('tbody');
		events.forEach(function(event) {
			let row = tableBody.insertRow();
			row.dataset.id = event.id;

			let rowData = [event.id, event.score, event.player_name, event.tournament_name, event.tournament_date, event.league, event.tournament_result, event.national_ranking];

			rowData.forEach(function(data) {
				let cell = row.insertCell();
				cell.textContent = data;
			});

			let deleteBtn = document.createElement('button');
			deleteBtn.classList.add('deleteBtn');
			deleteBtn.dataset.id = event.id;
			deleteBtn.textContent = 'Delete';
			let deleteCell = row.insertCell();
			deleteCell.appendChild(deleteBtn);

			let editBtn = document.createElement('button');
			editBtn.classList.add('editBtn');
			editBtn.dataset.id = event.id;
			editBtn.textContent = 'Edit';
			let editCell = row.insertCell();
			editCell.appendChild(editBtn);
		});

		table.appendChild(tableBody);
		return table;
	}

	function generateEditModal() {
		let modal = document.createElement('div');
		modal.id = 'editModal';
		modal.classList.add('modal');

		let modalDialog = document.createElement('div');
		modalDialog.classList.add('modal-dialog');

		let modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		let modalHeader = document.createElement('div');
		modalHeader.classList.add('modal-header');
		let modalTitle = document.createElement('h5');
		modalTitle.classList.add('modal-title');
		modalTitle.textContent = 'Edit Event';
		modalHeader.appendChild(modalTitle);
		let closeButton = document.createElement('button');
		closeButton.type = 'button';
		closeButton.classList.add('btn-close');
		closeButton.setAttribute('data-bs-dismiss', 'modal');
		closeButton.setAttribute('aria-label', 'Close');
		modalHeader.appendChild(closeButton);
		modalContent.appendChild(modalHeader);

		let modalBody = document.createElement('div');
		modalBody.classList.add('modal-body');

		let editForm = document.createElement('form');
		editForm.id = 'editForm';

		let inputs = ['Score', 'Player Name', 'Tournament Name', 'Tournament Date', 'League', 'Tournament Result', 'National Ranking'];
		inputs.forEach(function(input) {
			let label = document.createElement('label');
			label.textContent = input + ':';
			editForm.appendChild(label);

			let inputField = document.createElement('input');
			inputField.type = 'text';
			inputField.id = 'edit' + input.replace(/\s+/g, '');
			inputField.name = 'edit' + input.replace(/\s+/g, '');
			editForm.appendChild(inputField);
		});

		let saveBtn = document.createElement('button');
		saveBtn.type = 'submit';
		saveBtn.textContent = 'Save Changes';
		editForm.appendChild(saveBtn);

		modalBody.appendChild(editForm);
		modalContent.appendChild(modalBody);
		modalDialog.appendChild(modalContent);
		modal.appendChild(modalDialog);

		return modal;
	}

	let container = document.querySelector('.container');
	container.appendChild(generateCreateForm());

	let exampleEvents = [
		{ id: 1, score: 75, player_name: 'Joe Snuffy ', tournament_name: 'Tournament Name', tournament_date: '2024-05-10', league: 'MPO', tournament_result: 3, national_ranking: 1 },
		{ id: 2, score: 56, player_name: 'Jane doe', tournament_name: 'Tournament Name', tournament_date: '2024-05-11', league: 'FPO', tournament_result: 6, national_ranking: 2 }
	];
	container.appendChild(generateEventTable(exampleEvents));
	container.appendChild(generateEditModal());

	document.querySelector('#createForm').addEventListener('submit', function(event) {
		event.preventDefault();
	});

	container.addEventListener('click', function(event) {
		if (event.target.classList.contains('deleteBtn')) {
			let eventId = event.target.dataset.id;
		} else if (event.target.classList.contains('editBtn')) {
			let eventId = event.target.dataset.id;
		}
	});

	getAllEvents();
});
