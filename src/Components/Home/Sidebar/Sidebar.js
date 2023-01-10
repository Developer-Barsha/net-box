import React, { useRef, useState } from 'react';
import logo from './logo.png';
import './Sidebar.css'

const Sidebar = () => {
    let deviceItems = [
        {
            id: 0,
            title: 'Samsung TV',
            items: ['Port NO 1', 'Port NO 2', 'Port NO 3', 'Port NO 4']
        },
        {
            id: 1,
            title: 'Speakers',
            items: ['Port NO 1', 'Port NO 2', 'Port NO 3']
        }
    ];

    const [deviceItemss, setDeviceItemss] = useState(deviceItems);

    const addItemRef = useRef('');
    const addItem = () => {
        let newItem = {
            id: deviceItems.length,
            title: addItemRef?.current?.value,
            items: ['No item']
        }

        console.log(deviceItemss);

        deviceItems.push(newItem);
        setDeviceItemss(...deviceItems, newItem);
    };

    return (
        <section className='sidebar'>
            <img src={logo} className='my-5 p-5' width={'200'} alt="" />
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="flex justify-between bg-primary p-5 w-full text-black border-0">
                <p><i class="fa-solid fa-server pr-3"></i> <span>Devices</span></p> <i class="fa-solid fa-plus"></i></label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add new item</h3>
                    <input type="text" ref={addItemRef} placeholder="Type here" className="input input-bordered w-full my-3" />
                    <div className="flex justify-between items-center">
                        <button className='btn btn-success' onClick={() => addItem()}>Add</button>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn btn-error">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>

            {deviceItemss.map(item => {
                return <div className="collapse -mt-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>{item?.title}</p>
                    </div>
                    <div className="collapse-content pt-2 pl-5 text-base-100 peer-checked:bg-accent peer-checked:text-secondary-content ml-5">
                        <ul>
                            {item?.items?.map(li => {
                                return <li className='hover:bg-primary px-3 rounded-md'>{li}</li>
                            })}
                        </ul>
                    </div>
                </div>
            })}
        </section >
    );
};

export default Sidebar;