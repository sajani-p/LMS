import { Button, FlexRow } from "./CommonComponents";
import { Modal, DialogBox } from "./Modal";

export default function ConfirmationDialog({
    handleClose, show, headerText, detailText
    // handleClose- function that close the modal
    // show - funcion for whether modal is visible or not
    // headerText - topic of the modal
    // detailText - 'are you sure you want to delete? '
}) {

    const sendYes = () => handleClose(true);

    const sendNo = () => handleClose(false);

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>{headerText}</h2>
                <p>{detailText}</p>
                <FlexRow>
                    <Button onClick={sendYes}>Yes</Button>
                    <Button onClick={sendNo}>No</Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}