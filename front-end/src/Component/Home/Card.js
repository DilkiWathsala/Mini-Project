import React from 'react';

const Card=({driverName, contactNo, district, schools, rating})=>{
    return(
        <>
            <div className='col-xs-12 col-sm-6 col-md-4 my-3'>
                <div className="card" >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Driver's Name: </b> {driverName} </li>
                        <li className="list-group-item"><b>Contact No: </b>{contactNo}</li>
                        <li className="list-group-item"><b>District: </b>{district}</li>
                        <li className="list-group-item"><b>Schools: </b>{schools}</li>
                        
                    </ul>
                </div>
            </div>
                   
        </>
    )
}
export default Card;