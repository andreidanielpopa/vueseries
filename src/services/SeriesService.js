import Global from "./../Global";
import axios from "axios";

export default class ServiceDepartamentos {
    getSeries() {
        return new Promise(function (resolve) {
            let series = [];
            let request = 'api/series';
            let url = Global.urlApiSeries + request;
            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })
        })
    }

    findSerie(id) {
        return new Promise(function (resolve) {
            let request = 'api/series/' + id;
            let url = Global.urlApiSeries + request;
            let serie = {};
            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })
        })
    }

    findPersonajes(id) {
        return new Promise(function (resolve) {
            let personajes = [];
            let request = '/api/Series/PersonajesSerie/' + id;
            let url = Global.urlApiSeries + request;
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    createPersonaje(personaje) {
        return new Promise(function (resolve) {
            let request = 'api/personajes';
            let url = Global.urlApiSeries + request;
            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

    getPersonajes(){
        return new Promise(function (resolve) {
            let personajes = [];
            let request = 'api/personajes';
            let url = Global.urlApiSeries + request;
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    modificarPersonaje(idPersonaje,idSerie) {
        return new Promise(function (resolve) {
            let request = '/api/Personajes/'+idPersonaje+'/'+idSerie;
            let url = Global.urlApiSeries + request;
            axios.put(url).then(response => {
                resolve(response);
            })
        })
    }

    findPersonaje(id) {
        return new Promise(function (resolve) {
            let request = 'api/personajes/' + id;
            let url = Global.urlApiSeries + request;
            let personaje = {};
            axios.get(url).then(response => {
                personaje = response.data;
                resolve(personaje);
            })
        })
    }
}