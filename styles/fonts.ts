import { createGlobalStyle } from 'styled-components'

export const FontStyle = createGlobalStyle` 

@font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
}
@font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proximanova-bold-webfont.ttf') format('truetype');
    font-weight: 700;
}
@font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proximanova-regular-webfont.ttf') format('truetype');
    font-weight: 400;
}

body {
    font-family: 'Proxima Nova';
    overflow-x: hidden !important;
}

h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
time,
address,
i,
a,
b,
label,
li,
td {
    text-rendering: optimizeLegibility !important;
}


[class*="Poppins"] {
    font-family: 'Poppins', sans-serif;
}

[class*="-bold"] {
    font-weight: 700;
}

[class*="-regular"] {
    font-weight: 400;
}

[class*="titulo44"] {
    font-size: 44px; 
}

[class*="titulo42"] {
    font-size: 42px; 
}

[class*="titulo41"] {
    font-size: 41px; 
}

[class*="titulo34"] {
    font-size: 34px; 
}
[class*="titulo26"] {
    font-size: 26px;
}
[class*="p24"] {
    font-size: 24px; 
}

[class*="p21"] {
    font-size: 21px; 
}

[class*="p18"] {
    font-size: 18px; 
}
[class*="p16"] {
   font-size: 16px;
}
[class*="p14"] {
   font-size: 14px;
}
[class*="p12"] {
   font-size: 12px;
}

@media(max-width:800px){
    [class*="titulo42"] {
        font-size: 38px;
    }

    [class*="titulo41"] {
        font-size: 37px;
    }

    [class*="p24"] {
        font-size: 22px; 
    }
}

@media(max-width:500px){
    [class*="titulo34"] {
        font-size: 30px; 
    }

    [class*="titulo26"] {
        font-size: 25px;
    }

    [class*="p16"] {
        font-size: 14px;
    }
}

@media(max-width:400px){
    [class*="p24"] {
        font-size: 19px;
    }

    [class*="p18"] {
        font-size: 16px;
    }
}

` 