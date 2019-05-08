import React from 'react';
import Images from '../components/Images';
import './Modal.css';

const modal = (props) => {

    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div>
                <span className="close-modal-btn" onClick={props.close}>×</span>
                
                    {props.photosUrl}

                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;