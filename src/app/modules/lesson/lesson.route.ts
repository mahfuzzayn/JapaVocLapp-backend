import express from 'express'
import { LessonControllers } from './lesson.controller'

const router = express.Router()

router.get('/', LessonControllers.getAllLessons)

router.get('/:lessonNo', LessonControllers.getSingleLesson)

router.post('/create-lesson', LessonControllers.createLesson)

router.patch('/:lessonId', LessonControllers.updateLesson)

router.delete('/:lessonId', LessonControllers.deleteLesson)

export const LessonRoutes = router;