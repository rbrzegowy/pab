## Api aplikacji do notatek
Tworzymy proste api do aplikacji notatek.  
Etap drugi - lista notatek, tagi, zapis danych w pliku.

### Funkcjonalności:  
1. Pobranie listy notatek.
Pobiera listę notatek  
Endpoint GET */notes*  
Zwraca kod 200 wraz z listą notatek. Jeśli błąd zwraca 400 z opisem błędu
2. CRUD do tagów (analogicznie do notatek).  
Założenie - tagi są unikalnymi stringami (unikalnymi bez uwzględniania wielkości znaków - wsei i WSEI to ten sam tag)  
Adresy endpointów: */tag*, lista tagów: */tags*
3. Zmodyfikuj logikę endpointów dodawania i edycji notatki - jeśli podanych w notatce tagów nie ma na liście, to automatycznie dodajemy nowe tagi do listy.
4. Wykorzystaj system plików do zapisu informacji o tagach i notatkach.  

> ### Przydamisie
> - dane w pliku/plikach zapisz w formacie json
> - do zapisu/odczytu danych z pliku uzyj wbudowanego w node modułu fs  
> #### Odczyt z pliku
> ```
> import fs from 'fs';
> private async readStorage(): Promise<void> {
>   try {
>       const data = await fs.promises.readFile(storeFile, 'utf-8');
>   } catch (err) {
>       console.log(err)
>   }
> }
> ```
> #### Zapis do pliku
>```
>private async updateStorage(): Promise<void> {
>   try {
>       await fs.promises.writeFile(storeFile, dataToSave);
>   } catch (err) {
>       console.log(err)
>   }
>}
>