import React, { Component } from 'react';


class PhotoWidgetUploader extends Component {
state={
    picture: ''
}
    componentDidMount = () => {
        console.log('component here');
        const myWidget = window.cloudinary.createUploadWidget({
            cloudName: "djq7sbvvq",
            uploadPreset: "rtafcvig",
            sources:
                [
                    "local",
                    "url",
                    "camera"
                ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: true,
            cropping: true,
            multiple: true,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#FFFFFF",
                    windowBorder: "#90A0B3",
                    tabIcon: "#0078FF",
                    menuIcons: "#5A616A",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    link: "#0078FF",
                    action: "#FF620C",
                    inactiveTabIcon: "#0E2F5A",
                    error: "#F44235",
                    inProgress: "#0078FF",
                    complete: "#20B832",
                    sourceBg: "#E4EBF1"
                },
                fonts: {
                    default: {
                        active: true
                    }
                }
            }

        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log(result);
                // this.setState({
                //     pictureUrl: result.info.url
                // })
            }
        }
        )

        document.querySelectorAll(".upload-button")[0].addEventListener("click", function () {
            myWidget.open();
        }, false);
    }

    render() {
        return (
            <div className="widget-div">
                    <div>
                        <button className="upload-button">Upload Picture</button>
                    </div>
                
            </div>
        );
    }
}


export default PhotoWidgetUploader;

