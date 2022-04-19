
import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";

// connection string
const connString = 'WKLEJ SWOJ CONN STRING'


// model dokumentu
const notesSchema = new mongoose.Schema({
    title: String,
    content: String,
    private: Boolean,
    tags: [String]
}, {
    timestamps: true
})

main()
async function main() {
    // 1. Przygotowanie komunikacji - połączenie z bazą danych
    console.log('Connecting to mongo');
    const db = await mongoose.connect(connString)
    console.log('Mongo Connected!')

    // 2. Przygotowanie komunikacji - tworzenie schema z modelu
    const noteModel = mongoose.model('notes', notesSchema)

    // 3. Akcje - dodawanie wpisu
    const newNote = new noteModel({
        title: 'New note',
        content: 'From mongoose',
        private: true,
        tags: ['Friday', 'Yellow', 'Kebab']
    })

    // 4. AKCJE - zapis
    const saveRet = await newNote.save(); // także .update(), .updateMany(), .validate()
    console.log('SAVE - new note id: ', newNote.id);

    // 5. AKCJE - aktualizacja wpisu
    newNote.title = `zaktualizowana notatka ${newNote.id}`
    await newNote.save();
    console.log('UPDATE - new note updated title: ', newNote.title);
    // wyszukanie i aktualizacja wpisu: .findOneAndUpdate()
    // nadpisywanie całego dokumentu.overwrite({data}).save()

    // 6. AKCJE - usuwanie wpisu
    const delRet = await noteModel.deleteMany({ private: false }) // także .deleteMany()
    console.log('NOTE DELETE,', delRet)

    // 7. AKCJE - odpytywanie o kolekcję
    // const notes = await noteModel.find();
    // console.log(`NOTES Colection ${notes.length}:`, notes)

    // mongoose queries: https://mongoosejs.com/docs/queries.html

    // 8. WATCH - "zapisanie się" na zmiany w kolekcji (analogicznie w dokumencie)
    const notesEvents = noteModel.watch()
    notesEvents.on('change', change => onNotesChange(change))

    // UPDATE kolekcji po zapisaniu się na zmiany w kolekcji (żeby zobaczyć że .watch działa)
    newNote.title = `zaktualizowana notatka ${new Date().toLocaleString()}`
    await newNote.save();

}
function onNotesChange(notes: ChangeStreamDocument) {
    console.log('NOTES CHANGE!', notes)
}
