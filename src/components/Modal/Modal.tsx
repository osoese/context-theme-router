import React from "react";
import "./Modal.css";
import Media from '../../components/Media/Media';

const Modal = (props:any) => {
  return (
    <>
      <div className={`darkBG`}  onClick={() => props.setIsOpen(false)} />
      <div className={`centered`}>
        <div className={`modal`}>
          <div className={`modalHeader`}>
            <h5 className={`heading`}>Dialog</h5>
          </div>
          <button className={`closeBtn`} onClick={() => props.setIsOpen(false)}>
            <span>X</span>
          </button>
          <div className={`modalContent`}>
            You just want to look at it right?
            <div className="modalMediaWrapper">
              <Media url={`https://ipfs.io/ipfs/${props.cid}`} />
            </div>
          </div>
          <div className={`modalActions`}>
            <div className={`actionsContainer`}>
              <button className={`deleteBtn`} onClick={() => props.setIsOpen(false)}>
                Close
              </button>
              <button
                className={`cancelBtn`}
                onClick={() => props.setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
