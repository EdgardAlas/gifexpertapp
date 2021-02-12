import React, { useState } from 'react'
import propTypes from "prop-types"

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')


    const handleInputchange = (e) => {
        setInputValue(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {

            setCategories(old => [inputValue, ...old])
            setInputValue("")
        }
    }


    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputchange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

export default AddCategory
