## Api aplikacji do notatek

Tworzymy proste api do aplikacji notatek.  
Etap czwarty - publiczne/prywatne notatki, refaktor kodu

### Funkcjonalności:

1. Dodaj możliwość tworzenia notatek publicznych oraz prywatnych. Domyślnie notatka powinna być prywatna.
2. Dodaj nowy endpoint pobrania listy publicznych notatek użytkownika.

- Url: GET /notes/user/:userName
- Wykorzystaj istniejący już kod endpoint-a GET /notes

3. Dokonaj refaktoryzacji istniejącego kodu - np. usuń zbędne powtórzenia i/lub niepotrzebny kod, przenieś kod do osobnych plików, posprzątaj w strukturze katalogów. Zmień architekturę kodu na bardziej czytelną (niekoniecznie krótszą!).

> ### Przydamisie
>
> Do refaktoringu endpointów (nieobowiązkowe, może się przydać):  https://expressjs.com/en/guide/routing.html
>
