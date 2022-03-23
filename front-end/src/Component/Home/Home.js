import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Data from './Apidata';


const Home=()=>{
    return(
        <>
            
            <h1 className='text-center text-info my-5'> SELECT THE MOST SUITABLE SCHOOL VAN FOR YOUR CHILD </h1>
           
            <div className='select col-md-3 text-center'>
                <div className='district'>
                    <h5>Select Your Living District</h5>
                    <select className="form-select my-3" aria-label="Default select example">
                        <option defaultValue=''></option>
                        <option value="1">Colombo</option>
                        <option value="2">Gampaha</option>
                        <option value="3">Kaluthara</option>
                    </select>
                </div>
                
                <div className='district'>
                    <h5>Select the Student's School</h5>
                    <select className="form-select my-3" aria-label="Default select example">
                        <option defaultValue=''></option>
                        <option value="1">Ananda College, Colombo</option>
                        <option value="2">Asoka College, Colombo</option>
                        <option value="3">Girl's High School, Dehiwala-Mount Lavinia</option>
                        <option value="4">Gothami Balika Vidyalaya, Colombo</option>
                        <option value="5">Mahanama College, Colombo</option>
                        <option value="6">Royal College, Colombo</option>
                        <option value="7">St. Joseph's Girls School, Nugegoda</option>
                        <option value="8">St. Peter's College, Colombo</option>
                        <option value="9">Thurstan College, Colombo</option>
                        <option value="10">Zahira College, Colombo</option>
                    </select>
                </div>               
           </div>           
               
               

             {/* card section */}  

           <div className='container'>
               <div className='row'>
                   {Data.map((values)=>{
                       return(
                           <>
                                <Card 
                                    driverName={values.driverName} 
                                    contactNo={values.contactNo} 
                                    district={values.district}
                                    schools={values.schools}
                                    rating={values.rating}
                                />
                           </>
                       )
                   })}
                   
                   
               </div>
           </div>
        </>
    )
}
export default Home;