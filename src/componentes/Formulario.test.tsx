import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

//Jest
test('quando o input está vazio, não podem ser adicionados novos participantes', () => {
    render(<Formulario />);
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    //encontrar o botão 
    const botao = screen.getByRole('button');
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
})

test('Adiconar um participante caso exista um nome preenchido', () => {
    render(
    <RecoilRoot>
        <Formulario />
    </RecoilRoot>);
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    //encontrar o botão 
    const botao = screen.getByRole('button');
    //inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    })
    //clicar no botão submeter
    fireEvent.click(botao)
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()
    //garantir que o input não tenha valor
    expect(input).toHaveValue("")
})