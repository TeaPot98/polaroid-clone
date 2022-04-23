import { server } from '../../../config'

const product = ({ product }) => {
  
  console.log(product)
  return <div>This is the product {product.id}</div>
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/instant-cameras/${context.params.id}`)

  const product = await res.json()
  return {
    props: {
      product
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/instant-cameras`)

  const products = await res.json()

  const ids = products.map(a => a.id)

  const paths = ids.map(id => ({
    params: {id: id.toString()}
  }))

  return {
    paths,
    fallback: false // If we go to page that doesn't exist, it shows 404 page
  }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const product = await res.json()
//   return {
//     props: {
//       product
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

//   const products = await res.json()

//   const ids = products.map(a => a.id)

//   const paths = ids.map(id => ({
//     params: {id: id.toString()}
//   }))

//   return {
//     paths,
//     fallback: false // If we go to page that doesn't exist, it shows 404 page
//   }
// }

export default product