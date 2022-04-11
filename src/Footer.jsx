import React from "react"
function Footer(){
    const date = new Date();
    return <footer><p>{date.getFullYear()} all rights reserved</p></footer>;
}
export default Footer;