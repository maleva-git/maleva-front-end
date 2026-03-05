import React, { useState } from 'react';
import { ForwardingManager } from '../components/ui/ForwardingManager';

export const SaleOrderAddPage = () => {
  const [forwardingRows, setForwardingRows] = useState([]);

  return (
    <div className="p-4">
      {/* Your existing form fields */}
      
      {/* Forwarding Tab Content */}
      <div className="mt-4">
        <ForwardingManager 
          forwardingRows={forwardingRows}
          onForwardingChange={setForwardingRows}
        />
      </div>
      
      {/* Your other components */}
    </div>
  );
};