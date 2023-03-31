import ImageShow from "./ImageShow";

const ImageList = ({images}) => {
  const imageList = images.map(currImage => {
    return (<ImageShow image = {currImage}/>)
  })

  return imageList;
}

export default ImageList;