import express from 'express'
import { LessonControllers } from './lesson.controller'

const router = express.Router()

router.get('/', LessonControllers.getAllLessons)

router.post('/create-lesson', LessonControllers.createLesson)

router.patch('/:lessonId', LessonControllers.updateLesson)

router.delete('/:lessonId', )

export const LessonRoutes = router;