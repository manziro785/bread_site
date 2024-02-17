import React from 'react';

export function ExpenseInputRow({
  rowIndex,
  inputRows,
  handleInputChange,
  handleSaveRow,
  handleMarkForDeletion,
  timeValue, // Передаем время из родительского компонента
}) {
  return (
    <div key={rowIndex} className="input-row">
      {inputRows[rowIndex].map((col, colIndex) => (
        <div key={col.id} className={`input-group ${col.className}`}>
          {col.id === 2 && col.value !== '' && <span className='minus-sub'>-</span>}
          <input
            type={col.type === 'number' ? 'number' : 'text'}
            className={col.className}
            id={col.className}
            placeholder={col.placeholder}
            value={col.id === 0 ? timeValue : col.value}
            readOnly={col.isSaved}
            onChange={(e) => handleInputChange(e, rowIndex, col.id)}
          />
          {col.id === 2 && col.value !== '' && (
            <>
              {!col.isSaved && (
                <>
                  <span onClick={() => handleSaveRow(rowIndex)} className={`save-btn ${col.isSaved ? 'saved' : ''}`}>
                    &#10004;
                  </span>
                  <span onClick={() => handleMarkForDeletion(rowIndex)} className={`delete-btn ${col.isDeleted ? 'visible' : ''}`}>
                    &#10006;
                  </span>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
