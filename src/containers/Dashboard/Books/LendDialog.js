import React, { useState } from "react";

import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

export default function LendDialog ({ handleClose, show }) {
    const [member, setMember] = useState("");

    const sendConfirm = () => handleClose(true, member);  //confirmation ek true da kyl check krl true nm memberta msg eka pass wenna one. e nisa member pass wenna one methana

    const sendCancel = () => handleClose(false, null);

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Lend Book</h2>
                <p>Select member to continue and confirm</p>
                <Select
                    id="member-select"
                    onChange={(e) => setMember(e.target.value)}
                    value={member}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamaster">Hamaster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">GoldFish</option>
                </Select>
                <FlexRow>
                    <Button onClick={sendConfirm}>Confirm</Button>
                    <Button onClick={sendCancel} color="secondary">Cancel</Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}