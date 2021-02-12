import { getGif } from "../../helpers/getGifs"

describe("pruebas en getGifs", () => {
    test("Debe de traer 10 elementos", async () => {
        const gifs = await getGif("one punch")
        expect(gifs.length).toBe(10)
    })
})