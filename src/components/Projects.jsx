function Projects({ title, list }) {
    return (
        <section  className="my-4" id="projects">
            <h2 className="underline decoration-blue-200 decoration-2">Навчальні проєкти</h2>
            <h3>{title}</h3>
            <ul className="list-disc list-inside marker:text-blue-200 ">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;