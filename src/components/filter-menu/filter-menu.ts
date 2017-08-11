import { Component, OnInit, ElementRef, Renderer,EventEmitter,Output } from '@angular/core';
import { } from 'ionic-angular';
import { FilterDataService } from "./filter-data.services";

@Component({
  selector: 'filter-menu',
  templateUrl: 'filter-menu.html',
})
export class FilterMenuComponent implements OnInit {
  @Output() success: EventEmitter<any> = new EventEmitter();
  // VARIABLE DEFINE
  private sortItems: any[];
  private _sortItem: any;
  private categoryItems: any[];
  private _categoryItem: any;
  private brandItems: any[];
  private _brandItem: any;
  private websiteItems: any[];
  private _websiteItem: any;

  private bestDealOption: number;
  private defaultHeight: number = 60;
  private manHeight: number = 0;
  private womanHeight: number = 0;

  constructor(
    private filterDataService: FilterDataService, 
    private elRef: ElementRef,
    private renderer: Renderer
  ) {
    this.manHeight = 60;
    this.womanHeight = ((60 / 2) + 10);
  }

  ngOnInit(): void {
    this.setValue();
    this.setDefaultValue();
  }

  ngAfterViewInit() {

  }

  setValue(): void {
    // GETTING SORT DATA FROM SERVICE
    this.sortItems = this.filterDataService.getSortData();
    // GETTING BRAND DATA FROM SERVICE
    this.brandItems = this.filterDataService.getBrandData();
    // GETTING WEBSITE DATA FROM SERVICE
    this.websiteItems = this.filterDataService.getWebsiteData();
    // GETTING CATEGORY DATA FROM SERVICE
    this.categoryItems = this.filterDataService.getCategoryData();
  }

  setDefaultValue(): void {
    // SETTING DEFAULT SORT DATA FROM SERVICE
    this._sortItem = this.filterDataService.getSortDefaultData();
    // SETTING DEFAULT BRAND DATA FROM SERVICE
    this._brandItem = this.filterDataService.getBrandDefaultData();
    // SETTING DEFAULT WEBSITE DATA FROM SERVICE
    this._websiteItem = this.filterDataService.getWebsiteDefaultData();
    // SETTING DEFAULT CATEGORY DATA FROM SERVICE
    this._categoryItem = this.filterDataService.getCategoryDefaultData();
  }

  // ALL DROP-DOWN ONCHANGE METHODS
  onChangeSortDropdown($event): void {
    this._sortItem = this.filterDataService.getSortDataByIndex($event.target.value.split(':')[0]);
  }
  onChangeCategoryDropdown($event): void {
    this._categoryItem = this.filterDataService.getCategoryDataByIndex($event.target.value.split(':')[0]);
  }
  onChangeBrandDropdown($event): void {
    this._brandItem = this.filterDataService.getBrandDataByIndex($event.target.value.split(':')[0]);;
  }
  onChangeWebsiteDropdown($event): void {
    this._websiteItem = this.filterDataService.getWebsiteDataByIndex($event.target.value.split(':')[0]);
  }

  // STARS SLIDER CHANGE METHOD
  onStarsChange($event): void {

  }
  // REVIEW SLIDER CHANGE METHOD
  onReviewChange($event): void {

  }
  // PRICE SLIDER CHANGE METHOD
  onPriceChange($event): void {
    
  }

  // RESET ALL DROP-DOWN MODEL AND PRICE RANGER VALUE
  resetFilterValue(): void {
    this.setDefaultValue();
    console.log("Please clear all filter data", this._sortItem);
  }

  // FILTER SEARCH ITEM
  filterData(): void {
    console.log("Filter data");
    let filterDataObject = {
      sort: this._sortItem,
      brand: this._brandItem,
      website: this._websiteItem,
      category: this._categoryItem
    };
    this.success.emit(filterDataObject);
  }

  chooseBestDealOption(type: number): void {
    this.bestDealOption = type;
    switch (type) {
      case 1:
        this.manHeight = this.defaultHeight;
        this.womanHeight = ((this.manHeight / 2) + 10);
        break;
      case 2:
        this.womanHeight = this.defaultHeight;
        this.manHeight = ((this.womanHeight / 2) + 10);
        break;
    }
  }
}
