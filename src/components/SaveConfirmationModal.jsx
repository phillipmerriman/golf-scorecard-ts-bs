import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SaveConfirmationModal(props) {
    const { saveConfirmation, setSaveConfirmation } = props;

    const handleClose = () => setSaveConfirmation(false);

    return (
        <Modal
            show={saveConfirmation}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You have not entered a score for all players on all holes.
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>
                <Button variant="primary">Save Anyways</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SaveConfirmationModal;

SaveConfirmationModal.propTypes = {
    saveConfirmation: PropTypes.bool,
    setSaveConfirmation: PropTypes.func,
};
