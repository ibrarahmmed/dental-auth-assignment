import React, { Component } from 'react';

class Modal extends Component {
    render() {
        let modalStyle={
            display:'block',
            backgroundColor:'rgba(0,0,0,0.8)',
        }
        return (
            <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.name}</h5>
                  <button type="button" className="btn-close" onClick={this.props.hide} ></button>
                </div>
                <div className="modal-body">
                    <img src={this.props.picture} alt="" className='img-fluid' />
                    <h5>Price: ${this.props.price}</h5>
                    <p>{this.props.about}</p>
                </div>
                
              </div>
            </div>
          </div>
        );
    }
}

export default Modal;