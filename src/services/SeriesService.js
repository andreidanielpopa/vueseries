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

    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = 'api/departamentos';
            let url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response => {
                resolve(response);
            })
        })
    }

    deleteDepartamento(id) {
        return new Promise(function (resolve) {
            let request = 'api/departamentos/' + id;
            let url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(response => {
                resolve(response);
            })
        })
    }
}