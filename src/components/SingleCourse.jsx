import courses from "../data/courses";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
// import NotFound from "./NotFound";
import {useEffect} from "react";

const SingleCourse = () => {
    let location = useLocation();
    console.log(location);

    let {slug} = useParams();
    let navigateFunction = useNavigate();
    const currentCourse = courses.find(course => course.slug === slug)

    useEffect(() => {
        if (!currentCourse) {
            navigateFunction('..', {relative: 'path'});
        }
    }, [currentCourse, navigateFunction]);
    return (
        <>
            <h1>{currentCourse?.title}</h1>
            <h2>{currentCourse?.slug}</h2>
            <h3>{currentCourse?.id}</h3>
            <Link to=".." relative="path">All courses</Link>
        </>
    );
    // return (
    //     <>
    //         {currentCourse ?
    //             <>
    //                 <h1>{currentCourse.title}</h1>
    //                 <h2>{currentCourse.slug}</h2>
    //                 <h3>{currentCourse.id}</h3>
    //
    //             </>
    //             :
    //             <NotFound/>
    //         }
    //         <Link to=".." relative="path">All courses</Link>
    //     </>
    // );
};

export default SingleCourse;