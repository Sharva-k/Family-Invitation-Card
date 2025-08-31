import React from 'react';

const InvitationCard = ({ familyName, onBack }) => {

  const handleRSVP = () => {
    alert(`Thank you ${familyName} for your RSVP! We can't wait to celebrate with you! 🎉`);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container">
        {/* Back Button */}
        <button 
          className="btn btn-light mb-4"
          onClick={onBack}
        >
          ← Back to Family Selection
        </button>

        {/* Main Invitation Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              
              {/* Card Header */}
              <div className="card-header text-center text-white py-5" style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)'
              }}>
                <div className="display-1 mb-3">🎉</div>
                <h1 className="h2 mb-2">Family Festival 2025</h1>
                <p className="mb-0">You're Cordially Invited!</p>
              </div>

              {/* Card Body */}
              <div className="card-body p-5">
                
                {/* Family Name */}
                <div className="text-center mb-4">
                  <div className="alert alert-primary py-3">
                    <h2 className="h3 mb-0 text-primary fw-bold">{familyName}</h2>
                  </div>
                  <p className="text-muted fs-5">We would be honored by your presence!</p>
                </div>

                {/* Event Details */}
                <div className="row g-3 mb-4">
                  
                  {/* Date */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded">
                      <div className="bg-primary text-white rounded-circle p-2 me-3">
                        📅
                      </div>
                      <div>
                        <strong>Date</strong>
                        <div className="text-muted">Sunday , Monday and Tuesday :- 31 , 1 and 2 of September.</div>
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded">
                      <div className="bg-success text-white rounded-circle p-2 me-3">
                        🕕
                      </div>
                      <div>
                        <strong>Time</strong>
                        <div className="text-muted">You are welcome at time of the day. 😊</div>
                      </div>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded">
                      <div className="bg-danger text-white rounded-circle p-2 me-3">
                        📍
                      </div>
                      <div>
                        <strong>Venue</strong>
                        <div className="text-muted">Rahul Towers<br/>Pune</div>
                      </div>
                    </div>
                  </div>

                  {/* Dress Code */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded">
                      <div className="bg-warning text-white rounded-circle p-2 me-3">
                        👗
                      </div>
                      <div>
                        <strong>Dress Code</strong>
                        <div className="text-muted">Festive & Colorful Attire</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RSVP Section */}
                <div className="text-center">
                  <p className="text-muted mb-3 fs-5">Please confirm your attendance</p>
                  <button 
                    className="btn btn-primary btn-lg px-5 py-3"
                    onClick={handleRSVP}
                    style={{
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      border: 'none',
                      fontSize: '18px'
                    }}
                  >
                    RSVP Now 💌
                  </button>
                </div>

              </div>

              {/* Card Footer */}
              <div className="card-footer bg-light text-center py-4">
                <p className="text-muted mb-0">
                  <em>"Ganpati Bappa Morya!" 🙏</em>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;