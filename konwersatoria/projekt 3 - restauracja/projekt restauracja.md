# Projekt Restauracja  
## API do aplikacji obsługującej restaurację  
#### Aplikacja pozwala  na zarządzanie personelem, magazynem produktów, stolikami, menu oraz zamówieniami i generowanie raportów. Aplikacja umożliwia również rezerwację stolików
<br> 
  
### Funkcjonalności:  
1. Restauracja - CRUD danych restauracji
1. Stoliki - CRUD stolika, lista stolików wraz ze statusami stolików. Wyszukiwarka wolnego stolika w danym dniu dla wskazanej ilości osób. Raport obłożenia stolików (raport zamówień per stolik)
1. Rezerwacje - CRUD rezerwacji, lista rezerwacji
1. Pracownicy - CRUD, lista pracowników
1. Magazyn produktów - CRUD, lista produktów na magazynie (z możliwością paginacji i sortowania). Możliwość zgłoszenia zapotrzebowania na produkty 
1. Menu - CRUD dania, lista dań
1. Zamówienia - CRUD zamówienia, lista zamówień. 
Przy tworzeniu zamówienia można podać sumaryczną kwotę (jeśli nie podana, wyliczana automatycznie z pozycji w zamówieniu)
Raporty zamówień:
- raport zamówień per kelner
- raport zamowień we wskazanym okresie czasu
- raport przychdów we wskazanym okresie czasu

### Modele danych
Restauracja:  
- nazwa
- adres
- telefon
- nip
- email
- www

Pracownik
- imie
- nazwisko
- stanowisko

Stolik
- nazwa
- iloscOsob
- status (np. wolny/zajety/niedostepny)

Rezerwacja
- stolik
- start
- koniec
- klient

Produkt
- nazwa
- cena
- ilosc
- jednostkaMiary

Danie
- nazwa
- cena
- kategoria

Zamówienie
- pracownik
- pozycje (dania)
- status (złożone/w realizacji/zrealizowane/rachunek)
- stolik
- kwota
