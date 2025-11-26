import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full  fixed top-0 items-center font-[PPNeueMontreal] flex  p-[2vw] justify-between'>
            <div className='xl:text-[1.5vw]  font-bold xl:leading-[2vw] text-black'>
                <h1>Naveen</h1>
            </div>
            <div className='xl:text-[1vw] font-semibold xl:leading-[1vw]'>
                {["about"].map((navs,id) => (
                    <div key={id}>
                        <a href={navs}>{navs}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
