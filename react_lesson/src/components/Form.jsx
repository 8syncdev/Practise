import React from 'react'
import './Form.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Form = () => {
    /*
        trong useState: 
            + cú pháp: const [tên_biến_lưu_trạng_thái, tên_hàm_thay_state] = useState(giá_trị)
            + hàm thay đổi lại trang thái thì phần tử sẽ chạy lại.
        {truyền vào code js}
    */
    const [stateDrop, setDrop] = useState(0)
    console.log(stateDrop)
    const handleClick = () => {
        if (stateDrop === 0)
            setDrop(1)
        else 
            setDrop(0)
    }
    return (
        <>
            <div className="inner-form bg-white p-5">
                <div className="inner-wrap">
                    <p className="inner-tile text-black fw-bold">Where you go</p>
                    <div className="input-1 position-relative mb-3">
                        <input type="text" placeholder='try "Singapore"' className='text-black px-2 py-3' />
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-1'>
                            <path d="M18.3984 29.8075L18.848 30.7007L18.848 30.7007L18.3984 29.8075ZM17.6016 29.8075L18.0511 28.9142L18.0511 28.9142L17.6016 29.8075ZM27.5 16.5C27.5 20.01 25.6534 22.854 23.4691 24.99C21.2874 27.1234 18.8638 28.4537 17.9489 28.9142L18.848 30.7007C19.8504 30.1962 22.4775 28.757 24.8674 26.4199C27.2545 24.0856 29.5 20.7583 29.5 16.5H27.5ZM18 7C23.2467 7 27.5 11.2533 27.5 16.5H29.5C29.5 10.1487 24.3513 5 18 5V7ZM8.5 16.5C8.5 11.2533 12.7533 7 18 7V5C11.6487 5 6.5 10.1487 6.5 16.5H8.5ZM18.0511 28.9142C17.1362 28.4537 14.7126 27.1234 12.5309 24.99C10.3466 22.854 8.5 20.01 8.5 16.5H6.5C6.5 20.7583 8.74549 24.0856 11.1326 26.4199C13.5224 28.757 16.1496 30.1962 17.152 30.7007L18.0511 28.9142ZM17.9489 28.9142C17.9584 28.9094 17.9765 28.9035 18 28.9035C18.0235 28.9035 18.0416 28.9094 18.0511 28.9142L17.152 30.7007C17.6892 30.9711 18.3108 30.9711 18.848 30.7007L17.9489 28.9142ZM21.5 16.5C21.5 18.433 19.933 20 18 20V22C21.0376 22 23.5 19.5376 23.5 16.5H21.5ZM18 13C19.933 13 21.5 14.567 21.5 16.5H23.5C23.5 13.4624 21.0376 11 18 11V13ZM14.5 16.5C14.5 14.567 16.067 13 18 13V11C14.9624 11 12.5 13.4624 12.5 16.5H14.5ZM18 20C16.067 20 14.5 18.433 14.5 16.5H12.5C12.5 19.5376 14.9624 22 18 22V20Z" fill="#33363F" />
                        </svg>
                    </div>
                    <div className='d-flex justify-content-between gap-4 mb-3'>
                        <div className="inner-wrap w-50">
                            <p className="inner-title text-black fw-bold">Check In</p>
                            <div className="input-1 position-relative">
                                <input type="date" placeholder='try "Singapore"' className='px-2 py-3 text-black' />
                            </div>
                        </div>
                        <div className="inner-wrap w-50">
                            <p className="inner-title text-black fw-bold">Check Out</p>
                            <div className="input-1 position-relative ">
                                <input type="date" placeholder='try "Singapore"' className='px-2 py-3 text-black' />
                            </div>
                        </div>

                    </div>
                    <p className="inner-tile text-black fw-bold">Guess</p>
                    <div className="input-1 position-relative mb-3">
                        <input type="text" placeholder='try "Singapore"' className='px-2 py-3 text-black' />
                        <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-1' onClick={handleClick}
                            variants={{
                                close: { rotateX: 0 },
                                open: { rotateX: 180 }
                            }}
                            initial='close'
                            animate={stateDrop===1 ? 'open':''}
                        >
                            <path d="M27 13.5L18 22.5L9 13.5" stroke="#33363F" strokeWidth="2" />
                        </motion.svg>
                        
                    </div>
                    <div className="show-list position-relative">
                        <div className="drop">
                            {stateDrop === 1 ? (
                                <>
                                    <ul className='list-item'>
                                        <motion.li className='text-black'
                                            variants={{
                                                hidden: { opacity: 0, y: -10 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                            initial={'hidden'}
                                            animate={stateDrop === 1 ? 'show' : ''}
                                            transition={{
                                                duration: 1,
                                                delay: 1.5,
                                                ease: 'easeInOut',
                                                velocity: 0.001,
                                                type: 'spring',
                                                restDelta: 0.001,
                                                restSpeed: 0.001,
                                            }}
                                        >lựa chọn 1</motion.li>
                                        <motion.li className='text-black'
                                            variants={{
                                                hidden: { opacity: 0, y: -10 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                            initial={'hidden'}
                                            animate={stateDrop === 1 ? 'show' : ''}
                                            transition={{
                                                duration: 1,
                                                delay: 1,
                                                ease: 'easeInOut',
                                                velocity: 0.001,
                                                type: 'spring',
                                                restDelta: 0.001,
                                                restSpeed: 0.001,
                                            }}
                                        >lựa chọn 2</motion.li>
                                        <motion.li className='text-black'
                                            variants={{
                                                hidden: { opacity: 0, y: -10 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                            initial={'hidden'}
                                            animate={stateDrop === 1 ? 'show' : ''}
                                            transition={{
                                                duration: 1,
                                                delay: 0.3,
                                                ease: 'easeInOut',
                                                velocity: 0.001,
                                                type: 'spring',
                                                restDelta: 0.001,
                                                restSpeed: 0.001,
                                            }}
                                        >lựa chọn 3</motion.li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Form