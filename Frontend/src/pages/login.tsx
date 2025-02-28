import {useForm} from "react-hook-form";
import axios from "axios";
import {UseReload} from "../hook/useReload.ts";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const {register, handleSubmit} = useForm()
    const {reset} = UseReload()
    const navigate = useNavigate()
    const onSubmit = async (data) =>{
        try {
            const response = await axios.post('http://localhost:3000/authentification', data)
            //navigate("/agent/grh/accueil")
            const titre = response.data.titre
            if (titre === "rh"){
                navigate("/agent/grh/accueil")
                localStorage.setItem("idRh", response.data.agent.id)
            }else{
                navigate("/agent/accueil")
                localStorage.setItem("idDpt", response.data)
                localStorage.setItem("idAgent", response.data.agent.id)
            }
        }catch (e) {
            alert(e.response.data.reponse)
            reset()
        }
    }
    return (
        <div className={"d-container-form"}>
            <div className={"d-form"}>
                <div className={"d-head"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                        <g id="Groupe_11" data-name="Groupe 11" transform="translate(-1.5 -1.5)">
                            <path id="Tracé_15" data-name="Tracé 15" d="M4,14.25V9.125A5.125,5.125,0,0,1,9.125,4H14.25"
                                  fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="5"/>
                            <path id="Tracé_16" data-name="Tracé 16" d="M4,16v5.125A5.125,5.125,0,0,0,9.125,26.25H14.25"
                                  transform="translate(0 18.75)" fill="none" stroke="#000" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="5"/>
                            <path id="Tracé_17" data-name="Tracé 17" d="M16,4h5.125A5.125,5.125,0,0,1,26.25,9.125V14.25"
                                  transform="translate(18.75)" fill="none" stroke="#000" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="5"/>
                            <path id="Tracé_18" data-name="Tracé 18"
                                  d="M16,26.25h5.125a5.125,5.125,0,0,0,5.125-5.125V16"
                                  transform="translate(18.75 18.75)" fill="none" stroke="#000" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="5"/>
                            <path id="Tracé_19" data-name="Tracé 19" d="M9,10h.026" transform="translate(7.813 9.375)"
                                  fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="5"/>
                            <path id="Tracé_20" data-name="Tracé 20" d="M15,10h.026" transform="translate(17.188 9.375)"
                                  fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="5"/>
                            <path id="Tracé_21" data-name="Tracé 21" d="M9.5,15a8.969,8.969,0,0,0,12.813,0"
                                  transform="translate(8.594 17.188)" fill="none" stroke="#000" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="5"/>
                        </g>
                    </svg>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Bienvenu sur la page de connexion</h3>
                    <div className={"d-form-input"}>
                        <div className={"d-input"}>
                            <div className={"d-svg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21">
                                    <g id="Groupe_3" data-name="Groupe 3" transform="translate(-2.25 -2.25)">
                                        <path id="Tracé_8" data-name="Tracé 8" d="M3,6H24.5" transform="translate(0)"
                                              fill="rgba(0,0,0,0)" stroke="#09709e" stroke-linecap="round"
                                              stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_9" data-name="Tracé 9" d="M3,12H24.5"
                                              transform="translate(0 0.75)" fill="rgba(0,0,0,0)" stroke="#09709e"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_10" data-name="Tracé 10" d="M3,18H24.5"
                                              transform="translate(0 1.5)" fill="rgba(0,0,0,0)" stroke="#09709e"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_11" data-name="Tracé 11" d="M6,3V22.5" fill="rgba(0,0,0,0)"
                                              stroke="#09709e" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5"/>
                                        <path id="Tracé_12" data-name="Tracé 12" d="M12,3V22.5"
                                              transform="translate(1.75)" fill="rgba(0,0,0,0)" stroke="#09709e"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_13" data-name="Tracé 13" d="M18,3V22.5"
                                              transform="translate(3.5)" fill="rgba(0,0,0,0)" stroke="#09709e"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={"d-inp"}>
                                <input type="text" placeholder={"Matricule"} {...register("matricule",{required : true})} />
                            </div>
                        </div>
                        <div className={"d-input"}>
                            <div className={"d-svg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.556" height="27.571"
                                     viewBox="0 0 23.556 27.571">
                                    <g id="Groupe_2" data-name="Groupe 2" transform="translate(-4.25 -2.25)">
                                        <path id="Tracé_5" data-name="Tracé 5"
                                              d="M5,13.9A3.032,3.032,0,0,1,8.151,11H23.905a3.032,3.032,0,0,1,3.151,2.9v8.69a3.032,3.032,0,0,1-3.151,2.9H8.151A3.032,3.032,0,0,1,5,22.587Z"
                                              transform="translate(0 3.587)" fill="#09709e" stroke="#fff"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_6" data-name="Tracé 6"
                                              d="M11,16.448A1.581,1.581,0,1,0,12.575,15,1.516,1.516,0,0,0,11,16.448"
                                              transform="translate(3.453 5.381)" fill="#09709e" stroke="#fff"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Tracé_7" data-name="Tracé 7"
                                              d="M8,14.587V8.794A6.064,6.064,0,0,1,14.3,3a6.064,6.064,0,0,1,6.3,5.794v5.794"
                                              transform="translate(1.726)" fill="#09709e" stroke="#fff"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    </g>
                                </svg>

                            </div>
                            <div className={"d-inp"}>
                                <input type="password" placeholder={"Mot de passe"} {...register("mdp",{required : true})}/>
                            </div>
                        </div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};
