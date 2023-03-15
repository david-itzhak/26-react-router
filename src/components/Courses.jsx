import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import courses from "../data/courses";

const SORT_KEYS = ['id', 'title', 'slug']

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    if (!key) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1);
    return sortedCourses;
}

const Courses = () => {
    let location = useLocation();
    let parse = queryString.parse(location.search);
    const [sortKey] = useState((parse.sort && SORT_KEYS.includes(parse.sort))
        ?
        parse.sort
        :
        undefined);
    const [sortedCourses] = useState(sortCourses(courses, sortKey));
    const navigateFunction = useNavigate();
    useEffect(() => {
        if (!SORT_KEYS.includes(parse.sort)){
            navigateFunction('.');
        }
    }, [parse.sort, navigateFunction]);
    return (
        <>
            <h1>Courses{sortKey && ` sorted by ${sortKey}`}:</h1>
            {sortedCourses.map((course, index) => {
                return (
                    <div key={index}>
                        <Link to={course.slug} className="courseLink">{course.title}</Link>
                        <br/>
                    </div>
                )
            })}
        </>
    );
};

export default Courses;