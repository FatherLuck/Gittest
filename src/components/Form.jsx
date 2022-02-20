
import Images from './Images';
import {useState} from 'react'


const Form = () => { 
  
    const [ src, setSrc ] = useState(["https://img2.goodfon.ru/wallpaper/nbig/e/b2/horse-black-horse-snowing.jpg", "https://img2.goodfon.ru/wallpaper/nbig/e/b2/horse-black-horse-snowing.jpg", "https://img2.goodfon.ru/wallpaper/nbig/e/b2/horse-black-horse-snowing.jpg"]);

    const handleChange = (e) => {console.log(e.target.value) 
        setSrc([ ...src, e.target.value ])
    }

    return <div>
            <form> <input type="text" onChange={handleChange}  /> 
            </form>
         <Images sources={src} />
        </div>
};
export default Form;