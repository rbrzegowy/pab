## Api aplikacji do notatek

Tworzymy proste api do aplikacji notatek.  
Etap trzeci - uwierzytelnianie z użyciem JWT

### Funkcjonalności:

1. Endpoint uwierzytelniania.  
   Endpoint POST _/login_  
   Dane wejściowe: login i hasło do logowania  
   Endpoint generuje token JWT i zwraca kod 200 wraz z tokenem. Jeśli błąd zwraca 401 z opisem błędu
2. Zmodyfikuj istniejące endpointy tak by weryfikowały czy został przesłany token (oraz czy jest poprawny).  
   Token powinien zostać przesłany w nagłówku Authorization w formacie tekstowym: "Bearer TWOJTOKEN".  
   Jeśli token jest niepoprawny zwracaj kod 401.
3. Zmodyfikuj zapis/odczyt notatek i tagów tak, by uwzględniał do jakiego użytkownika są one przypisane.

> ### Przydamisie
>
> - pobieranie danych z nagłówków http - obiekt _req.headers_ (np. _req.headers.authorization_)
> - do generowania i weryfikacji tokenów JTW użyj biblioteki _jsonwebtoken_
> - tworzenie tokenu:
>
> ```
>   const token = jwt.sign(payload, secret)
> ```
>
> - weryfikacja tokenu:
>
> ```
>   const payload = jwt.verify(token, secret)
> ```
