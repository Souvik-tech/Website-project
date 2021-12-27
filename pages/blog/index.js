import Link from 'next/link'

export const getStaticProps =async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await res.json();

    return{
        props:{
            data
        }
    }
}

const blog = ({data}) => {
    return (
        <div>
         {data.map((curr)=>{
     return (<div key={curr.id}>
        <h3>{curr.id}</h3>
      <Link href={`/blog/${curr.id}`}>
       <h3>{curr.title}</h3>
       </Link>
     </div>)
})} 
        </div>
    )
}

export default blog
