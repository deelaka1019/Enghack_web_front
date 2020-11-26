import React from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");



class Addpodcast extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            title:"",
            transcript:"",
            ndate:new Date().toLocaleDateString()
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onTittlechange = this.onTittlechange.bind(this);
        this.ontranschange = this.ontranschange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        formData.append('title',this.state.title);
        formData.append('transcript',this.state.transcript);
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:5000/listen/addaudio/",formData,config)
            .then((response) => {
                toast.success("Audio clip submitted successfully");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
       
    }

    onTittlechange(e){
        this.setState({title:e.target.value});
    }

    ontranschange(e){
        this.setState({transcript:e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <ToastContainer/>
                <h1>Audio Upload</h1>
                {/* <div>
                <ReactAudioPlayer
                    src="http://localhost:3000/uploads/1606370403097dance.mp3"
                    controls
                    />
                </div> */}
                <div class="form-group">
                    <label for="exampleFormControlInput1">Date</label>
                    <input type="text" name="ndate" class="form-control" id="exampleFormControlInput1" value={this.state.ndate} disabled/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" name="title" class="form-control" onChange={this.onTittlechange} value={this.state.title}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Transcript</label>
                    <input type="text" name="transcript" class="form-control" onChange={this.ontranschange} value={this.state.transcript}/>
                </div>



                <input type="file" name="myImage" onChange={this.onChange} />
                <div> <button className="btn btn-primary my-2" type="submit">Submit</button></div>
               
            </form>

        )
    }
}

export default Addpodcast;