import React from 'react'
import Hero from '../components/Hero'
import CardLayout from '../components/Blogs'
import AddBlog from '../components/AddBlog'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <Hero />
      <CardLayout />
      <AddBlog />
      <Blog/>
    </div>
  )
}

export default Home
