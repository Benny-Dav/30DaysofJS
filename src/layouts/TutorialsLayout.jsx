import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
useState

const TutorialsLayout = () => {

    const [showTutorial, setShowTutorial] = useState(null);
    const handleTutorialClick = () => {
        setShowTutorial(true);
    }

    const Tabs = [
        {
            id: 1,
            title: "Day 1: Factorial",
            path: "/tutorials/factorial"
        },
        {
            id: 2,
            title: "Day 2: Leap Year",
            path: "/tutorials/leap-year"
        },
        {
            id: 3,
            title: "Day 3: Random Number",
            path: "/tutorials/random-number"
        },
        

    ]
    return (
        <section className='flex overflow-y-hidden'>
            <aside className='fixed top-0 left-0 w-[20%] h-full bg-orange-200 flex flex-col px-4 pt-16 '>
                <h3 className='text-center font-bold text-2xl mb-4'>30 Days of JS</h3>
                <ul className='flex flex-col gap-y-4'>
                    {
                        Tabs.map((tutorial, index) => (
                            <button key={index} onClick={handleTutorialClick}>
                                <li className="border bg-gray-100 py-2 px-4 rounded-lg" >
                                    <Link to={tutorial.path}>
                                        {tutorial.title}
                                    </Link>
                                </li>
                            </button>
                        ))}
                </ul>
            </aside>

            <main className='bg-red-200 border-4 h-[100vh] w-full'>
                {
                   showTutorial !== null && (
                    <Outlet className="w-[80%]" />
                   )
                }
            </main>
        </section>
    )
}

export default TutorialsLayout