
import { useNavigate } from "react-router-dom";

const LeftSideNav = ({ course }) => {
    const {title,id}=course;
//   console.log(course);

const navigate=useNavigate();

const handleClickedCourseTitle=()=>{
    navigate(`/courses/${id}`)
}

  return (
    <>
     <div onClick={handleClickedCourseTitle}  className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {/* <p className="card-text"> click here for purchasing {title}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
