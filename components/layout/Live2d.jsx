import { useEffect } from 'react'

const Live2D = () =>{
    useEffect(()=>{
        L2Dwidget.init({ "model": { jsonPath:
            　　"http://hades0512.oss-cn-beijing.aliyuncs.com/live2d/koharu/assets/koharu.model.json",
            　　"scale": 1 }, "display": { "position": "left", "width": 150, "height": 300,
            　　"hOffset": -20, "vOffset": -40 }, "mobile": { "show": true, "scale": 0.5 },
            　　"react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 } 
        });
    },[])
    return  <></>
}

export default Live2D;