/* styles.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    display: flex;
    width: 90%; /* Anpassen für mehr Responsivität */
    max-width: 1200px; /* Maximale Breite */
    height: 80vh;
    min-height: 500px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow: hidden;
}

#leftBar {
    width: 250px;
    background-color: #e9ecef;
    padding: 20px;
    border-right: 1px solid #dee2e6;
    display: flex;
    flex-direction: column;
}

#leftBar h2 {
    margin-top: 0;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.chatEntry {
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 5px;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
}

.chatEntry:hover {
    background-color: #d8dee2;
}

.chatEntry.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

.chatName {
    flex-grow: 1;
}

#chatArea {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

#chatHeader {
    padding: 15px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#chatHeader h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
}

#logoutButton {
    padding: 8px 15px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

#logoutButton:hover {
    background-color: #c82333;
}

#messageList {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto; /* Wichtig für Scrollen */
    display: flex;
    flex-direction: column; /* Nachrichten von oben nach unten */
    gap: 10px; /* Abstand zwischen Nachrichten */
}

/* Stil für einzelne Nachrichten */
.message {
    max-width: 70%; /* Nachrichten sollen nicht die ganze Breite einnehmen */
    padding: 10px 15px;
    border-radius: 15px;
    word-wrap: break-word; /* Lange Wörter umbrechen */
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.message.left {
    align-self: flex-start; /* Nachrichten anderer links */
    background-color: #e0e0e0;
    color: #333;
    border-bottom-left-radius: 5px; /* Angle the bubble */
}

.message.right {
    align-self: flex-end; /* Eigene Nachrichten rechts */
    background-color: #007bff;
    color: white;
    border-bottom-right-radius: 5px; /* Angle the bubble */
}

.message .sender {
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 5px;
    color: #0056b3; /* Blauer Ton für Sender */
}

.message.right .sender {
    color: #cce5ff; /* Hellere Farbe für Sender in eigenen Nachrichten */
}

.message .content {
    font-size: 1em;
    line-height: 1.4;
    margin-bottom: 5px;
}

.message .timestamp {
    font-size: 0.7em;
    color: #666;
    align-self: flex-end; /* Zeitstempel rechtsbündig in der Nachricht */
}

.message.right .timestamp {
    color: #a7d9ff; /* Hellere Farbe für Zeitstempel in eigenen Nachrichten */
}

#messageInput {
    display: flex;
    padding: 15px 20px;
    border-top: 1px solid #dee2e6;
    background-color: #f8f9fa;
}

#chatInput {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #ced4da;
    border-radius: 20px;
    font-size: 1em;
    margin-right: 10px;
}

#chatInput:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

#sendMessageButton {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.2s ease;
}

#sendMessageButton:hover {
    background-color: #218838;
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
    .container {
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }
    #leftBar {
        width: 100%;
        height: 80px; /* Oder ganz ausblenden und nur bei Bedarf anzeigen */
        border-right: none;
        border-bottom: 1px solid #dee2e6;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    #leftBar h2 {
        display: none; /* Titel auf Mobilgeräten ausblenden */
    }
    .chatEntry {
        flex-grow: 1;
        text-align: center;
    }
}