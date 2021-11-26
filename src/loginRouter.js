const express = require('express')
const router = express.Router()

const User = require('./models/User') 

router.get('/', (req, res)=> {

    User.findOne().then((user) => {

        if (user) {
            res.status(200).send(`Olá ${user.name}, seu número da sorte é ${user.lucky_number}`)
        } else {
            res.status(404).send("usuário não encontrado. Tente novamente.")
        }
    })

})

router.post('/', async (req, res)=> {

    const {
        name,
        email,
        password,
        birthday,
        lucky_number,
        lucky_number_confirmation 
    } = req.body

    if (lucky_number != lucky_number_confirmation) {
        return res.status(403).send("Número da sorte e confirmação não batem.")
    }

    User.findOne({ where: { email } }).then(async (user) => {

        if (user) {
            res.status(200).send("Email já cadastrado!")
        } else {
            const user = await User.create({
                email,
                password,
                name,
                birthday,
                lucky_number
            })

            res.redirect('/html/log_in.html')
        }
    })

})

module.exports = router
