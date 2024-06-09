import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE;
import { openInfoModal, infoModalContent } from "../utils/store";


export const getTokenWithCredentials = async (email, password) => {
    // get token from API_BASE/v1/auth/login
    try {
        let response = await axios.post(`${API_BASE}/auth/login`, { email, password });
        return response.data.accessToken

    } catch (e) {
        infoModalContent.set({ title: "로그인 실패", message: e.response.data.detail, color: "red" });
    }
}

export const registerAccount = async (email, password, name) => {
    try {
        let response = await axios.post(`${API_BASE}/auth/register`, { email, password, name });
        return response.data

    } catch (e) {
        infoModalContent.set({ title: "회원가입 실패", message: e.response.data.detail, color: "red" });
    }
}
export const loginWithToken = async (token) => {
    let response = await axios.get(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data
}


export const searchQuizCollection = async (query) => {
    let response = await axios.get(`${API_BASE}/quiz/search`, { params: { query } })
    return response.data.data
    return [
        { "id": 1, "name": "Quiz 1", "description": "Quiz 1 description", "questionsCount": 22, "author": "Quiz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 2, "name": "Quiz 2", "description": "Quiz 2 description", "questionsCount": 54, "author": "Quizz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 3, "name": "Quiz 3", "description": "Quiz 3 description", "questionsCount": 34, "author": "Quizzz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 4, "name": "Quiz 4", "description": "Quiz 4 description", "questionsCount": 12, "author": "Quifdz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 5, "name": "Quiz 5", "description": "Quiz 5 description", "questionsCount": 67, "author": "Quizdd Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 6, "name": "Quiz 6", "description": "Quiz 6 description", "questionsCount": 19, "author": "Quidfz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 7, "name": "Quiz 7", "description": "Quiz 7 description", "questionsCount": 10, "author": "Quihfz Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 8, "name": "Quiz 8", "description": "Quiz 8 description", "questionsCount": 29, "author": "Qui4z Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
        { "id": 9, "name": "Quiz 9", "description": "Quiz 9 description", "questionsCount": 38, "author": "Qui7z Author", "image": "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg", "tags": ["태그1", "HTML", "프로그래밍", "코딩", "개발자"] },
    ]
}


export const getQuiz = async (quizId, quizCount) => {
    let response = await axios.get(`${API_BASE}/quiz/${quizId}?quizCount=${quizCount}`)
    return response.data
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        name: "퀴즈 이름",
        quiz:
            [
                { "id": 1, "question": "질문1", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 2, "question": "질문2", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 3, "question": "질문3", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 4, "question": "질문4", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 5, "question": "질문5", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 6, "question": "질문6", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 7, "question": "질문7", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 8, "question": "질문8", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 9, "question": "질문9", "answers": ["답1", "답2", "답3", "답4"] },
                { "id": 10, "question": "질문10", "answers": ["답1", "답2", "답3", "답4"] },
            ], session: "sadfsadf-asfdsadfd-fsdffds-fsdfs"
    }
}

export const submitQuiz = async (session, answers) => {
    let response = await axios.post(`${API_BASE}/quiz/submit`, { session, answers })
    return response.data
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { "correct": 7, "total": 10 }
}

export const createQuiz = async (title, description, author, img, tags, quizzes) => {
    let response = await axios.post(`${API_BASE}/quiz/create`, { title, description, author, img, tags, quizzes });
    return response.data.id
    console.log({ title, description, author, img, tags, quizzes })
    return { "quizId": 4726 }
}
