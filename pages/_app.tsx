import '../styles/reset.css'
import { GlobalStyle } from "../styles/global"
import { FontStyle } from "../styles/fonts"
import type { AppProps } from 'next/app'
import Head from "next/head";
import "swiper/css/bundle";

import { AuthProvider } from '../contexts/AuthContext'

import Login from "./login"
import { useState } from 'react'

import CookiesCard from '../components/cookies'

export default function CustomApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    return (
        <AuthProvider>
            <Head>
                <title>Von Borstel</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                {/*Meta description lenght 50 a 160 caracteres*/}
                <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
                {/* Se você deseja permitir que o usuário dimensione a página, remova user-scalable = no e maximum-scale = 1.0. */}
                <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui" />
                <meta name="robots" content="index, follow" />
                <meta name="referrer" content="origin" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="author" content="Lets Comunicação" />

                <link rel="canonical" href="base.com.br" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                {/*Open Graph Facebook*/}
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://www.meusite.com.br/ola-mundo" />
                <meta property="og:title" content="Von Borstel" />
                <meta property="og:site_name" content="" />
                <meta property="og:description" content="Venda de cervejas" />
                <meta property="og:image" content="www.meusite.com.br/imagem.jpg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                {/* Sites Normais*/}
                <meta property="og:type" content="website" />
                {/* Artigos e Notícias */}
                <meta property="og:type" content="article" />
                <meta property="article:author" content="Autor do artigo" />
                <meta property="article:section" content="Seção do artigo" />
                <meta property="article:tag" content="Tags do artigo" />
                <meta property="article:published_time" content="date_time" />

                {/* TWitter */}
                <meta name="twitter:title" content="Von Borstel" />
                <meta name="twitter:description" content="Venda de cervejas" />

                <meta name="twitter:url" content="Link da página" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://exemplo.com/imagem.png" />
                <meta name="twitter:creator" content="@José123" />
                <meta name="twitter:site" content="@empresa" />

                {/* Verificação feita pelo google - a key pode ser gerada neste site: https://support.google.com/webmasters/answer/9008080?hl=pt-BR */}
                <meta name="google-site-verification" content="" />
                <meta name="rating" content="general" />

                <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

            </Head>

            <FontStyle />

            <GlobalStyle />

            
                
            
                <Component {...pageProps} />
           

        </AuthProvider>   
    
    )
}



