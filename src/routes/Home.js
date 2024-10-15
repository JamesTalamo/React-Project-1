import InsidePost from "./InsidePost"
import { Link } from "react-router-dom"

import { useState, useEffect } from "react"


const Home = ({ items, setCurrentItem, currentItem }) => {

    let [insidePostValue, setInsidePostValue] = useState(null)

    useEffect(() => {

    }, [insidePostValue]);

    let fetchItems = async (id) => {

        try {
            let res = await fetch('http://localhost:3500/items');
            if (!res.ok) throw new Error('Failed to fetch items');

            let data = await res.json();

            // Find the item based on the ID, assuming IDs are unique
            const item = data.find(item => item.id === id);

            if (item) {
                // console.log(item);
                setInsidePostValue(item);
            } else {
                console.warn('Item not found');
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    let biggerInfo = (id) => {
        console.log('You clicked me')

        // console.log(id)
        setCurrentItem(id)
        fetchItems(id)

        // console.log(insidePostValue)

    }



    return (
        <div className='Home'>

            {currentItem ? <InsidePost
                insidePostValue={insidePostValue} /> : (items.map((item) => (
                    <div className="items" key={item.id}
                        onClick={() => biggerInfo(item.id)}
                    >
                        <p className="items-title">{item.title}</p>
                        <p className='items-dataTime'>{item.dataTime}</p>
                        <p className='items-message'>{item.message}</p>
                    </div>
                )))}

        </div>
    )
}

export default Home