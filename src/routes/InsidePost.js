let InsidePost = ({ insidePostValue }) => {
    if (!insidePostValue) {
        return <div className="InsidePost">Loading...</div>; // Placeholder while loading
    }

    return (
        <div className="InsidePost">
            <div className="items">
                <p className="items-title">{insidePostValue.title}</p>
                <p className='items-dataTime'>{insidePostValue.dataTime}</p>
                <p className='items-message'>{insidePostValue.message}</p>
            </div>
        </div>
    );
};

export default InsidePost;