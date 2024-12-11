import { model, Schema } from 'mongoose'
import { TLesson } from './lesson.interface'

const lessonSchema = new Schema<TLesson>({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
})

export const Lesson = model<TLesson>('Lesson', lessonSchema)
