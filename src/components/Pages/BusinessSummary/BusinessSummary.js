import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <div className='text-5xl text-center'>
                <h1>Business Summary</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 py-5">
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <div className="card-body text-white">
                    <h2 className="card-title">120M+ Annual revenue</h2>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <div className="card-body text-white">
                    <h2 className="card-title">33K+ Reviews</h2>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <div className="card-body text-white">
                    <h2 className="card-title">50+ tools</h2>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default BusinessSummary;