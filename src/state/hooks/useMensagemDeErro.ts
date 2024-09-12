import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMensagemDeErro = () => {
    const mensgam = useRecoilValue(erroState)
    return mensgam;
}