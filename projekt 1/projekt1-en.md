1. Creator repository using github (firstname-secondname-pab). 
Every project should be placed in its own folder (in one course repository)
2. Clone your project to local folder
3. Create new npm config file  
npm init -y
4. Install typescript  
npm install typescript
5. Install Express library  
npm install express
6. Install node types info library  
npm install @types/node  
7. Create file .gitignore in project folder  
Fill it with content: node_modules
8. Create file index.ts  
9. Create simple API server. Copy code to index.ts  
```typescript
const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  res.send('Hello World')  
})  
app.listen(3000)  
```
This server will responsd at localhost:3000 address.  
  
10. Transpile ts to js  
npx tsc index.ts
11. Run js script  
node index.js  
12. Check your server. Use browser and navigate to url localhost:3000  
Does it work? Great.    
  
13. Modify your script - create simple calculator.  
* Pass three GET args to script: operation, num1, num2  
* allowed operations:  "add", "substract", "multiply", "divide"  
* num1, num2 are numbers  
* in Typescript all parameteres you can get using req.query object.   
 Every GET arg is property of req.query (e.x. req.query.num1)  
* send back to browser result of the action e.x. "2 + 2 = 4"   
* play with project. What you should do to make such an address: localhost:3000/add/4/5 would work?

