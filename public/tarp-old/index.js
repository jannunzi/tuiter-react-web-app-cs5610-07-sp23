import TarpNavigator from "./TarpNavigator.js";
import CourseNavigator from "./CourseNavigator.js";
import Modules from "./Modules.js";

const tarp = $("#tarp")
tarp.append(`
<div class="container-fluid">
    <h1>Tarp</h1>
    <div class="row">
        <div class="d-none d-md-block col-md-2 col-xxl-2 ">
            ${TarpNavigator()}
        </div>
        <div class="d-none d-md-block col-md-2 ">
            ${CourseNavigator()}
        </div>
        <div class="col-md-8 col-lg-6 col-xl-7 ">
            ${Modules()}
        </div>
        <div class="d-none d-lg-block col-lg-2 col-xl-1 ">
            <h2>Sidebar</h2>
        </div>
    </div>
</div>

`)