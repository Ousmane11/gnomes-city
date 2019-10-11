import axios from 'axios'

export default class Services{

    constructor() {
        this.service= axios.create({
            baseURL: `https://raw.githubusercontent.com/`
        })
    }

    getCitizens = () => this.service.get(`rrafols/mobile_test/master/data.json`)
}