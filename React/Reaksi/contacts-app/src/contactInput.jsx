import React from "react";

class ContactInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            tag: '',
        }

        this.onChangeNameEventHandler = this.onChangeNameEventHandler.bind(this);
        this.onChangeTagEventHandler = this.onChangeTagEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onChangeNameEventHandler(e){
        this.setState(() =>{
            return {
                name: e.target.value
            };
        });
    }

    onChangeTagEventHandler(e){
        this.setState(() => {
            return {
                tag: e.target.value
            };
        })
    }
    
    onSubmitEventHandler(e){
        e.preventDefault();
        this.props.addContact({
            name: this.state.name,
            tag: this.state.tag
    });
    }
    render(){
        return (
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onChangeNameEventHandler}/>
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onChangeTagEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput;