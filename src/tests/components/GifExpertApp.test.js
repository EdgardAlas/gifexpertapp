import GifExpertApp from "../../GifExpertApp"
const { shallow } = require("enzyme/build");

describe('Pruebas en GifExpertApp', () => {
    test('Match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ["one punch", "dragon ball"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("GifGrid").length).toBe(categories.length)
    })

});
