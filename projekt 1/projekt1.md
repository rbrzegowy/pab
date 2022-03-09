1. Utwórz repozytorium przedmiotu na github (imie-nazwisko-pab). 
Ten i każdy kolejny projekt umieszczaj w osobnym katalogu (w jednym wspólnym repozytorium)
2. Sklonuj projekt na komputer
3. W katalogu z projektem stwórz plik konfiguracyjny dla node  
npm init -y
4. Zainstaluj typescript  
npm install typescript
5. Zainstaluj bibliotekę Express  
npm install express
6. Utwórz plik index.ts  
7. Utwórz najprostszy serwer api. Skopiuj kod do pliku index.ts  
```typescript
const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  res.send('Hello World')  
})  
app.listen(3000)  
```
Powyższy serwer będzie nasłuchiwał pod adresem localhost:3000.  
  
7. Zamień ts na js  
npx tsc index.ts
8. Uruchom skrypt  
node index.js  
9. Sprawdź działanie w przeglądarce wchodząc na adres localhost:3000  
Działa? Świetnie.  
  
10. Zmodyfikuj skrypt tak, by zadziałał jako prosty kalkulator.  
* Do skryptu przekaz trzy parametry GET: operation, num1, num2  
* operation to "dodaj", "usun", "podziel", "pomnoz"  
* num1, num2 to liczby  
* w skrypcie parametry get możesz odebrać w zmiennej req.query.   
 Każdy parametr jest właściwością tego obiektu (np. req.query.num1)  
* wyślij do przeglądarki wynik z opisem działania, np. 2 + 2 = 4   
* pobaw się projektem. Co trzeba zrobić zeby zadzialaly adresy np. localhost:3000/add/4/5 ?

