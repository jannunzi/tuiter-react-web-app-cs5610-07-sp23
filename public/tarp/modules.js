const home = $('#home')
home.append(`
<div class="container-fluid">
    <h1>Tarp</h1>

    <div class="row">
        <div class="d-none d-md-block col-md-2 col-xxl-2 ">
            ${TarpNavigator()}
        </div>
        <div class="d-none d-md-block col-md-2 ">
            ${CourseNavigator('Modules')}
        </div>
        <div class="col-md-8 col-lg-8">
                    <ul class="list-group mb-4">
                        <li class="list-group-item list-group-item-warning">Resources</li>
                        <li class="list-group-item">
                            <a href="syllabus.html">Syllabus</a>
                        </li>
                        <li class="list-group-item">Piazza</li>
                        <li class="list-group-item">Project</li>
                        <li class="list-group-item">Github</li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-danger">Week 1</li>
                        <li class="list-group-item">Web Development</li>
                        <li class="list-group-item">Node</li>
                        <li class="list-group-item">React</li>
                        <li class="list-group-item">Netlify</li>
                    </ul>
        </div>
    </div>
</div>
`)