import { Link } from "react-router-dom"

const Nav = ({ search, setSearch, setCurrentItem }) => {
    return (
        <div className='Nav'>
            <input
                type="text"
                placeholder="Search Post"
                value={search}

                onChange={(e) => {
                    e.preventDefault()
                    setSearch(e.target.value)
                }}
            />

            <div id="Nav-nav">


                <Link to='/home' className="navClick"
                    onClick={() => { setCurrentItem('') }}
                >Home</Link>
                <Link to='/post' className="navClick">Post</Link>
                <Link to='/about' className="navClick">About</Link>

            </div>
        </div>
    )
}

export default Nav