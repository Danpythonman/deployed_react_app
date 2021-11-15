import { useState, useRef } from "react";
import Webcam from "react-webcam";

// const videoConstraints = {
//     width: 500,
//     height: 500,
//     facingMode: "user"
// };

const WebcamCapture = () => {

    const webcamRef = useRef(null);

    const [webcamOpen, setWebcamOpen] = useState(false);

    const [videoConstraints, setVideoConstraints] = useState({
        // width: 500,
        // height: 500,
        facingMode: "user"
    });

    const [imageSrcArray, setImageSrcArray] = useState([]);

    const switchCamera = () => {
        if (videoConstraints.facingMode == "user") {
            setVideoConstraints({ ...videoConstraints, facingMode: "environment" })
        } else {
            setVideoConstraints({ ...videoConstraints, facingMode: "user" })
        }
    }

    const capture = () => {
        const image = webcamRef.current.getScreenshot();

        setImageSrcArray([...imageSrcArray, image]);
    }

    return (
        <>
            {
                imageSrcArray.map((src, index) => (
                    <img key={index} src={src}/>
                ))
            }
            {
                webcamOpen
                ? (
                    <>
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                        <button onClick={capture}>Capture Photo</button>
                        <button onClick={switchCamera}>Switch Camera</button>
                        <button onClick={() => { setWebcamOpen(false) }}>Close Webcam</button>
                    </>
                )
                : (
                    <button onClick={() => { setWebcamOpen(true) }}>Open Webcam</button>
                )
            }
        </>
    );
}

export default WebcamCapture;
