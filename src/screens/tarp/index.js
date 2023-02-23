import TarpNavigator from "./TarpNavigator";
import CourseNavigator from "./CourseNavigator";
import Modules from "./Modules";
import {Route, Routes} from "react-router";
import Assignments from "./assignments";

export default function Tarp() {
  return(
    <div class="container-fluid">
    <h1>Tarp 2</h1>
    <div class="row">
        <div class="d-none d-md-block col-md-2 col-xxl-2 ">
            <TarpNavigator/>
        </div>
        <div class="d-none d-md-block col-md-2 ">
            <CourseNavigator/>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-7 ">
          <Routes>
            <Route path="modules" element={<Modules/>}/>
            <Route path="assignments" element={<Assignments/>}/>
          </Routes>
        </div>
        <div class="d-none d-lg-block col-lg-2 col-xl-1 ">
            <h2>Sidebar</h2>
        </div>
    </div>
</div>
    )
}
