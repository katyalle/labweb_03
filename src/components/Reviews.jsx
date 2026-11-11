import { useEffect, useState } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function loadReviews() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/15/comments');
            const data = await response.json();
            setComments(data);
        }

        loadReviews();
    }, []);

    return (
        <section className="border border-blue-200 p-6 border-4 my-6" id="reviews">
            <h2>Відгуки роботодавців</h2>

            {comments.length === 0 && <p>Завантаження відгуків...</p>}

            {comments.map((comment) => (
                <div key={comment.id} className="border p-4 my-4">
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </section>
    );
}

export default Reviews;