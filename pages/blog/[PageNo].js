import {useRouter} from 'next/router'
export const getStaticPaths =async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await res.json();
    const paths = data.map((curr)=>{
        return {
           params :{
               PageNo:curr.id.toString(),
           }
        }
    })
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps =async(context)=>{
    const id = context.params.PageNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data= await res.json();

    return{
        props:{
            data
        }
    }
}
const PageNo = ({data}) => {
    const router = useRouter()
    const page = router.query.PageNo
  
    return (<div key={data.id}>
        <h3>{data.id}</h3>
      
       <h3>{data.body}</h3>
       
     </div>
    )
}

export default PageNo
