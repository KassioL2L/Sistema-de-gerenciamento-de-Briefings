import React, { useEffect, useState } from "react";
import {
    getAllBriefings,
    deleteBriefingById,
    updateBriefingById,
} from "../../services/api";
import Modal from "../Modal/Modal";
import { MdSettings, MdVisibility } from "react-icons/md";
import "./BriefingList.css";
import { useNavigate } from "react-router-dom";

const BriefingList = () => {
    const [state, setState] = useState({
        briefings: [],
        selectedBriefing: null,
        showModal: false,
        editedClientName: "",
        editedDescription: "",
        showOptionsId: null,
        currentPage: 1,
        itemsPerPage: 9,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBriefings = async () => {
            try {
                const data = await getAllBriefings();
                setState((s) => ({ ...s, briefings: data }));
            } catch (error) {
                console.error(error);
            }
        };

        fetchBriefings();
    }, []);

    const handleDeleteBriefing = async (briefingId) => {
        try {
            await deleteBriefingById(briefingId);
            setState((s) => ({
                ...s,
                briefings: s.briefings.filter(
                    (briefing) => briefing._id !== briefingId
                ),
            }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditBriefing = async () => {
        try {
            const updatedBriefing = {
                ...state.selectedBriefing,
                clientName: state.editedClientName,
                description: state.editedDescription,
            };
            const data = await updateBriefingById(
                state.selectedBriefing._id,
                updatedBriefing
            );
            setState((s) => ({
                ...s,
                briefings: s.briefings.map((b) =>
                    b._id === data._id ? data : b
                ),
                showModal: false,
            }));
        } catch (error) {
            console.error(error);
        }
    };

    const toggleModal = () => {
        setState((s) => ({ ...s, showModal: !s.showModal }));
    };

    const handleOpenModal = (briefing) => {
        setState({
            ...state,
            selectedBriefing: briefing,
            editedClientName: briefing.clientName,
            editedDescription: briefing.description,
            showModal: true,
        });
    };

    const handleToggleOptions = (id) => {
        setState((s) => ({
            ...s,
            showOptionsId: s.showOptionsId === id ? null : id,
        }));
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    const indexOfLastItem = state.currentPage * state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
    const currentBriefings = state.briefings.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber) =>
        setState((s) => ({ ...s, currentPage: pageNumber }));

    return (
        <div className="briefingList-container">
            <div className="briefing-itens">
                {currentBriefings.map((briefing) => (
                    <div key={briefing._id} className="briefing-item">
                        <div className="briefing-box">
                            <h3>{briefing.clientName}</h3>
                            <p>{briefing.description}</p>
                            <p>{formatDate(briefing.dateTime)}</p>
                            {state.showOptionsId === briefing._id && (
                                <div className="options-container">
                                    <button
                                        className="button-edit"
                                        onClick={() =>
                                            handleOpenModal(briefing)
                                        }
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="button-delete"
                                        onClick={() =>
                                            handleDeleteBriefing(briefing._id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </div>
                            )}
                            <MdSettings
                                className="options-toggle"
                                onClick={() =>
                                    handleToggleOptions(briefing._id)
                                }
                            />
                            <button
                                className="see-more-button"
                                onClick={() =>
                                    navigate(`/briefing/${briefing._id}`)
                                }
                            >
                                <MdVisibility /> Ver mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[
                    ...Array(
                        Math.ceil(state.briefings.length / state.itemsPerPage)
                    ).keys(),
                ].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
            <Modal isOpen={state.showModal} onClose={toggleModal}>
                <div className="modal-content">
                    <h2>Editando Briefing</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleEditBriefing();
                        }}
                    >
                        <label>
                            <input
                                type="text"
                                placeholder="Nome do Cliente"
                                value={state.editedClientName}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        editedClientName: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <textarea
                                placeholder="Descrição"
                                value={state.editedDescription}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        editedDescription: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <button type="submit">Salvar Alterações</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default BriefingList;
