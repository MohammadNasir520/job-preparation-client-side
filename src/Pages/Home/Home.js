import Carousel from "react-bootstrap/Carousel";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const course = useLoaderData();
  const { image } = course;
  console.log(course);

  return (
    <div className="carusel-container container " >
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src="https://image.shutterstock.com/image-photo/education-learning-concept-opening-book-260nw-1491910001.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Lets Study With us and get your dream job</h3>
            <p>Click on Courses to purchase our courses and start your journy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Study for Job</h3>
            <p>Purchase our bcs , primary , math and other courses for prepare your self in best way.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/asian-student-study-hard-evening-260nw-1425930218.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Work Hard</h3>
            <p>
            Read ,Write, Revise....  We wil Guide till you want to do that
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
