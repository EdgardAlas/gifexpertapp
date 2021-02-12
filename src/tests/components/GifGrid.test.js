import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

describe('pruebas en gifgrid', () => {

    test('Match con snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const category = "One punch";
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })


    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: "ABC",
            url: "http:localhost",
            title: "cualquier cosa"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const category = "One punch";
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
    })


});
