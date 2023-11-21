import React, { memo, useEffect, useState } from 'react'
import { FiAlignLeft, FiAlignCenter, FiAlignRight, FiAlignJustify, FiActivity, FiAirplay } from "react-icons/fi";
import './index.css'

const ToggleButton = ({
    className = '',
    listIcons = [
        FiAlignLeft, FiAlignCenter, FiAlignRight, FiAlignJustify, FiActivity, FiAirplay
    ]
}) => {
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className={`ToggleButton ${className}`}>
                {listIcons.map((Val, index) => {
                    return <div key={index} className={`item ${active === index ? 'active' : ''}`} onClick={() => { setActive(index) }}>
                        {<Val className='icon'/>}
                    </div>
                })}
            </div>  
        </>
    )
}

export default memo(ToggleButton)