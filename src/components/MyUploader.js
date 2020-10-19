import React, {createRef, useState, Component } from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { connect } from 'react-redux'
import { addMediaToStore } from '../store/actions/MediaAction'


 class MyUploader extends Component {
	constructor(props)
	{
		super(props);
			this.state = {
				media:[]
			}
	}
	// specify upload params and url for your files
	getUploadParams = ({ meta }) => {
		console.log(this.state.media)
		return { url: 'https://httpbin.org/post' } 
	}
	
	// called every time a file's `status` changes
	handleChangeStatus = ({ meta, file }, status) => { 
		this.setState({
			media : meta
		});
	}
	
	// receives array of files that are done uploading when submit button is clicked
	handleSubmit = (files, allFiles) => {
		// allFiles.forEach(f => f.remove())
		this.props.addMediaToStore(this.state)
		console.log(this.state)
	}
	
	render() {
		const { media } = this.props;
		return (
			<Dropzone
				getUploadParams={this.getUploadParams}
				onChangeStatus={this.handleChangeStatus}
				onSubmit={this.handleSubmit}
				accept="image/*,audio/*,video/*"
			>
			</Dropzone>
		)

	}
}

const mapStatesToProps = (state) => {
	return { 
		media:state.post.media
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMediaToStore:(files) => dispatch(addMediaToStore(files))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(MyUploader)
