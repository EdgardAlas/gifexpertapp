import React from "react"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe("Pruebas en gifgriditem", () => {
    const title = "titulo jein";
    const url = "http://localhost/img.jpg"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test("debe de mostrar el componente correctamente", () => {


        expect(wrapper).toMatchSnapshot()
    })


    test('debe de tener un parrao con el titulo', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title)

    })

    test('debe de la imagen igual al url y alt de los props', () => {
        const img = wrapper.find("img");
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find("div");

        expect(div.hasClass("animate__fadeIn")).toBe(true)

    })



})