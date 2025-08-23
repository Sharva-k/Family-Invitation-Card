import React, { useState } from 'react';
import FamilySelection from './FamilySelection';
import InvitationCard from './InvitationCard';

function App() {
  const [selectedFamily, setSelectedFamily] = useState(null);

  const goBackToSelection = () => {
    setSelectedFamily(null);
  };

  return (
    <div>
      {selectedFamily ? (
        <InvitationCard 
          familyName={selectedFamily} 
          onBack={goBackToSelection} 
        />
      ) : (
        <FamilySelection onFamilySelect={setSelectedFamily} />
      )}
    </div>
  );
}

export default App;