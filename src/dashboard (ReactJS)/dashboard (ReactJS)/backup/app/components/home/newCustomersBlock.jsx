// React
import React, { PureComponent } from 'react'
// Router
import { NavLink, Link } from 'react-router-dom'

const newCustomersListArr = [
    {img: '//robohash.org/d4c86ee2c4301b366e4d806b16113e35.png?size=32x32', name: 'Warren Mathis'},
    {img: '//robohash.org/9ab75540de7e60441f7772f2353ac4a7.png?size=32x32', name: 'Adrian Brady'},
    {img: '//robohash.org/fc066b9136c2caaa6c13c7f10aa8c06b.png?size=32x32', name: 'Willie Carr'},
    {img: '//robohash.org/e4a2e2e950f48836cff1374bf2d6b9a1.png?size=32x32', name: 'Bettie Jensen'},
];

class NewCustomersBlock extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const newCustomersList = newCustomersListArr.map((item, i) =>
            <li className="home__block-item" key={i} >
                <Link to={`customers/${i}`} className='link clearfix'>
                    <img src={item.img} alt="" width='40' />
                    <span className="home__block-content">{item.name}</span>
                </Link>
            </li>
        );
        return(
            <div className='home__block list customers left' style={{flex: 1}}>
                <div className="home__block-header clearfix">
                    <div className="home__block-info">
                        <span className="home__block-count">{newCustomersListArr.length}</span>
                        <span className="home__block-sbt">New Customers</span>
                    </div>
                    <div className="home__block-icon">
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="54">
                            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                </div>
                <ul className="home__block-list">
                    {newCustomersList}
                </ul>
            </div>
        )
    }
}

export default NewCustomersBlock