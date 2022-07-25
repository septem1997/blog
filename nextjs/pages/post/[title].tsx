import { useRouter } from 'next/router'

const PostByTitle = ()=>{
  const router = useRouter()
  return <div>
    {JSON.stringify(router.query)}

  </div>
}
export default PostByTitle
