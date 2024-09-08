import React, { useState } from 'react'

function Converter() {

    const [text, setText] = useState(''),
        handleOnChange = (e) => setText(e.target.value), // Handle On Change
        AvailableCases = {
            "upper": "Convert to UpperCase",
            "lower": "Convert to LowerCase",
            "pascal": "Convert to Pascel"
        };

    // Case Converter
    const CaseConverter = (type) => {
        switch (type) {
            case 'upper':
                return text.toUpperCase();
            case 'lower':
                return text.toLowerCase();
            case 'pascal':
                return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            default:
                return text;
        }
    }


    return (
        <>

            <div className="card p-0 my-4">
                <div className="card-header bg-primary text-white d-flex justify-content-between">
                    <span>Case Converter</span>
                    <span>240 words and 100 characters</span>
                </div>

                <div className="card-body">
                    <div className="row">

                        <div className="col-md-8">
                            <div className="form-floating">
                                <textarea id="text-value" placeholder='Enter your text here...' className="form-control" style={{ height: '185px' }} onChange={handleOnChange} value={text}></textarea>
                                <label htmlFor="text-value">Enter Your Text</label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <ol className="list-group">
                                {Object.keys(AvailableCases).map((key, index) => (
                                    <li key={index} className="list-group-item list-group-item-action" onClick={() => setText(CaseConverter(key))}>{AvailableCases[key]}</li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Converter;