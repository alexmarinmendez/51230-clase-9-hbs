import { Router } from 'express'

const router = Router()

const foods = [
    { name: 'Banana', price: 10 },
    { name: 'Wine', price: 50 },
    { name: 'Hot Dogs', price: 10 },
    { name: 'Hamburguers', price: 20 },
    { name: 'Beers', price: 70 },
]

const user = {
    name: 'Shakira',
    lastname: 'Shakira',
    role: 'admin'
}

router.get('/', (req, res) => {
    res.render('foods', {
        user,
        isAdmin: user.role == 'admin' ? true : false,
        foods
    })
})

export default router