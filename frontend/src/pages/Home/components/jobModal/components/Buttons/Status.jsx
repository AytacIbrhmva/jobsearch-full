import React from 'react'

const Status = ({adminsModalData, updateModalState}) => {
  const getStatus = (status) => {
    updateModalState("status", status)
  };
  return (
    <ul className="modal-status">
              <li
                className={`${adminsModalData.status ? "active" : ""}`}
                onClick={() => getStatus(true)}
              >
                Aktiv
              </li>
              <li
                className={`${adminsModalData.status ? "" : "active"}`}
                onClick={() => getStatus(false)}
              >
                Deaktiv
              </li>
            </ul>
  )
}

export default Status