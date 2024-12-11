import { Request, Response } from 'express'
import { VocabularyServices } from './vocabulary.service'

const createVocabulary = async (req: Request, res: Response) => {
    try {
        const result = await VocabularyServices.createVocabularyIntoDB(req.body)

        res.status(200).json({
            success: true,
            message: 'Vocabulary created successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to created Vocabulary',
            error: error,
        })
    }
}

const getAllVocabularies = async (req: Request, res: Response) => {
    try {
        const result = await VocabularyServices.getAllVocabulariesFromDB()

        res.status(200).json({
            success: true,
            message: 'Vocabularies retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve Vocabulary',
            error: error,
        })
    }
}

const updateVocabulary = async (req: Request, res: Response) => {
    const { vocabularyId } = req.params

    try {
        const result = await VocabularyServices.updateVocabularyIntoDB(
            vocabularyId,
            req.body,
        )

        res.status(200).json({
            success: true,
            message: 'Vocabulary updated successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update vocabulary',
            error: error,
        })
    }
}

const deleteVocabulary = async (req: Request, res: Response) => {
    const { vocabularyId } = req.params

    try {
        const result = await VocabularyServices.deleteVocabularyFromDB(vocabularyId)

        res.status(200).json({
            success: true,
            message: 'Vocabulary deleted successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete vocabulary',
            error: error,
        })
    }
}

export const VocabularyControllers = {
    createVocabulary,
    getAllVocabularies,
    updateVocabulary,
    deleteVocabulary,
}
