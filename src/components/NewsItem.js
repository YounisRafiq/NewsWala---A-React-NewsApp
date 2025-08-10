import _React from 'react'


const NewsItem = (props) => {
    const  {title, description , image_url , source_url , author , date , source_id} = props;
    return (
      <div>

        <div className="card my-4">
   <div style={{display: "flex", justifyContent: "flex-end" , position: "absolute", right: "0"}}>
    <span className=" badge rounded-pill bg-danger">
    {source_id}
  </span>
   </div>
  <img src={image_url? image_url: "https://cdn.mlbtraderumors.com/files/2025/07/Sergio_Alcantara_Giants-1024x682.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
     <p className="card-text" style={{marginTop : "10px"}}><small className="text-body-secondary" >By {author} at {new Date(date).toGMTString()}</small></p>
    <a href={source_url} target='_blank' className="btn btn-dark btn-sm">Read More</a>
   
       

  </div>
</div>
      </div>
    )
}

export default NewsItem
