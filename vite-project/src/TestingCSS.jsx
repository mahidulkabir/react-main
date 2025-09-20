import React from 'react';
import './assets/css/MyKindOfStyle.css';
const TestingCSS = () => {
    const bgColor = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '10px'
    };
    return (
        <div className=" min-h-[200px] w-1/2 bg-gray-400 mx-auto my-10">
            <h1 className="text-4xl font-bold text-blue-600">Testing CSS Styles</h1>
            <p style={bgColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio necessitatibus rem cumque numquam, alias odio incidunt enim autem suscipit!</p>
            <p className='text'>This is from external css file</p>

            
        </div>
    );
};

export default TestingCSS;