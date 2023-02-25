import React from 'react'
import './Tokenomics.css'
import Token from '../Images/tokenomics.png'
import Chart from '../Images/TAX.png'

const Tokenomics = () => {
    return (
        <div className="tokenomics-container" id='tokenomics'>
            <h1>TOKENOMICS</h1>
            <div className="tokenomics-row">
                <div className="tokenomics-box" data-aos="fade-left">
                    <div className="tokenomics-content-1">
                        <div className="info-1">
                            <h2>Token Name :</h2>
                            <h2>Happy New Hare</h2>
                        </div>
                        <div className="info-1">
                            <h2>Token Symbol :</h2>
                            <h2>2K23</h2>
                        </div>
                        <div className="info-1">
                            <h2>Total Supply :</h2>
                            <h2>10,000,000,000</h2>
                        </div>
                        <div className="info-1">
                            <h2>Token Network :</h2>
                            <h2>ERC20</h2>
                        </div>
                        <div className="info-1">
                            <h2>Buy/Sell Tax :</h2>
                            <h2>0%</h2>
                        </div>
                    </div>
                </div>
                <div className="tokenomics-box-2" data-aos="fade-right">
                    <img src={Chart}/>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics