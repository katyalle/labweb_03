function TechnicalSkills({ skills }) {
    return (
        <section className="my-4" id="technical-skills">
            <h2 className="underline decoration-blue-200 decoration-2">Технічні навички</h2>
            <ul className="list-disc list-inside marker:text-blue-200 ">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default TechnicalSkills;