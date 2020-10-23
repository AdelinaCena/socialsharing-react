import React, { Component } from 'react';

import { connect } from 'react-redux'
import { TextField, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import { addPost } from '../../store/actions/PostAction';
import '../../css/post.css'


class create extends Component {
	constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            media: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    // called every time a file's `status` changes
    handleChangeStatus = ({ meta, file }, status) => {
       if (status == 'done') {
         let media = this.state.media;
         media.push(file);
         this.setState({
            media
         })
       } 
    }  

	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value,
		});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let formData = new FormData()

        this.state.media.forEach((file, index) => {
            formData.append('media[]', file);
        });

        formData.append('title', this.state.title);
        formData.append('text', this.state.text);

        console.log(formData);

        this.props.addPost(formData);

        this.props.history.push('/');
    }

    render() {
        const { media } = this.props
	    return (
            <div className="edit-post-form">
                <form noValidate autoComplete="off" encType="multipart/form-data">
                    <h3>Create Post</h3>
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

                    <Dropzone
                        getUploadParams={this.getUploadParams}
                        onChangeStatus={this.handleChangeStatus}
                        accept="image/*,audio/*,video/*"/>

                    <Button  
                        style={{marginTop: '10px'}} variant="contained" 
                        color="primary" onClick={this.handleSubmit}>
                        Add post
                    </Button>
                </form>
            </div>
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