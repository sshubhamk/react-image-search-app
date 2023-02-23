
import ImageShow from './ImageShow';

function ImageList({ imageList }) {
  console.log(imageList);
  const renderSearchedImages = imageList && imageList.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list"> {renderSearchedImages} </div>
}

export default ImageList;
