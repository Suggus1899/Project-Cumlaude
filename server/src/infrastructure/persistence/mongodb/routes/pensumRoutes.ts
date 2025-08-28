import express from 'express';
import { createPensum, getAllPensums, getPensumById } from '../controllers/PensumController';
import { validatePensum } from '../middlewares/pensumValidationMiddleware';

const router = express.Router();

router.post('/', validatePensum, async (req, res) => {
  try {
    const pensum = await createPensum(req.body);
    res.status(201).json(pensum);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear pensum.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const pensums = await getAllPensums();
    res.json(pensums);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener pensums.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const pensum = await getPensumById(req.params.id);
    if (!pensum) return res.status(404).json({ error: 'Pensum no encontrado.' });
    res.json(pensum);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener pensum.' });
  }
});

// Actualizar pensum
router.put('/:id', validatePensum, async (req, res) => {
  try {
    const pensum = await require('../controllers/PensumController').updatePensum(req.params.id, req.body);
    if (!pensum) return res.status(404).json({ error: 'Pensum no encontrado.' });
    res.json(pensum);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar pensum.' });
  }
});

// Eliminar pensum
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await require('../controllers/PensumController').deletePensum(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Pensum no encontrado.' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar pensum.' });
  }
});

export default router;
