console.log(jQuery)
const $rooms = $('#rooms')
const roomH3 = $('<h3>33</h3>')
roomH3.css({
  'color': 'green',
  backgroundColor: 'blue'
})
$rooms.html(roomH3)

const jlist = $("#jlist")
for(let k=0; k<students.length; k++)
{
  jlist.append(`<li>${students[k].name}</li>`)
}

function addStudent () {
  const name = $("#studentName").val()
  jlist.append(`<li>${name}</li>`)
}
$("#addStudentBtn").click(addStudent)