import React, { Component } from 'react';

import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import { addPost } from '../../store/actions/PostAction';
import MyUploader from '../../components/MyUploader'

class create extends Component {
	constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            media: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.props.addPost(this.state);

        this.props.history.push('/');
    }
    
    resetForm = (e) => {
        this.setState({
            title: '',
            text : '',
             media: []
        })
    }

	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value ,
            
		});
	}

	componentDidMount = async() => {
	}

    render() {
        const { media } = this.props
	    return (
            <>
            <form noValidate autoComplete="off">
                <TextField 
                    id="email" name="title" type="text" 
                    label="Title"
                    value={this.state.title} 
                    fullWidth 
                    onChange={this.handleChange}/>
                <TextareaAutosize 
                        aria-label="maximum width" 
                        name="text" 
                        label="Text"
                        style={{width: '100%', marginTop:'10px'}}
                        rowsMin="10"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Text here" />

            <MyUploader />
                <Button  style={{marginTop: '10px'}} variant="contained" color="primary" onClick={this.handleSubmit}>
                    Add post
                </Button>
            </form>

            </>
        );
	}

}

const mapStatesToProps = (state) => {
	return {
        media:state.post.media
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost:(postObject) => dispatch(addPost(postObject))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(create)