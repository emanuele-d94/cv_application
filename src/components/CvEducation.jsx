import '../styles/Cv.css'
import Education from "./Education";

export default function CvEducation({education,setEducation}) {

    return (
        <div className="cv-education">
            <h2>Education</h2>
            {education.map((e) => (
                <Education
                    key={e.id}
                    id = {e.id}
                    institute={e.institute}
                    title={e.title}
                    year={e.year}
                    grade={e.grade}
                    education={education}
                    setEducation={setEducation}
                />
            ))}
        </div>
    );
}