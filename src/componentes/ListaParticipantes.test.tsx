import React from "react"
import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>)
        
            const itens = screen.queryAllByRole('listitem')
            expect(itens).toHaveLength(0)
    })
})

describe('Uma lista preenchida de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    const participantes = ['Ana', 'Catarina']
    test('Deve ser renderizada uma lista de participantes', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>)
        
            const itens = screen.queryAllByRole('listitem')
            expect(itens).toHaveLength(participantes.length)
    })
})