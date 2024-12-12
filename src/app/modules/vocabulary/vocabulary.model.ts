import { model, Schema } from 'mongoose'
import { TVocabulary } from './vocabulary.interface'

const vocabularySchema = new Schema<TVocabulary>(
    {
        word: {
            type: String,
            require: true,
        },
        meaning: {
            type: String,
            require: true,
        },
        pronunciation: {
            type: String,
            require: true,
        },
        whenToSay: {
            type: String,
            require: true,
        },
        lessonNumber: {
            type: Number,
            require: true,
            ref: 'Lesson',
        },
        adminEmail: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    },
)

export const Vocabulary = model<TVocabulary>('Vocabulary', vocabularySchema)
