import React, { useState } from 'react'

const Factorial = () => {
    const [showRes, setShowRes] = useState(null);



    const calcFact = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * calcFact(n - 1);


    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const input= formData.get("number");

        if(!isNaN(input) && input >= 0){
            const factorial = calcFact(input);
        setShowRes(factorial);
        } else{
            setShowRes("Please enter a valid non-negativenumber")
        }
        
    }


    return (
        <section className='h-[100vh] pl-[20%] w-[100%] flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 overflow-y-hidden'>
            <h3 className='text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse h-[20%]'>Enter a number and hit the button to generate its factorial</h3>

            <form onSubmit={handleSubmit} className='flex w-full flex-col justify-center items-center'>
                <input type="number" name="number" className='border-4 mb-16 border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 w-3/4 max-w-md h-14 rounded-full px-5 text-lg text-gray-800 shadow-md transition-all duration-300' />

                <button type="submit" className='w-28 h-28 mt-10 bg-purple-500 text-white font-bold text-xl rounded-full shadow-lg hover:scale-110 hover:shadow-2xl active:scale-95 transition-transform duration-300 '>Generate</button>
            </form>



            {/* <div className="absolute top-5 left-5 bg-purple-200 w-16 h-16 rounded-full blur-lg opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 bg-yellow-200 w-24 h-24 rounded-full blur-lg opacity-50 animate-pulse"></div> */}
            {
                showRes !== null && (
                    <p className="text-4xl mt-8 text-green-400 font-bold ">

                        Factorial: {showRes}
                    </p>
                )
            }

            
        </section>
    )
}

export default Factorial