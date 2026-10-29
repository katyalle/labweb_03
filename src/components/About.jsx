function About({ text }) {
    return (
        <section className="border border-blue-200 p-6 border-4 my-6"  id="about">
            <h2>Про мене</h2>
            <p>{text}</p>
        </section>
    );
}

export default About;