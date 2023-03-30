import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>

      </ImageContainer>
      <p>
        Uhuull <strong>Fagner Henrique</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho de casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}