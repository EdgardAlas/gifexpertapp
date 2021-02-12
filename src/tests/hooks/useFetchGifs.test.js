import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks"

describe('Pruebas en el custom hook', () => {
    test('Debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("one pnch"))

        const { data, loading } = result.current
        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe de retonar un arreglo de imagenes y loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("one pnch"))

        await waitForNextUpdate()

        const { data, loading } = result.current



        expect(data.length).toEqual(10)
        expect(loading).toBe(false)
    })


});
