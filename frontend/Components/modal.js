import React, { useState, useEffect, useCallback} from 'react';
import Form from './form';

const Modal = (props) => {
    const [isShown, setIsShown] = useState(false);
    const closeModal = () => {
        setIsShown(false);
    };

    const [editMode, setEditMode ] = useState(false)

    const dynamicModalClass = () => (isShown ? { display: 'block' } : '');

    useEffect(() => {
        if (props) {
            setIsShown(true);
            setEditMode(true)
        }
    }, []);


    return isShown ? (
        <div className="modal" style={dynamicModalClass()} id="channelModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* Age Modal Title */}
                        <h5 className="col-4 modal-title text-light text-center">Submit</h5>
                    </div>

                    <div className="modal-body">
                        <Form update={props.update} closeModal={closeModal} editMode={editMode} setEditMode={setEditMode} />
                    </div>

                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;