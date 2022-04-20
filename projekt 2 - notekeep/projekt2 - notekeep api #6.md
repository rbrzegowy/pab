## Api aplikacji do notatek

Tworzymy proste api do aplikacji notatek.  
Etap szósty - udostępniane notatki, CRUD użytkowników

### Funkcjonalności:

1. Utwórz CRUD dla użytkowników
- Każdy może stworzyć nowe konto
- Edycji może dokonać zalogowany użytkownik (tylko swoje konto) oraz admin (wszystkie konta)
- Usunąć konto może jedynie admin. Usunięcie konta powinno również usunać wszystkie notatki oraz tagi których właścicielem jest usuwany użytkownik.
- Pobrać dane użytkownika może użytkownik (własne konto) i admin (wszystkie konta)
- Pobrać listę użytkowników może jedynie admin  
2. Dodaj możliwość wylogowania użytkownika (unieważnianie tokenu)
2. Dodaj możliwość udostępniania notatek wybranym użytkownikom. Udostępnianie odbywa się poprzez podanie loginu/loginów współpracowników