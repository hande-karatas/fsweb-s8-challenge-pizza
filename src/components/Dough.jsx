import React from 'react'

function Dough() {
  return (
    <div>
      <select defaultValue="">
        <option value="" hidden>
          Hamur Kalınlığı
        </option>
        <option value="incecik">İncecik</option>
        <option value="ince">İnce</option>
        <option value="kalın">Kalın</option>
      </select>
    </div>
  )
}

export default Dough
