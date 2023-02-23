import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import PreJson from "../../components/PreJson";

export default function CourseNavigator() {
    const {pathname} = useLocation()
    const links = ['home', 'modules', 'piazza', 'assignments', 'quizzes']
  return(
    <div>

        <div className="list-group">
            {
                links.map(link => {
                    const active = pathname.indexOf(link) >= 0 ? 'active' : ''
                    return (<Link
                        className={`text-capitalize list-group-item ${active}`}
                        to={`/tarp/${link}`}>
                          {link}
                      </Link>)
                  }
                )
            }
        </div>
    </div>
)
}
