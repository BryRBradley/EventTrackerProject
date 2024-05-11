window.addEventListener('load', function() {
    const baseUrl = '/api/pgdaScores';
    
    function getAllEvents() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', baseUrl);
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
                           <td>${event.playerName}</td>
                           <td>${event.tournamentName}</td>
                           <td>${event.tournamentDate}</td>
                           <td>${event.league}</td>
                           <td>${event.tournamentResult}</td>
                           <td>${event.nationalRanking}</td>
                           <td>
                               <button class="btn btn-primary btn-sm editBtn" data-id="${event.id}">Edit</button>
                               <button class="btn btn-danger btn-sm deleteBtn" data-id="${event.id}">Delete</button>
                           </td>
                       </tr>`;
            tableBody.innerHTML += row;
        });

        document.querySelectorAll('.editBtn').forEach(function(button) {
            button.addEventListener('click', function() {
                let eventId = this.getAttribute('data-id');
                editEvent(eventId);
            });
        });

        document.querySelectorAll('.deleteBtn').forEach(function(button) {
            button.addEventListener('click', function() {
                let eventId = this.getAttribute('data-id');
                deleteEvent(eventId);
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
        xhr.open('POST', baseUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getAllEvents();
                this.reset(); 
            }
        };
        xhr.send(JSON.stringify(json));
    });

    function updateEvent(eventId, updatedEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', `${baseUrl}/${eventId}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getAllEvents(); 
            }
        };
        xhr.send(JSON.stringify(updatedEvent));
    }

    function deleteEvent(eventId) {
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${baseUrl}/${eventId}`);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getAllEvents(); 
            }
        };
        xhr.send();
    }


    getAllEvents();
});
