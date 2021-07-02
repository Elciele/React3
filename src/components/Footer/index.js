import React from 'react'
import Github from '../../assets/Github.svg'
import Instagram from '../../assets/Instagram.svg'


import './styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Elciele Correa</p>
            <div class="lista-link">
                <a className="link" href="https://github.com/Elciele" target="blank"><img src={Github} alt="icon github" />
                </a>
                <a className="link" href="https://www.instagram.com/elcielecorrea/" target="blank"><img src={Instagram} alt="icon instagram" />
                </a>
            </div>



        </div>
    )
}


export default Footer