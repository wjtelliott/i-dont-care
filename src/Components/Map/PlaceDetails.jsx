import React from 'react';
export default function PlaceDetails({details}) {
    return (
        <div className='w-100 text-white bg-dark d-flex flex-nowrap justify-content-between py-2'>
            <p className='align-self-center w-75 m-auto mx-1'>
                Eventually the details and pictures of this place will go here. Until then, this is the api data we recevied:
                <pre>
                    {
                        JSON.stringify(details, null, 2)
                    }
                </pre>
            </p>
        </div>
    )
}