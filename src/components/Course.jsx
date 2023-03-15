const Course = ({course}) => {
    const {id, title, slug} = course;
    return (
        <div>
            <h3>{id}</h3>
            <h1>{title}</h1>
            <h2>{slug}</h2>
        </div>
    );
};

export default Course;