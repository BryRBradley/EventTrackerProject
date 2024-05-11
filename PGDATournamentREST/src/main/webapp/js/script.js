window.addEventListener('load', function(e) {
    // Function to fetch and display all events
    function getAllEvents() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/pgdaScores');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var events = JSON.parse(xhr.responseText);
                displayEvents(events);
            }
        };
        xhr.send();
    }

    // Function to display events in the table
    function displayEvents(events) {
        var tableBody = document.querySelector('#eventTable tbody');
        tableBody.innerHTML = ''; // Clear existing table rows
        events.forEach(function(event) {
            var row = `<tr data-id="${event.id}">
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

        // Add event listeners for delete and edit buttons
        document.querySelectorAll('.deleteBtn').forEach(function(button) {
            button.addEventListener('click', function() {
                var eventId = this.getAttribute('data-id');
                deleteEvent(eventId);
            });
        });

        document.querySelectorAll('.editBtn').forEach(function(button) {
            button.addEventListener('click', function() {
                var eventId = this.getAttribute('data-id');
                editEvent(eventId);
            });
        });
    }

    // Function to handle form submission for creating a new event
    document.querySelector('#createForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(this);
        var json = {};
        formData.forEach(function(value, key) {
            json[key] = value;
        });

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/pgdaScores');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getAllEvents(); // Refresh the table with updated data
            }
        };
        xhr.send(JSON.stringify(json));
    });

    // Function to delete an event
    function deleteEvent(eventId) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/api/pgdaScores/' + eventId);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getAllEvents(); // Refresh the table with updated data
            }
        };
        xhr.send();
    }

    // Function to edit an event
    function editEvent(eventId) {
        // Retrieve the event data by its ID
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/pgdaScores/' + eventId);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var event = JSON.parse(xhr.responseText);
                    // Populate the form fields with event data
                    document.getElementById('editScore').value = event.score;
                    document.getElementById('editPlayerName').value = event.player_name;
                    document.getElementById('editTournamentName').value = event.tournament_name;
                    document.getElementById('editTournamentDate').value = event.tournament_date;
                    document.getElementById('editLeague').value = event.league;
                    document.getElementById('editTournamentResult').value = event.tournament_result;
                    document.getElementById('editNationalRanking').value = event.national_ranking;
                    // Show the edit modal
                    document.getElementById('editModal').style.display = 'block';
                    // Add event listener for the edit form submission
                    document.getElementById('editForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        // Prepare updated event data
                        var updatedEvent = {
                            score: document.getElementById('editScore').value,
                            player_name: document.getElementById('editPlayerName').value,
                            tournament_name: document.getElementById('editTournamentName').value,
                            tournament_date: document.getElementById('editTournamentDate').value,
                            league: document.getElementById('editLeague').value,
                            tournament_result: document.getElementById('editTournamentResult').value,
                            national_ranking: document.getElementById('editNationalRanking').value
                        };
                        // Send PUT request to update the event
                        var putXhr = new XMLHttpRequest();
                        putXhr.open('PUT', '/api/pgdaScores/' + eventId);
                        putXhr.setRequestHeader('Content-Type', 'application/json');
                        putXhr.onreadystatechange = function() {
                            if (putXhr.readyState === 4 && putXhr.status === 200) {
                                // Hide the edit modal
                                document.getElementById('editModal').style.display = 'none';
                                // Refresh the events table
                                getAllEvents();
                            }
                        };
                        putXhr.send(JSON.stringify(updatedEvent));
                    });
                } else {
                    // Handle error when retrieving event data
                    console.error('Failed to retrieve event data');
                }
            }
        };
        xhr.send();
    }

    // Function to generate a form for creating a new event
    function generateCreateForm() {
        var form = document.createElement('form');
        form.id = 'createForm';

        var label = document.createElement('label');
        label.textContent = 'Score:';
        form.appendChild(label);

        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'score';
        input.name = 'score';
        input.required = true;
        form.appendChild(input);

        var submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Create Event';
        form.appendChild(submitBtn);

        return form;
    }

    // Function to generate the event table
    function generateEventTable(events) {
        var table = document.createElement('table');
        table.id = 'eventTable';
        table.classList.add('table', 'mt-3');

        var tableHead = document.createElement('thead');
        var headRow = document.createElement('tr');
        ['ID', 'Score', 'Player Name', 'Tournament Name', 'Tournament Date', 'League', 'Tournament Result', 'National Ranking', 'Delete', 'Edit'].forEach(function(heading) {
            var th = document.createElement('th');
            th.textContent = heading;
            headRow.appendChild(th);
        });
        tableHead.appendChild(headRow);
        table.appendChild(tableHead);

        var tableBody = document.createElement('tbody');
        events.forEach(function(event) {
            var row = tableBody.insertRow();
            row.dataset.id = event.id;

            var rowData = [event.id, event.score, event.player_name, event.tournament_name, event.tournament_date, event.league, event.tournament_result, event.national_ranking];

            rowData.forEach(function(data) {
                var cell = row.insertCell();
                cell.textContent = data;
            });

            var deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.dataset.id = event.id;
            deleteBtn.textContent = 'Delete';
            var deleteCell = row.insertCell();
            deleteCell.appendChild(deleteBtn);

            var editBtn = document.createElement('button');
            editBtn.classList.add('editBtn');
            editBtn.dataset.id = event.id;
            editBtn.textContent = 'Edit';
            var editCell = row.insertCell();
            editCell.appendChild(editBtn);
        });

        table.appendChild(tableBody);
        return table;
    }

    // Function to generate the edit modal
    function generateEditModal() {
        var modal = document.createElement('div');
        modal.id = 'editModal';
        modal.classList.add('modal');

        var modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');

        var modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        var modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');
        var modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = 'Edit Event';
        modalHeader.appendChild(modalTitle);
        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('btn-close');
        closeButton.setAttribute('data-bs-dismiss', 'modal');
        closeButton.setAttribute('aria-label', 'Close');
        modalHeader.appendChild(closeButton);
        modalContent.appendChild(modalHeader);

        var modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        var editForm = document.createElement('form');
        editForm.id = 'editForm';

        // Add input fields for editing event data
        // Adjust according to your event properties
        var inputs = ['Score', 'Player Name', 'Tournament Name', 'Tournament Date', 'League', 'Tournament Result', 'National Ranking'];
        inputs.forEach(function(input) {
            var label = document.createElement('label');
            label.textContent = input + ':';
            editForm.appendChild(label);

            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.id = 'edit' + input.replace(/\s+/g, '');
            inputField.name = 'edit' + input.replace(/\s+/g, '');
            editForm.appendChild(inputField);
        });

        var saveBtn = document.createElement('button');
        saveBtn.type = 'submit';
        saveBtn.textContent = 'Save Changes';
        editForm.appendChild(saveBtn);

        modalBody.appendChild(editForm);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        return modal;
    }

    // Append generated elements to the DOM
    var container = document.querySelector('.container');
    container.appendChild(generateCreateForm());

    // Example event data for testing
    var exampleEvents = [
        { id: 1, score: 100, player_name: 'John Doe', tournament_name: 'Tournament 1', tournament_date: '2024-05-10', league: 'League A', tournament_result: 'Winner', national_ranking: 1 },
        { id: 2, score: 90, player_name: 'Jane Doe', tournament_name: 'Tournament 2', tournament_date: '2024-05-11', league: 'League B', tournament_result: 'Runner-up', national_ranking: 2 }
    ];
    container.appendChild(generateEventTable(exampleEvents));
    container.appendChild(generateEditModal());

    // Add event listeners for dynamically generated elements
    document.querySelector('#createForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Handle form submission for creating a new event
        // Call appropriate functions to handle the submission
    });

    // Event listeners for dynamically generated delete and edit buttons
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            var eventId = event.target.dataset.id;
            // Call deleteEvent function with eventId
        } else if (event.target.classList.contains('editBtn')) {
            var eventId = event.target.dataset.id;
            // Call editEvent function with eventId
        }
    });

    // Fetch and display all events on page load
    getAllEvents();
});
