const Paragraph = ({ p, color = "#9220cf", color2 = "#c482e4" ,color3 = "#E5C5F6" , upperCase = "uppercase"}) => { 
    return (
    <>
    <p style={{color: color, textTransform : upperCase}}>{p}</p>
    <p style={{color: color2, textTransform : upperCase}}>{p}</p>
    <p style={{color: color3, textTransform : upperCase}}>{p}</p>
     </>
     )

}

export default Paragraph