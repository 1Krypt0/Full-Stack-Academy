const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
