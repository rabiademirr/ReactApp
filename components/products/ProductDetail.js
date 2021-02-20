import React from "react"
import TextInput from "../toolbox/TextInput"

const ProductDetail=(
    categories,
    product,
    onSave,onChange

)=>{
    return (
        <form onSubmit={onSave}>
         <h2>{product.id?"Güncelle":"Ekle"}</h2>
        </form>
    )

}