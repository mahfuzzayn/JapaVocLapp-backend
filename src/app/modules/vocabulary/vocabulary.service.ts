import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

const createVocabularyIntoDB = async (payload: TVocabulary) => {
    const result = await Vocabulary.create(payload)

    return result
}

const getAllVocabulariesFromDB = async () => {
    const result = await Vocabulary.find()

    return result
}

const updateVocabularyIntoDB = async (
    id: string,
    payload: Partial<TVocabulary>,
) => {
    const existingVocabulary = await Vocabulary.findById(id)

    if (!existingVocabulary) {
        throw new Error('Lesson not found')
    }

    const result = await Vocabulary.updateOne({ _id: id }, payload)

    return result
}

const deleteVocabularyFromDB = async (id: string) => {
    const vocabulary = await Vocabulary.findById(id)

    if (!vocabulary) {
        throw new Error('Lesson not found')
    }

    const result = await Vocabulary.findOneAndDelete({ _id: id })

    return result
}

export const VocabularyServices = {
    createVocabularyIntoDB,
    getAllVocabulariesFromDB,
    updateVocabularyIntoDB,
    deleteVocabularyFromDB,
}
