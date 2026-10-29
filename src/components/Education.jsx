function Education({ items }) {
    return (
        <section className="bg-blue-200 " id="education">
            <h2 className=" text-center my-2">Освіта</h2>
    
            {items.map((item, index) => (
                <article key={index}>
                    <p><b>{item.university}</b></p>
                    <p>{item.specialty}</p>
                    <p>{item.period}</p>
                </article>
            ))}
        </section>
    );
}

export default Education;