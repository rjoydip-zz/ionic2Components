import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as data from "./mock-filter-data";

@Injectable()
export class FilterDataService {
    constructor() { }

    // GET SORT DATA
    public getSortData() {
        return data.SORTS;
    }
    public getSortDefaultData() {
        return data.SORTS[0];
    }
    public getSortDataByIndex(index: string) {
        return data.SORTS.filter((item) => {
            return (item.id === (parseInt(index) + 1)) ? item : false;
        })[0];
    }

    // GET CATEGORY DATA
    public getCategoryData() {
        return data.CATEGORIES;
    }
    public getCategoryDefaultData() {
        return data.CATEGORIES[0];
    }
    public getCategoryDataByIndex(index: string) {
        return data.CATEGORIES.filter((item) => {
            return (item.id === (parseInt(index) + 1)) ? item : false;
        })[0];
    }

    // GET BRAND DATA
    public getBrandData() {
        return data.BRANDS;
    }
    public getBrandDefaultData() {
        return data.BRANDS[0];
    }
    public getBrandDataByIndex(index: string) {
        return data.BRANDS.filter((item) => {
            return (item.id === (parseInt(index) + 1)) ? item : false;
        })[0];
    }

    // GET WEBSITE DATA
    public getWebsiteData() {
        return data.WEBSITES;
    }
    public getWebsiteDefaultData() {
        return data.WEBSITES[0];
    }
    public getWebsiteDataByIndex(index: string) {
        return data.WEBSITES.filter((item) => {
            return (item.id === (parseInt(index) + 1)) ? item : false;
        })[0];
    }

}