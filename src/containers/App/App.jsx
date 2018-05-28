import React from 'react'
import { hot } from 'react-hot-loader'
import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'


import TopNav from '@/components/TopNav'
import CourseBuilder from '@/components/CourseBuilder'

const App = () => (
  <div>
    <TopNav />

    <CourseBuilder />
  </div>
)

const hotApp = hot(module)(App)
export default DragDropContext(Html5Backend)(hotApp)
