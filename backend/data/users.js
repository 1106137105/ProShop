import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jason',
        email: 'jason@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Janne',
        email: 'janne@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]


export default users