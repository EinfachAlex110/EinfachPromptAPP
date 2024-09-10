$(document).ready(function() {
    // Prompt anzeigen
    $('.view-prompt').click(function() {
        const cmd = $(this).data('cmd');
        console.log('Anzeigen-Button geklickt:', cmd);

        // AJAX-GET-Request für den ausgewählten Prompt
        $.getJSON(`/prompts/${cmd}`, function(data) {
            console.log('Daten erhalten:', data);
            if (data) {
                $('#details-title').text(data.cmd);
                $('#edit-title').val(data.cmd).hide();
                $('#details-content').text(data.prompt);
                $('#edit-prompt').val(data.prompt).hide();
                $('#edit-button').data('cmd', cmd);
                $('#save-button').data('cmd', cmd).hide();
                $('#delete-button').data('cmd', cmd);

                $('#prompt-details').show();
            } else {
                alert('Prompt nicht gefunden.');
            }
        }).fail(function(jqxhr, textStatus, error) {
            console.error('Fehler beim Laden des Prompts:', textStatus, error);
        });
    });

    // Prompt bearbeiten
    $('#edit-button').click(function() {
        $('#details-title').hide();
        $('#edit-title').show();
        $('#details-content').hide();
        $('#edit-prompt').show();
        $('#edit-button').hide();
        $('#save-button').show();
    });

    // Prompt speichern
    $('#save-button').click(function() {
        const cmd = $(this).data('cmd');
        const updatedPrompt = {
            cmd: $('#edit-title').val(),
            prompt: $('#edit-prompt').val(),
            act: 'edit'
        };
        console.log('Prompt speichern:', updatedPrompt);

        $.ajax({
            url: `/prompts/${cmd}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(updatedPrompt),
            success: function(response) {
                alert('Prompt erfolgreich aktualisiert!');
                location.reload(true); // Seite neu laden, um sicherzustellen, dass die Änderungen angezeigt werden
            }
        }).fail(function(jqxhr, textStatus, error) {
            console.error('Fehler beim Speichern des Prompts:', textStatus, error);
        });
    });

    // Prompt löschen
    $('#delete-button').click(function() {
        const cmd = $(this).data('cmd');
        console.log('Prompt löschen:', cmd);

        if (confirm('Möchten Sie diesen Prompt wirklich löschen?')) {
            $.ajax({
                url: `/prompts/${cmd}`,
                method: 'DELETE',
                success: function() {
                    alert('Prompt erfolgreich gelöscht!');
                    location.reload(true); // Seite neu laden, um die Liste zu aktualisieren
                }
            }).fail(function(jqxhr, textStatus, error) {
                console.error('Fehler beim Löschen des Prompts:', textStatus, error);
            });
        }
    });

    // Prompt-Details schließen
    $('#close-details').click(function() {
        $('#prompt-details').hide();
        $('#edit-title').hide();
        $('#details-title').show();
        $('#edit-prompt').hide();
        $('#details-content').show();
        $('#edit-button').show();
        $('#save-button').hide();
    });

    // Modal-Elemente
    var modal = document.getElementById("addPromptModal");
    var btn = document.getElementById("toggle-add-prompt");
    var span = document.getElementsByClassName("close-button")[0];

    // Öffnen des Modals
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Schließen des Modals
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Schließen des Modals bei Klick außerhalb des Modals
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Neues Prompt hinzufügen
    $('#add-prompt-form').submit(function(e) {
        e.preventDefault();
        const newPrompt = {
            cmd: $('#new-title').val(),
            prompt: $('#new-prompt').val(),
            act: 'new'
        };
        console.log('Neues Prompt hinzufügen:', newPrompt);

        $.ajax({
            url: '/prompts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newPrompt),
            success: function(response) {
                console.log('Antwort vom Server:', response);
                alert('Prompt erfolgreich hinzugefügt!');
                modal.style.display = "none"; // Schließe das Modal
                location.reload(true); // Seite neu laden, um das neue Prompt anzuzeigen
            }
        }).fail(function(jqxhr, textStatus, error) {
            console.error('Fehler beim Hinzufügen des Prompts:', textStatus, error);
        });
    });
});
