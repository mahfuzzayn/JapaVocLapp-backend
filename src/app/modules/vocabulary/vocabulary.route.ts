import express from 'express'
import { VocabularyControllers } from './vocabulary.controller'

const router = express.Router()

router.get('/', VocabularyControllers.getAllVocabularies)

router.post('/create-vocabulary', VocabularyControllers.createVocabulary)

router.patch('/:vocabularyId', VocabularyControllers.updateVocabulary)

router.delete('/:vocabularyId', VocabularyControllers.deleteVocabulary)

export const VocabularyRoutes = router
