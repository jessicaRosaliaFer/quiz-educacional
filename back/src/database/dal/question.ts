import { Transaction } from 'sequelize/types'
import { Question } from '../models/Question'
import { QuestionInput, QuestionOutput } from '../models/Question'
import { QuestionCategory } from '../models/QuestionCategory'
import { User } from '../models/User'

export const create = async (questionInput: QuestionInput, transaction?: Transaction): Promise<Question> => {
    const question = await Question.create(questionInput, { transaction })
    return question
}

export const findOrCreate = async (questionInput: QuestionInput): Promise<Question> => {
    const [question] = await Question.findOrCreate({
        where: {
            id: questionInput.id
        },
        defaults: questionInput,
        include: [Question.associations.options]
    })

    return question
}

export const update = async (id: number, questionInput: Partial<QuestionInput>): Promise<Question> => {
    const question = await Question.findByPk(id)

    if (!question) {
        // @todo throw custom error
        throw new Error('questão não encontrada')
    }

    const updatedQuestion = await question.update(questionInput)
    return updatedQuestion
}

export const getById = async (id: number, answer?: boolean): Promise<Question> => {
    const include = [Question.associations.options, Question.associations.user, Question.associations.category,]
    if (answer) include.push(Question.associations.answer);

    const question = await Question.findByPk(id, { include })

    if (!question) {
        // @todo throw custom error
        throw new Error('questão não encontrada')
    }

    return question
}


export const deleteById = async (id: number): Promise<boolean> => {
    const deletedQuestionCount = await Question.destroy({
        where: { id }
    })

    return !!deletedQuestionCount
}

export const findAll = async (): Promise<Question[]> => {
    return await Question.findAll({ include: { all: true } });
}

export const findAllCategories = async (): Promise<QuestionCategory[]> => {
    return await QuestionCategory.findAll();
}

