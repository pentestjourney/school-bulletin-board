function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4');

        const postTitle = document.createElement('div');
        postTitle.classList.add('post-title', 'text-xl', 'font-bold', 'mb-2');
        postTitle.textContent = post.title;

        const postContent = document.createElement('div');
        postContent.classList.add('text-gray-700', 'mb-4');
        postContent.textContent = post.content;

        const commentButton = document.createElement('button');
        commentButton.classList.add('bg-blue-500', 'text-white', 'px-3', 'py-1', 'rounded', 'hover:bg-blue-700');
        commentButton.textContent = 'Comment';
        commentButton.onclick = () => addComment(post.id);

        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments', 'mt-4', 'pl-4', 'border-l', 'border-gray-300');
        post.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment', 'text-gray-600', 'mt-2');
            commentElement.textContent = comment;
            commentsSection.appendChild(commentElement);
        });

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);
        postElement.appendChild(commentButton);
        postElement.appendChild(commentsSection);

        postsContainer.appendChild(postElement);
    });
}
