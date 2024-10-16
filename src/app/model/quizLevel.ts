import { Question } from "./question";

export interface QuizLevel{
    quizId: number;
    level: DifficultyLevel;
    levelNumber: number;
    quizName: string;
}

export enum DifficultyLevel {
    EASY = "Facile",
    MEDIUM = "Moyen",
    HARD = "Difficile"
}
