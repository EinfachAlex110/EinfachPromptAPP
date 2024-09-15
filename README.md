![Screenshot](https://github.com/einfachalexgpt/EinfachPromptAPP/blob/main/Screenshot%202024-09-10%20180606.png)


### **Projektübersicht: EinfachPromptAPP**
**Beschreibung**:  
EinfachPromptAPP ist eine Flask-basierte Webanwendung, die es Nutzern ermöglicht, Prompts für GPT-Modelle zu erstellen, zu verwalten und zu bearbeiten. Die App bietet eine intuitive Benutzeroberfläche zur Interaktion mit Prompts, einer Chat-Funktion und einer Markdown-Unterstützung. Sie integriert API-Aufrufe und speichert benutzerdefinierte Prompts lokal in JSON-Dateien. Außerdem bietet sie Unterstützung für die Anzeige und Bearbeitung von Markdown-Dokumenten.

---

### **Technologie-Stack**:
1. **Backend**: Python, Flask
2. **Frontend**: HTML, CSS, JavaScript (jQuery)
3. **Datenverwaltung**: JSON-Dateien (z.B. `user_custom.json`)
4. **Deployment**: Vercel (mit `vercel.json` für Konfiguration)

---

### **Hauptfunktionen**:
1. **Prompt-Verwaltung**:
   - Nutzer können Prompts erstellen, anzeigen, bearbeiten und löschen.
   - Die Prompts werden in JSON-Dateien gespeichert und über eine einfache API-Schnittstelle verwaltet.

2. **Chat-Funktion**:
   - Eine Chat-ähnliche Schnittstelle, über die Nutzer mit dem System interagieren können, indem sie Prompts an das Backend senden.

3. **Markdown-Verwaltung**:
   - Die App ermöglicht die Verwaltung von Markdown-Dateien, inklusive der Anzeige, Bearbeitung und Auflistung von Dateien.

---

### **Projektstruktur**:
```
EinfachPromptAPP/
├── .venv/                    # Virtuelle Python-Umgebung
├── GPTLISTE/                 # Verzeichnis mit GPT-Prompts oder Modellen (Speicherort)
├── app.py                    # Flask-Backend: Hauptlogik der Anwendung
├── static/                   # Statische Ressourcen (CSS, JavaScript)
│   ├── chat.js               # JavaScript für die Chat-Funktionalität
│   ├── scripts.js            # Allgemeine JS-Funktionen für die App
│   └── styles.css            # CSS für das Styling der Benutzeroberfläche
├── templates/                # HTML-Templates für die Benutzeroberfläche
│   ├── index.html            # Hauptseite der Anwendung
│   ├── chat.html             # Chat-Oberfläche
│   ├── markdown_edit.html    # Markdown-Editor
│   └── markdown_list.html    # Liste von Markdown-Dokumenten
├── user_custom.json          # Datei zur Speicherung benutzerdefinierter Prompts
├── requirements.txt          # Abhängigkeiten des Projekts (Flask, etc.)
├── vercel.json               # Konfigurationsdatei für Vercel-Deployment
```

---

### **Wichtige Dateien**:
1. **`app.py`**:  
   Haupt-Backend-Datei der App, die alle Routen und die Datenverarbeitung steuert, wie z.B. das Laden, Speichern und Verwalten von Prompts. Enthält auch die Routen für das Rendern der HTML-Seiten (z.B. Chat und Markdown).

2. **`scripts.js`**:  
   Enthält die Frontend-Logik für die Verwaltung von Prompts (z.B. das Laden, Bearbeiten und Löschen von Prompts über AJAX-Anfragen).

3. **`index.html`**:  
   Haupt-HTML-Template für die Benutzeroberfläche. Diese Seite zeigt die Liste der Prompts an und enthält Funktionen zur Interaktion mit der App.

4. **`styles.css`**:  
   Styling für die Benutzeroberfläche, sorgt für das Layout und Design der App. Umfasst responsives Design und Anpassungen für verschiedene Bildschirmgrößen.

5. **`user_custom.json`**:  
   Diese Datei speichert alle benutzerdefinierten Prompts, die von der App erstellt und verwaltet werden.

---

### **Mögliche Verbesserungen**:
1. **Backend**:  
   - Sicherstellung von Input-Sanitizing, um XSS und SQL-Injection vorzubeugen.
   - Einbauen von Logging für bessere Fehleranalyse und Debugging.

2. **Frontend**:  
   - Nutzung von **`fetch`** anstelle von **`$.ajax`** für modernere asynchrone Anfragen.
   - Optimierung des CSS durch Reduzierung von Redundanzen und Verbesserung der Responsivität.

---

### **Zusammenfassung**:
Das Projekt EinfachPromptAPP bietet eine benutzerfreundliche Weboberfläche für die Verwaltung und Interaktion mit GPT-Prompts. Es verwendet Flask im Backend, um API-Anfragen zu verarbeiten und HTML-Seiten zu rendern, während das Frontend über jQuery und CSS eine dynamische Benutzererfahrung bietet.

---


## Voraussetzungen

- **Python 3.x**: Stelle sicher, dass Python 3.x installiert ist.
- **Virtuelle Umgebung**: Es wird empfohlen, eine virtuelle Umgebung für die Installation der Abhängigkeiten zu verwenden.

## Installation

1. **Repository klonen oder herunterladen**:
   ```bash
   git clone <REPOSITORY_URL>
   cd flask_app
   ```

2. **Virtuelle Umgebung erstellen**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Auf Windows: venv\Scripts\activate
   ```

3. **Abhängigkeiten installieren**:
   ```bash
   pip install -r requirements.txt
   ```

## Anwendung starten

1. **Flask-App starten**:
   ```bash
   python app.py
   ```

2. **App im Browser öffnen**:
   Gehe zu `http://localhost:5000` in deinem Webbrowser, um die App zu verwenden.

## API-Endpunkte

Die App stellt eine REST-API zur Verfügung, um die Prompts zu verwalten:

- `GET /prompts`  
  Gibt eine Liste aller Prompts zurück.

- `POST /prompts`  
  Fügt einen neuen Prompt hinzu. Erfordert JSON-Daten im Body. Beispiel:
  ```json
  {
    "cmd": "example_command",
    "act": "example_action",
    "prompt": "example_prompt_text",
    "enable": true,
    "tags": ["tag1", "tag2"]
  }
  ```

- `PUT /prompts/<cmd>`  
  Aktualisiert einen bestehenden Prompt basierend auf dem `cmd`-Wert. Erfordert JSON-Daten im Body.

- `DELETE /prompts/<cmd>`  
  Löscht einen Prompt basierend auf dem `cmd`-Wert.

## Anpassung der JSON-Datei

Die Datei `user_custom.json` enthält die Prompts und kann manuell oder über die Anwendung angepasst werden. Die Struktur jedes Prompts sieht wie folgt aus:

```json
{
  "cmd": "example_command",
  "act": "example_action",
  "prompt": "example_prompt_text",
  "enable": true,
  "tags": ["tag1", "tag2"]
}
```

- **cmd**: Ein eindeutiger Bezeichner für den Prompt.
- **act**: Die Aktion oder der Zweck des Prompts.
- **prompt**: Der Text des Prompts.
- **enable**: Ein boolescher Wert, der angibt, ob der Prompt aktiviert ist.
- **tags**: Eine Liste von Tags zur Kategorisierung des Prompts.

## Anpassung des Frontends

Die HTML-, CSS- und JavaScript-Dateien im `templates`- und `static`-Ordner können nach Belieben angepasst werden, um das Frontend-Design und die Funktionalität zu erweitern. 

- **index.html**: Die Hauptseite, auf der Prompts angezeigt und verwaltet werden.
- **chat.html**: Eine Platzhalterseite für eine mögliche Chat-Funktion.

**Hinweis**: Änderungen an den Frontend-Dateien können ein erneutes Laden der Seite im Browser erfordern, um die Änderungen sichtbar zu machen.

## Lizenz

Dieses Projekt ist unter der [MIT Lizenz](LICENSE) lizenziert.

## Beitragende

Falls du zu diesem Projekt beitragen möchtest, eröffne bitte ein Issue oder einen Pull-Request im [Repository](<REPOSITORY_URL>).

## Kontakt

Für Fragen oder Feedback kannst du mich unter [deine E-Mail-Adresse] erreichen.

```

