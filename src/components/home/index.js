import React from "react";

export default () => {
    return (
        <div style={
            {
                backgroundImage: `url(${require('./home.jpeg')})`,
                width: '100%',
                height: 1000,
                backgroundRepeat: 'no-repeat',
                backgroundOrigin: 'content-box'
        }
            }>
            <h3 style={{
                textAlign: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '30px',
                marginTop: '0px',
                paddingTop: '20px',
                color: '#fff9f9',
            }}>
                Welcome To Recruitment Application
            </h3>
        </div>
    )
}