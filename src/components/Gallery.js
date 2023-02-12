import React,{useState} from 'react'
import Masonry from "react-responsive-masonry"

const images = [
    "/images/1.jpg",
    "/images/8.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
]
const Gallery = () => {
  const [data, setData] = useState({img: '', i: 0})
  const viewImage=(img,i)=>{
    console.log(img,i)
    setData({img,i})
  }
  const imgAction =(action)=>{
    let i=data.i;
    if(action === "next-img"){
      setData({img:images[i+1], i:i+1})
    }
    if(action === "prev-img"){
      setData({img:images[i-1], i:i-1})
    }
    if(!action){
      setData({img:"", i:0})
    }
  }
  return (
    <>
   {data.img &&
   <div style={{width: '100%', height: "100vh", background:"black", position:"fixed",display:"flex",
  justifyContent:"center", alignItems:"center", overflow:"hidded"}}>
    <button onClick={()=>imgAction()} style={{position:"absolute",top:"10px",right:"10px"}}>X</button>
    <button  onClick={()=>imgAction("prev-img")} style={{right:"10px"}}>&lt;</button>
    <img src={data.img} style={{width:"auto", maxWidth:"90%", maxHeight:"90%"}}/>
    <button  onClick={()=>imgAction("next-img")}>&gt;</button>
  </div>
  }
    <div style={{padding: "10px" }}>
     <Masonry columnsCount={2} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor:"pointer"}}
                        onClick={()=>viewImage(image,i)}
                    />
                ))}
            </Masonry>
  </div> </>
  )
}

export default Gallery