
import fs from 'fs';

const filePath = 'data.json'

// kod asynchroniczny wywoływany z użyciem callback-ow
function readFile(file: string, callback: any) {
    return fs.readFile(file, 'utf8', callback)
}
let fileData = '';
function readFileCallback(err: any, data: string) {
    fileData = data;
 }
readFile(filePath, readFileCallback)
console.log("immediate", fileData);   
setTimeout(()=>console.log("after timeout", fileData), 0)


// kod asynchroniczny - promises
function readFileWithPromise(file: string) {
    return fs.promises.readFile(file, 'utf8')
}
const dataPromise = readFileWithPromise(filePath)
dataPromise.then(data => console.log('from promise', data))

// debugowanie w vsc kodu uruchamianego z linii polecen - włącz w ustawieniach vsc opcję Debug: Toggle Auto Attach na "always" 
// (pamiętaj żeby zrestartować cli po przełączeniu opcji w konfiguracji)