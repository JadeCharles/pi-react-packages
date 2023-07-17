import HttpService from "../../common/services/HttpService";
import RouteUriModel from "../models/RouteUriModel";

class RouteUriService { 
    static instance = new RouteUriService();

    constructor() {
        this.routeUrisMap = {};
        this.routeUris = [];
        this.routeUriMap = {};
    }

    async getRouteUriAsync(routeUriId) {
        const path = '/api/routeuri/' + routeUriId;
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            me.routeUriMap[routeUriId] = new RouteUriModel(response.data);
            return me.routeUriMap[routeUriId];
        });
    }

    async getRouteUrisAsync() {
        const path = "/api/routeuri";
        const me = this;

        return await HttpService.instance.getAsync(path).then((response) => {
            me.routeUris = response.data.map((routeUri) => {
                return new RouteUriModel(routeUri);
            });

            return me.routeUris;
        });
    }
}

export default RouteUriService;
