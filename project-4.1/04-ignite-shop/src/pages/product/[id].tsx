import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ullam architecto nihil nostrum obcaecati tempore asperiores tenetur alias, quia hic similique molestiae aperiam tempora minus enim qui odit ex delectus!</p>
      
        <button>
          Comprar agora 
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}