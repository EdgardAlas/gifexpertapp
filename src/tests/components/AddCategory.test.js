import React from "react"
import { shallow } from "enzyme"
import AddCategory from '../../components/AddCategory'

describe("pruebas en addcategory", () => {


    const setCategories = jest.fn()

    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })


    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot()
    })

    test("debe de cambiar el input", () => {
        const input = wrapper.find("input")
        const value = "Hola mundo"
        input.simulate("change", { target: { value } })
    })

    test("No debe de postear la informacion con submit", () => {
        const form = wrapper.find("form")
        form.simulate("submit", { preventDefault() { } })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test("debe de llamar el setcategoires y limpiar la caja de texto", () => {

        const value = "Hola mundo"

        wrapper.find("input").simulate("change", { target: { value } })

        wrapper.find("form").simulate("submit", { preventDefault() { } })
        expect(setCategories).toHaveBeenCalled()

        expect(wrapper.find("input").props("value").value).toBe("")
    })
})