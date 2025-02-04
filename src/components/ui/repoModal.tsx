import React from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/repoModal.css';

interface RepoModalProps {
    title: string;
    description: string;
    url: string;
    language: string;
    stars: number;
    show: boolean;
    handleClose: () => void;
}

const RepoModal: React.FC<RepoModalProps> = ({ title, description, url, language, stars, show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static" // Prevents closing the modal by clicking outside
            keyboard={false} // Prevents closing the modal with the ESC key
            centered // Centers the modal vertically and horizontally
            dialogClassName="modal-popup" // Custom class for the modal dialog
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                <p><strong>Language:</strong> {language}</p>
                <p><strong>Stars:</strong> {stars}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RepoModal;