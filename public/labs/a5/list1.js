function add(a, b) {
  return a + b;
}
document.write(add(12,23))
document.write(`
            <h2>
                a + b = ${add(12, 23)}
            </h2>
        `)
document.write('<h1>List</h1>')
const students = [
  {name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}
]
document.write('<ul>')
for(let i=0; i<students.length; i++){
  document.write(`<li>${students[i].name}</li>`)
}
document.write('</ul>')

document.write('<h1>List 2</h1>')
document.write('<ul>')
let lis = ''
for(let i=0; i<students.length; i++){
  lis += `<li>${students[i].name}</li>`
}
document.write(lis)
document.write('</ul>')

document.write('<h1>List 3</h1>')
document.write('<ul>')
let lis3 = students.map(function (student) {
  return `<li>${student.name}</li>`
}).join('')
document.write(lis3)
document.write('</ul>')

document.write('<h1>List 4</h1>')
document.write('<ul>')
let lis4 = students.map(student => `<li>${student.name}</li>`)
  .join('')
document.write(lis4)
document.write('</ul>')

