import { Vocabulary } from '../vocabulary/vocabulary.model'
import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

const createLessonIntoDB = async (payload: TLesson) => {
    const result = await Lesson.create(payload)

    return result
}

const getAllLessonsFromDB = async () => {
    const result = await Lesson.aggregate([
        {
            $lookup: {
                from: 'vocabularies',
                localField: 'lessonNumber',
                foreignField: 'lessonNumber',
                as: 'vocabularies',
            },
        },
        {
            $project: {
                name: 1,
                lessonNumber: 1,
                vocabularyCount: { $size: '$vocabularies' },
            },
        },
    ])

    return result
}

const getSingleLessonFromDB = async (lessonNo: string) => {
    const result = await Lesson.aggregate([
        {
            $match: { lessonNumber: parseInt(lessonNo) },
        },
        {
            $lookup: {
                from: 'vocabularies',
                localField: 'lessonNumber',
                foreignField: 'lessonNumber',
                as: 'vocabularies',
            },
        },
        {
            $project: {
                name: 1,
                lessonNumber: 1,
                vocabularyCount: { $size: '$vocabularies' },
                vocabularies: 1,
            },
        },
        {
            $limit: 1,
        },
    ])

    return result[0] || null
}

const updateLessonIntoDB = async (id: string, payload: Partial<TLesson>) => {
    const existingLesson = await Lesson.findById(id)

    if (!existingLesson) {
        throw new Error('Lesson not found')
    }

    const result = await Lesson.updateOne({ _id: id }, payload)

    return result
}

const deleteLessonFromDB = async (id: string) => {
    const lesson = await Lesson.findById(id)

    if (!lesson) {
        throw new Error('Lesson not found')
    }

    await Vocabulary.deleteMany({
        lessonNumber: lesson.lessonNumber,
    })

    const result = await Lesson.findByIdAndDelete(id)

    return result
}

export const LessonServices = {
    createLessonIntoDB,
    getSingleLessonFromDB,
    getAllLessonsFromDB,
    updateLessonIntoDB,
    deleteLessonFromDB,
}
