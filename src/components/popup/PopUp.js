import React, { useState }  from "react";
import './PopUp.css'

function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div>
            <button onClick={handleClickOpen}>Click me!</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h3>For your information!</h3>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>
                            Halo teman-teman,
                            </p>
                            <p>
                            Terima kasih telah mendaftar Webinar Hacktiv8
                            </p>
                            <p>
                            Silahkan join pada jadwal yang tertera dibawah!
                            </p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;