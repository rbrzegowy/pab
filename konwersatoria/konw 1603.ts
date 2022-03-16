const studenci: any[] = []
const kasia = {imie: 'Kasia', wiek: 20}
const tomek = {imie: 'Tomek', wiek: 19}

studenci.push(kasia, tomek);
// łączenie tablic
const a1 = [1,2,4]
const a2 = [2,3,4]
const b = [...a1, ...a2]

//kopiowanie przez wartość
const c = 10
const d = c

// iteracja
b.forEach(value => {

})
for (const item of b) {

}
//..dla obiektów kopiujemy przez referencję!
// find - odszukaj element w tablicy
const kasiaCopy = studenci.find(searchStudent)
// znajdź indeks elementu w tablicy
const kasiaIdx = studenci.findIndex(searchStudent)
// predykat - funkcja przeszukująca tablicę
function searchStudent(student: any) {
    return student.imie === 'Kasia'
}
// wycinanie z tablicy - tutaj wytnij 2 elementy poczynając od indeksu 1
b.splice(1, 2)

// filtrowanie tablicy
const newStudenci = studenci.filter(st => st.imie !== 'Kasia')

// mapowanie - zmiana zawartości elementów tablicy
studenci.map(st => {
    st.wiek++
    return st
})

// przeglądanie tablicy
// studenci.some(), studeci.every()

// a tego nie praktykujemy;)
studenci.length=0
// iteracja po tablicy
studenci.forEach(st => {
    // do sth
})
// lub 
for(const st of studenci) {
    // do sth
}
// iteracja po obiektach
for(const stKey in studenci) {
    const im = studenci[stKey]
}
// zapobieganie wyjatkom jeśli foo lub bar nie istnieją
const foo: any = {}
const x = foo?.bar?.baz()

// nullish coalescing
const y = x ?? 5
// zastępuje if-a
// let y
// if(x !== null) {
//     y = x
// } else {
//     y = 5
// }

// pamietamy ze klasa równiez definiuje typ
interface Student {
    imie: string;
    wiek: number;
}
class Student {
    imie: string;
    wiek: number;
    _rokStudiow: number;
    constructor(imie?: string, wiek?: number) {
        this.imie = imie;
        this.wiek = wiek;
    }
    get rokStudiow(): number {
        return this._rokStudiow;
    }
     
    set rokStudiow(val: number) {
        this._rokStudiow = val;
    }
    getRokStudiow(): number {
        return this._rokStudiow;
    }

}