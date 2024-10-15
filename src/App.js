import Missing from "./routes/Missing";

import About from "./routes/About";
import Home from "./routes/Home";
import PostPage from "./routes/PostPage";
import InsidePost from "./routes/InsidePost";

import Nav from "./routes/Nav";
import Header from "./routes/Header";
import Footer from "./routes/Footer";


import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";


function App() {
  let URL = 'http://localhost:3500/items'

  let fetchItem = async () => {

    try {
      let res = await fetch(URL)
      if (!res.ok) throw new Error('ERROR')
      let data = await res.json()
      setItems(data)
    } catch (err) {
      console.warn()
    }
  }


  let [items, setItems] = useState([])

  useEffect(() => { // Itong FIRST (1) use effect na ito, kinukuha lang muna yung items
    fetchItem()

  }, [])

  useEffect(() => { // Itong SECOND (2) use effect na ito, nag uupdata if may nagbabago sa items, so no need to refresh page
    if (items.length > 0) {
      fetchItem();
    }


  }, [items])




  let [newTitle, setNewTitle] = useState('')
  let [newMessage, setNewMessage] = useState('')

  let [search, setSearch] = useState('')

  let [currentItem, setCurrentItem] = useState('')



  let addPost = (e) => {
    e.preventDefault()

    if (!newTitle || !newMessage) return

    let obj = {
      id: items.length ? Number(items[items.length - 1].id) + 1 : 1,
      title: newTitle,
      dataTime: 'wala muna to',
      message: newMessage
    }

    // console.log(obj)

    let postFetch = async () => {
      let res = await fetch(URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      if (!res.ok) throw new Error('Error fetch')
    }



    postFetch()

    setNewTitle('')
    setNewMessage('')

  }



  return (
    <div className="App">
      <div style={{
        width: '70%', height: '100vh', backgroundColor: 'white',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
      }}>
        <Header title={'REACT JS BLOG'} />
        <Nav
          search={search}
          setSearch={setSearch}

          setCurrentItem={setCurrentItem}
        />
        <Routes > {/*Routes, tapos naka-balot sa loob yung route na gagamitin mo*/}

          <Route path="*" element={
            <Missing />
          }>
          </Route>

          <Route path="/" element={
            <Home
              items={items.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}


            />
          }>
          </Route>

          <Route path="/home" element={
            <Home
              items={items.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}


            />
          }>
          </Route>

          <Route path="/post" element={
            <PostPage
              newTitle={newTitle}
              newMessage={newMessage}
              setNewTitle={setNewTitle}
              setNewMessage={setNewMessage}

              addPost={addPost}
            />
          }>
          </Route>
          <Route path="/about" element={
            <About />
          }>
          </Route>

          <Route path="/:home/:id" element={
            <InsidePost />
          } />


        </Routes>
        <Footer />
      </div>

    </div>


  );
}

export default App;