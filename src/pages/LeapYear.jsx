import React, { useState } from 'react'

const LeapYear = () => {
    const [showRes, setShowRes] = useState(null);
    const isLeapYear=(year)=>{
       return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ;
       
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const input = formData.get("year");

        if(!isNaN(input)&& input >=0){
            const year = parseInt(input,10);

            const result = isLeapYear(year) 
            ? `${year} is a leap year`
            : `${year} is not a leap year`;
            setShowRes(result);
    }else{
        setShowRes("Please enter a valid year");
    }
}
  return (
    <section className='h-[100vh] pl-[20%] w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 overflow-y-hidden'>
            <h3 className='text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse h-[20%]'>Enter a year, hit the button and I'll tell you if it was a leap year</h3>

            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                <input type="number" name="year" className='border-4 mb-16 border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 w-3/4 max-w-md h-14 rounded-full px-5 text-lg text-gray-800 shadow-md transition-all duration-300' />

                <button type="submit" className='w-24 h-24 mt-10 bg-purple-500 text-white font-bold text-xl rounded-full shadow-lg hover:scale-110 hover:shadow-2xl active:scale-95 transition-transform duration-300'>Check</button>
            </form>

            {
                showRes !== null && (
                    <p className="text-4xl mt-8 text-green-400 font-bold ">{showRes}</p>
                )
            }

           
            
        </section>
  )
}

export default LeapYear
