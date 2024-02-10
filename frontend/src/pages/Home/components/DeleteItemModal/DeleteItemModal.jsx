import "./deleteItemModal.css"

const DeleteItemModal = ({ setShowDeleteModal, deleteItem }) => {
  const deleteItemAndCloseModal = () => {
    setShowDeleteModal(false)
    deleteItem()
  }
  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Silmək istədiyinizə əminsiniz item?</p>
        <div className="modal-btn">
          <button
            className="cancel-btn"
            onClick={() => setShowDeleteModal(false)}
          >
            Ləğv et
          </button>
          <button className="delete-btn" onClick={() => deleteItemAndCloseModal()}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
