import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    
    <div>
        <Navbar />
        <main class="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        <header></header>
        <div class="relative z-20 flex items-center">
          <div class="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
            <div class="flex flex-col">
              <h2 class="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                HOGWARTS SCHOOL
              </h2>
              <p class="my-6 text-3xl text-center dark:text-white">
              Hogwarts is one of the world’s finest wizarding schools, located in a massive castle in Scotland. Hogwarts takes students from all over Great Britain, starting at the age of 11. The students leave school after their seventh year.
              </p>
              <p class="my-6 text-3xl text-center dark:text-white">
              The students at Hogwarts are sorted at the beginning of their first year into one of four houses: Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. The houses are named after the four founders of the school, who established Hogwarts around 990
Hogwarts is home to a student body of between 300 and 400 students, around fifteen teachers and staff, numerous ghosts, house-elves, and a particularly annoying poltergeist. The many rooms, corridors, staircases, passageways, and dungeons hold many secrets and mysteries from a thousand years’ worth of magical history.
                </p>
              
              <div class="flex items-center justify-center mt-4">
                <a
                  href="#"
                  class="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
        </div>
  )
}

export default About