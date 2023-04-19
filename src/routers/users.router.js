import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('usuarios', {
        nombre: 'Alex',
        role: 'user'
    })
})

export default router