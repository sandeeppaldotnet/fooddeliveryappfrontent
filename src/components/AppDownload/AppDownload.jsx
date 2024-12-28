import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets';
import TypingEffects from '../Header/TypingEffect';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
           
            <TypingEffects text="Download foody App"/>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
