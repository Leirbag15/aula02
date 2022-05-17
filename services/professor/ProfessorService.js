const ProfessorModel = require('../../models/professor/ProfessorModel')

let professors = [
    {_id:0, name:"JohnCity", course: "Sistemas de Informação",ira:6.7},
    {_id:1, name:"Mirano de Tal", course: "Sistemas de Informação",ira:4.5},
    {_id:2, name:"Letrano de Tal", course: "Sistemas de Informação",ira:9.0},
    {_id:3, name:"Rodano de Tal", course: "Sistemas de Informação",ira:7.8}
]
let _id = 4

class ProfessorService {

    static create(data) {
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree)
        professors.push(professor)
        return professor
    }
    static retrieve(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                return professors[i]
            }
        }
        return {}
    }
    static update(_id, data) {
        for (let s of professors) {
            if (s._id == _id) {
                s.name = data.name
                s.university = data.university
                s.degree = data.degree
                return s
            }
        }
        return null
    }
    static delete(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                professors.splice(i, 1)
                return true
            }
        }
        return false
    }
    static list() {
        return professors
    }

}

module.exports = ProfessorService