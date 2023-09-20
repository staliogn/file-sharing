import { useRef, useState , useEffect} from 'react';
import './App.css';
import  {uploadFile } from './services/api';

function App() {
  const [file,setFile] = useState('');
  const [result,setResult] = useState('');
  const banner = "https://cdn.windowsreport.com/wp-content/uploads/2020/03/best-file-sharing-software-and-tools.jpg";
  useEffect(()=>{
    const image = async()=> {
     if(file)
     {
       const data = new FormData();
       data.append("name",file.name);
       data.append("file",file);

       let response = await uploadFile(data);
       setResult(response.path);
     }
    }
    image();
  }, [file])
  const fileref = useRef();
  const uploadClick = ()=>{
    fileref.current.click();
  }
 
  return (
   <div className = "container"> 
      
      <div className = "wrapper"> 
      <h1>File Sharing Pro</h1>
      <p>enjoy sharing of documents using this amazing application</p>
      <button onClick={()=>uploadClick()}>upload</button>
      <input type="file"
        ref = {fileref}
        style={{display:'none'}}
        onChange={(e)=> setFile(e.target.files[0])}
      />
       <a href= {result} target='_blank'>{result}</a>
      </div>
   </div>
  );
}

export default App;
