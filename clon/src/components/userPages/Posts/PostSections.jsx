import Post from "./post"
import Post1Img from '/src/assets/post/img1.jpeg'
import Post2Img from '../../../assets/post/img2.jpeg'
import Post3Img from '../../../assets/post/img3.jpeg'
import Post4Img from '../../../assets/post/img4.jpeg'
import Post5Img from '../../../assets/post/img5.jpeg'
import Post6Img from '../../../assets/post/img6.jpeg'
//aqui van las publicaciones las fotos que se agregan a la cuenta
export const userPosts = [
  {
    id: 0,
    title: 'Post 1',
    descrption: 'publicacion de prueba para el clon de react # 1',
    image: Post1Img
  },
  {
    id: 1,
    title: 'Post 2',
    descrption: 'publicacion de prueba para el clon de react # 2',
    image: Post2Img
  },
  {
    id: 3,
    title: 'Post 3',
    descrption: 'publicacion de prueba para el clon de react # 3',
    image: Post3Img
  },
  {
    id: 4,
    title: 'Post 4',
    descrption: 'publicacion de prueba para el clon de react # 4',
    image: Post4Img
  },
  {
    id: 5,
    title: 'Post 5',
    descrption: 'publicacion de prueba para el clon de react # 5',
    image: Post5Img
  },
  {
    id: 6,
    title: 'Post 6',
    descrption: 'publicacion de prueba para el clon de react # 6',
    image: Post6Img
  },
]

const PostSections = () => {
  return (
    <div className='grid-content'>
      {userPosts.map(p => (
        <Post key={p.id} 
        title={p.title} 
        descrption={p.descrption}  
        image={p.image} />
      ))}      
    </div>
  )
}

export default PostSections