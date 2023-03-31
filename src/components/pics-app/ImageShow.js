const ImageShow = ({image}) => {
  return (
    <img src = {image.urls.small} key = {image.id} alt = {image.alt_description}/>
  )
}

export default ImageShow;