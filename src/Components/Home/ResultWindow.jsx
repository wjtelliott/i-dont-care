import React from 'react';
import { Link } from 'react-router-dom'
export default function ResultsWindow(props) {

    const _TITLE = 'A few of your results...'

    const fakeResultData = ['Loading....']

    const searchBtnStyles = {
        backgroundColor: 'var(--foreground-color-primary)',
        borderRadius: '30px 30px 30px 30px',
        color: 'white',
        boxShadow: '5px 3px 6px black',
        border: '1px solid white',
        width: '100%'
    }

    const displayResults = () => {

        const data = props.results?.results?.length > 0 ? props.results.results : fakeResultData;

        return (

            <div>
                {
                    data.map((el, index) => {
                        return (
                            <div key={`check${index}`} className="custom-control custom-checkbox">
                                {/* <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} /> */}
                                <label className="custom-control-label mx-2" htmlFor={`customCheck${index}`}>{el.name? el.name : el}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='card m-auto p-4 my-5 w-75'>
            <div className='card-header'>
                <p className='card-title display-6'>{_TITLE}</p>
            </div>
            <div className='card-body'>
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className='w-75' id='results-wrap'>
                        {displayResults()}
                    </div>
                    <div className='w-25 d-flex flex-nowrap justify-content-center' id='button-wrap'>
                        <Link className="w-100 align-self-center" to='/map'><button style={searchBtnStyles} type="button" id="search-button" >Roll the dice!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}