import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

const createLessonIntoDB = async (payload: TLesson) => {
    const result = await Lesson.create(payload)

    return result
}

const getAllLessonsFromDB = async () => {
    const result = await Lesson.find()

    return result
}

const updateLessonIntoDB = async (id: string, payload: Partial<TLesson>) => {
    const existingLesson = await Lesson.findById(id)

    if (!existingLesson) {
        throw new Error('Lesson not found')
    }

    const result = await Lesson.updateOne({ _id: id }, payload)

    return result
}

export const LessonServices = {
    createLessonIntoDB,
    getAllLessonsFromDB,
    updateLessonIntoDB
}
