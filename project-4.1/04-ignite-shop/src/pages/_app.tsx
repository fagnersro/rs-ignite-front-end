import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { Roboto } from '@next/font/google'
import logoImg from '../assets/Logo.svg'
import Image from 'next/image'

const roboto = Roboto({
  weight:['400','700'],
  style:['normal'],
  subsets:['latin'],  
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return  (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <style jsx global>{
          `
            html {
              font-family: ${roboto.style.fontFamily}
            }
          `
        }</style>
      <Component {...pageProps} />
    </Container>
  ) 
}
