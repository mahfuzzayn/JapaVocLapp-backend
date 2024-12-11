import { Request, Response } from 'express'
import { LessonServices } from './lesson.service'

const createLesson = async (req: Request, res: Response) => {
    try {
        const result = await LessonServices.createLessonIntoDB(req.body)

        res.status(200).json({
            success: true,
            message: 'Lesson created successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to created lesson',
            error: error,
        })
    }
}

const getAllLessons = async (req: Request, res: Response) => {
    try {
        const result = await LessonServices.getAllLessonsFromDB()

        res.status(200).json({
            success: true,
            message: 'Lessons retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve lesson',
            error: error,
        })
    }
}

const updateLesson = async (req: Request, res: Response) => {
    const { lessonId } = req.params

    try {
        const result = await LessonServices.updateLessonIntoDB(
            lessonId,
            req.body,
        )

        res.status(200).json({
            success: true,
            message: 'Lesson updated successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update lesson',
            error: error,
        })
    }
}

const deleteLesson = async (req: Request, res: Response) => {
    const { lessonId } = req.params

    try {
        const result = await LessonServices.deleteLessonFromDB(lessonId)

        res.status(200).json({
            success: true,
            message: 'Lesson deleted successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete lesson',
            error: error,
        })
    }
}

export const LessonControllers = {
    createLesson,
    getAllLessons,
    updateLesson,
    deleteLesson,
}
