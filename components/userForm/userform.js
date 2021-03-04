import React, {useState} from 'react'
import Styles from "./userform.module.scss"

const UserForm = ({}) => {

    const [firstName, setFirstName] = useState();    
    const [lastName, setLastName] = useState();
    const submitHandler = e =>  {
        e.preventDefault()
        alert(`Hello ${firstName}  ${lastName}`)
    }    
    return (
        <>
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} className={Styles.formControl} type="text" name=""/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)} className={Styles.formControl} type="text" name=""/>
                </div>
                <button className={`${Styles.btn} ${Styles.btnPrimary}`} type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default UserForm