import React, { useState } from 'react';
import './Main.css';

const Main = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [port, setPort] = useState('');

    const tvUlItems = [
        {
            icon: "fa-brands fa-usb",
            tooltip: '1',
            connected: '2'
        },
        {
            icon: "fa-solid fa-computer",
            tooltip: '2',
            connected: '1'
        },
        {
            icon: "fa-solid fa-computer",
            tooltip: '3',
            connected: '3'
        },
        {
            icon: "fa-solid fa-computer",
            tooltip: '4',
            connected: '1'
        }
    ];

    const speakerItems = [
        {
            icon: "fa-solid fa-computer",
            tooltip: '2',
            connected: 'Connected to TV 1, 4'
        },
        {
            icon: "fa-solid fa-computer",
            tooltip: '3',
            connected: 'Connected to TV 2'
        },
        {
            icon: "fa-solid fa-computer",
            tooltip: '3',
            connected: 'Connected to TV 3'
        }
    ];

    const showing = (clickedPort) => {
        setPort(clickedPort);
        console.log(port, clickedPort);
        speakerItems.forEach(item => {
            if (item?.tooltip === clickedPort) {
                setShowTooltip(true);
            }
        })
    }


    return (
        <section className='main w-full'>
            <div className="top p-3 flex justify-between items-center">
                <h2 style={{fontSize:'22px'}}>Device Connections</h2>
                {/* <input type="text" className='w-60' placeholder='Search' />
                <button>All Objects</button>
                <button><i class="fa-solid fa-filter"></i></button>
                <button className='bg-blue-500 btn-radius'><i class="fa-solid fa-magnifying-glass"></i></button> */}
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn flex items-center gap-3 bg-white text-black m-1"><i class="fa-solid fa-user"></i> Admin <i class="fa-solid fa-caret-down"></i></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-5 py-5 px-8">
                <div className='col'>
                    <p><i class="fa-solid fa-tv"></i> Samsung TV</p>
                    <ul className='flex justify-between mt-8'>
                        {tvUlItems.map(ulItem => {
                            return <div>
                                {(showTooltip && ulItem?.connected.includes(port)) && <p className='bg-accent px-1 rounded-md mb-1'>{ulItem?.connected}</p>}
                                <li className='tooltip' onClick={() => showing(ulItem?.connected)} data-tip={ulItem?.tooltip}><i className={`${ulItem?.icon} btn btn-primary`}></i></li>
                            </div>
                        })}
                    </ul>
                </div>
                {/* <hr id='cLine' className={`${show} ? 'block' || 'hidden'`} /> */}
                <div className='col'>
                    <p><i class="fa-solid fa-route"></i> Routes</p>
                    <ul className='flex justify-between mt-8'>
                        {speakerItems.map(ulItem => {
                            return <div>
                                {(showTooltip && ulItem?.connected.includes(port)) && <p className='bg-accent px-1 rounded-md mb-1'>{ulItem?.connected}</p>}
                                <li className="tooltip" data-tip={ulItem?.tooltip}><i className={`${ulItem?.icon} btn btn-primary`}></i></li>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Main;