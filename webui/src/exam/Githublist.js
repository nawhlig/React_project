import React from 'react';
import Axios from 'axios';
import { configConsumerProps } from 'antd/lib/config-provider';

const API = Axios.create({
    baseURL: "https://api.github.com/users?since=1000",
    timeout: 3000,
})

export default function Githublist(){
    const [Gituser, setGituser] = React.useState(null)

    //URL에서  데이터 가져오기
    React.useEffect(()=>{
        API.get()
        .then(res => {console.log(res);
                      const { data } = res;  
                      setGituser(data);
                     }
            ).catch(error=>{console.log(error);})},[]) 
        // console.log("id가 변경됨")},[id]) //id에 since=??? 값 들어갈 예정
    
    // let usegituser = {...Gituser}

    console.log(Gituser)

    return(<>
                                
        {/* {Gituser.map(Gitusers=>(
                    <div key={Gitusers.id}>{Gitusers.login}</div>
            ))} */}

            {Gituser.map((Gituser, index) =>
            {return <tr key={index}><td>{Gituser.id}</td>
                                      <td>{Gituser.login}</td>
                                      <td>{Gituser.avatar_url}</td></tr>
              })}
               
    </>)
}

//    {Gituser && <div>
//             <p>{Gituser.login}</p>
//             <p>{Gituser.avatar_url}</p>
//              <div>
//                <img src='{Gituser.avatar_url}' width='20' height='auto' alt='icon' loading='lazy'/>
//               <span>${Gituser.login}</span>
//             </div>
//         </div>}