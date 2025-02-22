import {UseDepartement} from "../../hook/useDepartement.ts";
import {useEffect} from "react";
import {Agent} from "../../component/agent.tsx";
import {AddAgent} from "../../component/addAgent.tsx";
import {UseModal} from "../../hook/useModal.ts";
import {RapportPointage} from "../../component/rapportPointage.tsx";
import {RapportAgent} from "../../component/rapportAgent.tsx";
import {SalaireAgent} from "../../component/salaireAgent.tsx";


export const ListDepartement = () => {
    const {departement,getdeptAgentDpt, agentDptActive,close,
        definirShitfNuit,definirShitfJour,shiftAgent,getShitAgent,dptActive,titre} = UseDepartement()

    const {addClass, removeClass} = UseModal("d-modal-agent")
    const {  addClass : addReport, removeClass : removeReport } = UseModal("d-modal-rapport-visible");
    const {  addClass : addC, removeClass : remC } = UseModal("d-modal-rapport-agent-visible");
    const {  addClass : add, removeClass : rem } = UseModal('d-modal-agent-salaire-visible')
    useEffect( () =>{

    },[agentDptActive,shiftAgent])
    return (
        <div className={"d-container"}>
            <div className={"d-container-body"}>
                <div className={"d-cont-head"}>
                    <div className={"d-title"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                            <g id="Groupe_11" data-name="Groupe 11" transform="translate(-1.5 -1.5)">
                                <path id="Tracé_15" data-name="Tracé 15"
                                      d="M4,14.25V9.125A5.125,5.125,0,0,1,9.125,4H14.25" fill="none" stroke="#000"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                                <path id="Tracé_16" data-name="Tracé 16"
                                      d="M4,16v5.125A5.125,5.125,0,0,0,9.125,26.25H14.25" transform="translate(0 18.75)"
                                      fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="5"/>
                                <path id="Tracé_17" data-name="Tracé 17"
                                      d="M16,4h5.125A5.125,5.125,0,0,1,26.25,9.125V14.25" transform="translate(18.75)"
                                      fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="5"/>
                                <path id="Tracé_18" data-name="Tracé 18"
                                      d="M16,26.25h5.125a5.125,5.125,0,0,0,5.125-5.125V16"
                                      transform="translate(18.75 18.75)" fill="none" stroke="#000"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                                <path id="Tracé_19" data-name="Tracé 19" d="M9,10h.026"
                                      transform="translate(7.813 9.375)" fill="none" stroke="#000"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                                <path id="Tracé_20" data-name="Tracé 20" d="M15,10h.026"
                                      transform="translate(17.188 9.375)" fill="none" stroke="#000"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                                <path id="Tracé_21" data-name="Tracé 21" d="M9.5,15a8.969,8.969,0,0,0,12.813,0"
                                      transform="translate(8.594 17.188)" fill="none" stroke="#000"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                            </g>
                        </svg>
                        <h3>FaceApp</h3>
                    </div>
                </div>
                <div className={"d-cont-body"}>
                    <div className={"list-dept"}>
                        <div className={"d-title-cont"}>
                            <h3>Liste des departements</h3>
                        </div>
                        <div className={"d-list-dept"}>
                            {
                                departement && departement.map((dpt) => <div className={"d-dept"} onClick={getdeptAgentDpt}
                                id={dpt.id}>
                                    <h3 id={dpt.id}>{dpt.Nom}</h3>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={"list-alea"}>
                            <div className={"d-title-cont"}>
                                <h3>{dptActive ? <span>Agents - {dptActive.Nom}</span> : <span>Selectionnez un departement</span>}</h3>
                            </div>
                            <div className={"d-list-agent-option"}>
                                <div className={"d-option-dpt"}>
                                    {dptActive ? <><div className={"d-opt"}  id={dptActive.id}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.5 13.5">
                                            <g id="Groupe_23" data-name="Groupe 23"
                                               transform="translate(-2.25 -2.25)">
                                                <path id="Tracé_23" data-name="Tracé 23"
                                                      d="M3,9A6,6,0,1,0,9,3,6,6,0,0,0,3,9" fill="none" stroke="#000"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="1.5"/>
                                                <path id="Tracé_24" data-name="Tracé 24" d="M9,12h4"
                                                      transform="translate(-2 -3)" fill="none" stroke="#000"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="1.5"/>
                                                <path id="Tracé_25" data-name="Tracé 25" d="M12,9v4"
                                                      transform="translate(-3 -2)" fill="none" stroke="#000"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="1.5"/>
                                            </g>
                                        </svg>
                                        <span id={dptActive.id} onClick={addClass}>Ajouter un agent</span></div>
                                        <div className={"d-opt"} id={dptActive.id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                 width="24" height="24" stroke-width="1.5">
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                <path
                                                    d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                <path d="M9 17l0 -5"></path>
                                                <path d="M12 17l0 -1"></path>
                                                <path d="M15 17l0 -3"></path>
                                            </svg>
                                            <span id={dptActive.id} onClick={addReport}>Rapport mensuel</span></div>
                                    </> : ""}
                                </div>
                                <div className={"d-list-agent"}>
                                    {
                                        agentDptActive.length > 0 ?
                                            agentDptActive.map((agetDpt, key) => <Agent
                                                                                        agentDpt={agetDpt}
                                                                                        place={key}
                                                                                        key = {key}
                                                                                        handleAdd={addC}
                                                                                        handleSalAdd={add}
                                                                                        handleShiftNuit={definirShitfNuit}
                                                                                        handleShiftJour={definirShitfJour}
                                                                                        handleShiftAgent={getShitAgent}/>)
                                            : <h3>la liste est vide</h3>
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={"d-modal-shift"}>
                <div className={"d-shift-head"}>
                    <div className={"close"}></div>
                </div>
                <div className={"d-shift-cont"}>
                    <div className={"close"} onClick={close} id={"d-shift-cont-visible"}></div>
                    <div className={"d-shift-body"}>
                        <h3>Shift jour : {shiftAgent && shiftAgent.jour ? <span className={"oui"}>Oui</span> :
                            <span className={"non"}>Non</span>}</h3>
                        <h3>Shift nuit : {shiftAgent && shiftAgent.nuit ? <span className={"oui"}>Oui</span> :
                            <span className={"non"}>Non</span>}</h3>
                    </div>
                </div>

            </div>
            <AddAgent titre={titre} handleRemove={removeClass} dptActive={dptActive}/>
            <RapportPointage handleRemove={removeReport} dpt={dptActive}/>
            <RapportAgent handleRemove={remC} agt={agentDptActive}/>
            <SalaireAgent handleRemove={rem}  agt={agentDptActive}/>
        </div>
    );
};
