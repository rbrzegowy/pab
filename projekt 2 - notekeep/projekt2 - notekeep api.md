## Api aplikacji do notatek
Tworzymy proste api do aplikacji notatek.  
W pierwszym etapie tworzymy api do CRUD notatek.
### Model notatki
- title (string)
- content (string)
- createDate?  (string - data w formmacie ISO)
- tags? (string[])
- id? (number)
### Funkcjonalności:  
1. Dodanie nowej notatki.
Generuje id dla nowej notatki i zapisuje notatkę. Sprawdza wymagane pola.   
Endpoint POST */note*  
Dane wejściowe: JSON z notatką (bez id)  
Zwraca kod 201 wraz z id notatki. Jeśli błąd zwraca 400 z opisem błędu
2. Odczytanie notatki.  
Endpoint GET */note/:id*  
Zwraca kod 200 i JSON z notatką lub 404 jeśli notatka nie istnieje  
3. Edycja notatki.  
Zmienia zawartość notatki. Sprawdza wymagane pola  
Endoint PUT */note/:id*  
Dane wejściowe: JSON z notatką.  
Zwraca 204 jeśli ok lub 404 z opisem błędu  
4. Usunięcie notatki.  
Endpoint DELETE */note/:id*  
Zwraca 204 jeśli lub 400 z opisem błędu  
#### Sprawdzenie dzialania API
Wykorzystaj przeglądarkę lub Postman/Hoppscotch.io  
Inne narzędzia:  
- appka chrome web store: https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo. Po instalacji dostępna pod *chrome://apps/*

## Tworzenie nowego projektu
1. Zainicjalizuj nowy projekt (npm init -y)
2. Utwórz główny plik projektu: /src/index.ts (skopiuj zawartość z repo projektu)
2. Zainstaluj pakiety npm: *typescript, express, nodemon, ts-node, @types/node, @types/express*
3. Dodaj wpis do sekcji *script* w package.json:  
 *"start": "nodemon ./src/index.ts"*
3. Uruchom projekt korzystając z npm. Wpisz w linii poleceń: npm start
> #### Przydamisie
> - generowanie daty w TS: const date = new Date(). Generowanie isostring z daty: date.toISOString()
> - tworzenie "unikalnych" id-kow: Date.now()
> - tworzenie JSON-a z obiektu: *const jsonData = JSON.stringify(data)*. 
> - tworzenie obiektu z JSON-a: *const data = JSON.parse(jsonData)*
> jeśli chcesz wysłać jsona (np. z zapytania GET o notatkę), to nie musisz tworzyć JSON-a - express zrobi to za Ciebie (czyli np. res.send(note))
