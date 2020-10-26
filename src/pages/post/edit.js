import React, { Component } from 'react';
import { connect } from 'react-redux'
// ui import 
import { TextField, TextareaAutosize, Button, Grid } from '@material-ui/core';
// actions
import { getPost, updatePost, deletePost } from '../../store/actions/PostAction';
import { addFile, deleteFile } from '../../store/actions/MediaAction';
// dropzone
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
// css
import '../../css/post.css'
// file componet 
import  { File } from  '../../components/File'

class edit extends Component {
    
	constructor(props) {
        super(props);
        this.state = {
            newFile:[]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }
    
    componentDidMount () {
        this.props.getPost(this.props.match.params.post);
	}
    
    // called every time a field changes
    handleChange = (e) => {
        this.setState({
            [e.target.name] :e.target.value,
        });
    }

    // called every time a file's `status` changes
    handleChangeStatus = ({ meta, file }, status) => {
        if (status == 'done') {
            let newFile = this.state.newFile;
            newFile.push(file);
            this.setState({
                newFile
            })
        } 
    }  
    
    // handles post update submit 
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.updatePost(this.state, this.props.match.params.post);
        this.props.history.push('/');
    }
    
    // handles add files submit
    handleFileSubmit = (files, allFiles) => {
        let fileFormData = new FormData()

        this.state.newFile.forEach((file, index) => {
            fileFormData.append('media[]', file);
        });
        fileFormData.append('post_id', this.props.match.params.post);
        this.props.addFile(fileFormData)

        setTimeout(function() {
            window.location.reload();
        }, 1000);  
                
    }

    // delete post function
    handleDelete = () => {
        this.props.deletePost(this.props.match.params.post);
        this.props.history.push('/');
    }

    render() {
        const { post } = this.props.singlePost 
        const { media } = this.props.singlePost;
        
	    return (
            <Grid container className="styles.form">
                <Grid item sm={8} xs={12} className="posts-view">
                    <div className="edit-post-form">
                        <h3>Edit Post</h3>
                        <form noValidate autoComplete="off">
                            <TextField 
                                id="email" name="title" type="text" 
                                label="Title"
                                value={this.state.title ? this.state.title : post.title} 
                                fullWidth 
                                onChange={this.handleChange}/>

                            <TextareaAutosize 
                                aria-label="maximum width" 
                                name="text" 
                                label="Text"
                                style={{width: '100%', marginTop:'10px'}}
                                rowsMin="10"
                                value={this.state.text ? this.state.text : post.text}
                                onChange={this.handleChange}
                                placeholder="Text here" />

                            <Button  
                                className= "post-button" variant="contained" 
                                color="primary" onClick={this.handleSubmit}>
                                Update post
                            </Button>

                            <Button  
                                className= "post-button" variant="contained" 
                                color="primary" onClick={this.handleDelete}>
                                Delete Post
                            </Button>
                        </form>
                        <br/> <br/> 
                        <div> 
                            <p> Add new file </p>
                            <Dropzone
                            getUploadParams={this.getUploadParams}
                            onChangeStatus={this.handleChangeStatus}
                            onSubmit={this.handleFileSubmit}
                            accept="image/*,audio/*,video/*"/>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={1} xs={12}/>
                <Grid item sm={3} xs={12}>
                    <div className="file-media"> 
                            {media? media.map(row => (
                                <File key={row.id} file={row}  data={this.props}/>
                            )) : null }
                    </div> 
                </Grid>
            </Grid>
        );
	}

}

const mapStatesToProps = (state) => {
	return {
        singlePost : state.post
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
        getPost:(postId) => dispatch(getPost(postId)),
        updatePost:(post, postId) => dispatch(updatePost(post, postId)),
        deletePost:(postId) => dispatch(deletePost(postId)),
        addFile:(postId) => dispatch(addFile(postId)) ,
        deleteFile:(fileId) => dispatch(deleteFile(fileId)),
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(edit)