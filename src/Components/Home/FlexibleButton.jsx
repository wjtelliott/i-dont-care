import React from 'react';
export default function FlexibleButton() {

    const _BUTTON_TEXT = `I'm Flexible`


    const flexBtnStyles = {
        backgroundColor: 'var(--foreground-color-primary)',
        borderRadius: '30px 30px 30px 30px',
        color: 'white',
        boxShadow: '5px 3px 6px black',
        border: '1px solid white'
    }

    return (
        <div className='m-auto w-50 d-flex flex-nowrap justify-content-center'>
            <button style={flexBtnStyles} className="btn w-50" id='flex-button' type="button">{_BUTTON_TEXT}</button>
        </div>
    )
}