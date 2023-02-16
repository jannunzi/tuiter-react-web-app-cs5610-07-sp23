function CourseNavigator(active = 'Modules') {
  const links = [
    'Home', 'Modules', 'Piazza', 'Zoom', 'Assignments', 'Quizzes', 'Grades'
  ]

  return(`
    <ul class="list-group">
        ${
          links.map(link => `
            <li class="list-group-item ${link === active ? 'active' : ''}">
                ${link}
            </li>
          `).join('')
        }
  </ul>
`)
}