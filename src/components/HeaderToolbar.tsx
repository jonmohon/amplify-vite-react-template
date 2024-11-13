import React from 'react';
import { Button } from 'react-bootstrap';

interface HeaderToolbarProps {
  onAdd: () => void;
  onDelete: () => void;
  selectedCount: number;
}

const HeaderToolbar: React.FC<HeaderToolbarProps> = ({ onAdd, onDelete, selectedCount }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Button variant="primary" onClick={onAdd}>
        Add New Lead
      </Button>
      
      {selectedCount > 0 && (
        <Button variant="danger" onClick={onDelete}>
          Delete Selected ({selectedCount})
        </Button>
      )}
    </div>
  );
};

export default HeaderToolbar;
