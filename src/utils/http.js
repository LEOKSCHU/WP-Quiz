export const searchQuizCollection = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
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

export const getTokenWithCredentials = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "token"
}

export const registerAccount = async (email, password, name) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
}
export const loginWithToken = async (token) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { "name": "레오", "email": "331leo@outlook.com" }
}

export const getQuiz = async (quizId, quizCount) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
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
    ]
}