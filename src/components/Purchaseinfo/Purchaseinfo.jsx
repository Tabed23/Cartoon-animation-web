import React from 'react'
import './Purchaseinfo.css'

import s1 from '../../assets/images/3.png'
import s2 from '../../assets/images/4.png'
import s3 from '../../assets/images/5.png'
import s4 from '../../assets/images/6.png'
import s5 from '../../assets/images/facebook.png'
import s6 from '../../assets/images/twitter.png'

const Purchaseinfo = () => {
  return (
    <>
    <section className="purchaseinfo">
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <h2>WHAT HAPPENS, WHEN I MAKE PURCHASE?</h2>
                    <div className="infotile">
                        <h3>Instant redirection</h3>
                        <p>Right after payment, you will be redirected back to <span>swiftboost.gg</span>, where you will register for an account.</p>
                    </div>
                    <div className="infotile">
                        <h3>Smart Client Dashboard</h3>
                        <p>Our client dashboard will have all the features you need to extend, or cancel your boost, speak to your assigned supervisor. Boost progress is updated in real time.
                        Add-ons you do have attached to your service, are accessible on the dashboard. Loyalty progress & swift points are displayed here.</p>
                    </div>
                    <div className="infotile">
                        <h3>The Boost Begins</h3>
                        <p>Orders, once taken up by our boosters, usually within 5-10 minutes. Sometimes may take a little longer than that, though those situations are rare. You will get pinged, that a match has been found for your contract.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="servicefeature">
        <div className="container">
            <div className="col-lg-8">
                <h2>Dota 2 Boost Service Features</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="servicetile">
                            <h3>We are the swiftest MMR boosting service available</h3>
                            <p>Only possible because of our hand picked selection of boosters, and the large amount of boosters we have on hand ready to work for you.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="servicetile">
                            <h3>Our service operates 24/7</h3>
                            <p>Our streamlined order distribution system allows for your boost to start as soon as check out completes.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="servicetile">
                            <h3>We don't offer
fake discounts</h3>
                            <p>Due to our loyalty program our loyal customers can really get the best price in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="getmmr">
        <div className="container">
            <h2>GET MMR BOOST FROM <span>Swiftboost.gg!</span> </h2>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <div className="getmmrtile">
                        <h3>Swift As The Wolves Of Icewrack</h3>
                        <p>A robust check out system, and streamlined order distribution lets us get your orders started almost immediately!</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="getmmrtile">
                        <h3>Swift As The Wolves Of Icewrack</h3>
                        <p>A robust check out system, and streamlined order distribution lets us get your orders started almost immediately!</p>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <button>
                START BOOSTING NOW
            </button>
        </div>
    </section>
    <section className="dontmissout">
        <div className="container">
            <div className="solcialicons">
                <span><img src={s1} alt="" /></span>
                <span><img src={s2} alt="" /></span>
                <span><img src={s3} alt="" /></span>
                <span><img src={s4} alt="" /></span>
                <span><img src={s5} alt="" /></span>
                <span><img src={s6} alt="" /></span>
            </div>
            <h3>don’t miss out, SAVE 33% ON BOOSTING NOW</h3>
            <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut </p>
                <div className="coupeninput">
                  <input type="text" />
                  <button>ENTER</button>
                </div>
        </div>
    </section>
    </>
  )
}

export default Purchaseinfo