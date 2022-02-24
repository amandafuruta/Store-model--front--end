import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

:root {
    --primary-color: #F68700;
    --hover-color: #C66A00;
    --disable-color: #F1F3F4;
    --bgd-gray-color: #E5E5E5;
    --bgd-white-color: #fff;
    --green-color: #0DAA7A;
    --green-dark-color: #067A6D;
}

*:focus {
    outline-color: var(--primary-color) !important;
}


a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a:hover,
button:hover {
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

button{
    border:none;
    outline: none;
}

.react-select__single-value {
    transform: translateY(-25%) !important;
}
a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}

input{
    max-width: 320px;
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    margin-bottom: 16px;
}

.text_title{
    margin-bottom: 45px;
    padding-top: 8px;
    position: relative;

    &:before{
        content: "";
        width: 50px;
        height: 2px;
        background-color: var(--primary-color);
        position: absolute;
        top: 0;
    }
}


    .label {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }


    .label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: #FFFFFF;
        border-radius:4px;
        border: 1px solid #DDDDDD;
    }


    .label:hover input ~ .checkmark {
        background-color: #ccc;
    }


    .label input:checked ~ .checkmark {
        background-color: #0DAA7A;
    }

/* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .label input:checked ~ .checkmark:after {
        display: block;
    }

/* Style the checkmark/indicator */
    .label .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }        


`