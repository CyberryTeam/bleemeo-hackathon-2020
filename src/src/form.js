import React from 'react';

const Form = ({ onSend, values }) => {
    const [members, setMembers] = React.useState(values);
    const [error, onError] = React.useState(false);
    const [errorMemberName, setErrorMemberName] = React.useState(false);
    const [memberName, setMemberName] = React.useState();

    const addMember = (e) => {
        e.preventDefault();
        if (members.includes(memberName)) {
            setErrorMemberName(true);
            return;
        }
        if (!memberName || memberName === "") {
            return;
        }
        setMembers([...members, memberName]);
        setMemberName("");
        if (error || errorMemberName) {
            setErrorMemberName(false);
            onError(false);
        }
    }

    const sendData = () => {
        if (!members.length) {
            onError(true);
            return;
        }
        setMemberName("");
        onSend(members);
    }

    const onRemoveUser = (name) => {
        setMembers(members.filter(el => el !== name));
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-sm-6">
                <form onSubmit={(e) => addMember(e)}>
                    <div className="form-group">
                        <label namefor="inputTeamMember">Name of the team member</label>
                        <input type="text" value={memberName} className="form-control" id="inputTeamMember" aria-describedby="teamMemberHelp" onChange={(e) => setMemberName(e.target.value)}/>
                        <small id="teamMemberHelp" className="form-text text-muted">{errorMemberName ? <span className="text-danger">This name was already added !</span> : "Add all the members of the diner."}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Member</button>
                </form>
                <ul className="list-group pt-5 rounded">
                    <p className="mb-0">Members added: {error && <span className="text-danger">You need to add members to continue !</span>}</p>
                    {
                        members.map(el => (<li className="list-group-item d-flex justify-content-between w-100">{el}<div className="removable px-3 text-danger" style={{cursor: 'pointer'}} onClick={() => onRemoveUser(el)}>X</div></li>))
                    }
                </ul>
                <div className="d-flex justify-content-center py-4">
                    <button className="btn btn-success" onClick={sendData}>Generate order</button>
                </div>
            </div>
        </div>
    );
};

export default Form;