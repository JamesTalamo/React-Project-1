const PostPage = ({ newTitle, newMessage, setNewTitle, setNewMessage, addPost }) => {
    return (
        <form className='PostPage' onSubmit={addPost}>
            <div id="PostPage-newPost">New Post</div>
            <div id="PostPage-title-label">Title:</div>

            <input id="PostPage-input-title"
                value={newTitle}
                onChange={(e) => {
                    setNewTitle(e.target.value)
                }}
            />

            <div id="PostPage-post-label">Post:</div>

            <textarea type='text' id="PostPage-input-post"
                value={newMessage}
                onChange={(e) => {
                    setNewMessage(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault(); // Prevent adding a new line
                        addPost(e); // Trigger form submission
                    }
                }}
            />

            <button type="submit" id="PostPage-button">SUBMIT</button>
        </form>
    )
}

export default PostPage

