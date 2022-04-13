## Api aplikacji do notatek

Tworzymy proste api do aplikacji notatek.  
Etap piąty - mongodb

### Funkcjonalności:

1. Wydziel konfigurację aplikacji do osobnego pliku config.json. W pliku konfiguracyjnym dodaj możliwość wyboru formy przechowywania danych - plik lub baza danych.

1. Utwórz interfejs *DataStorage* dla klas zarządzająych przechowywaniem informacji. Pierwsza z klas odpowiada za pracę z danymi w pliku (to już masz), druga klasa powinna odpowiadać za pracę z danymi przechowywanymi w bazie danych. Obydwie klasy powinny implementować ten sam interfejs.

1. Zrefaktoruj kod tak by korzystał ze źródła danych zgodnie z ustawieniami z konfiguracji.

1. Utwórz klasę odpowiedzialną za komunikację i przechowywanie danych w mongodb.
 
> ### Przydamisie
>
> Odczytywanie danych z pliku json:  
> 1. const config = await import(__dirname + '/config.json')  
> (jeśli chcesz importować w ts-ie pliki json, włącz flagę esModuleInterop w tsconfig.json)  
> 1. fs.readFile - możesz odczytać i sparsować plik konfiguracyjny tak samo, jak plik z danymi.
> 1. Praca z mongodb w node - konwersatoria