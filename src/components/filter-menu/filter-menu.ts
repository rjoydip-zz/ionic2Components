import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Gesture } from 'ionic-angular';
import { FilterDataService } from "./filter-data.services";

@Component({
  selector: 'filter-menu',
  templateUrl: 'filter-menu.html',
})
export class FilterMenuComponent implements OnInit {
  // VARIABLE DEFINE
  private all_model_value: any;
  private sortItems: any[];
  private _sortItem: any;
  private categoryItems: any[];
  private _categoryItem: any;
  private brandItems: any[];
  private _brandItem: any;
  private websiteItems: any[];
  private _websiteItem: any;

  private stars: any = { lower: 1, upper: 5 };
  private review: any = { lower: 1, upper: 500 };
  private price: any = { lower: 1, upper: 1000 };

  private bestDealOption: number;
  private defaultHeight: number = 60;
  private manHeight: number = 0;
  private womanHeight: number = 0;

  private stars_range: any;
  private stars_handle: any;

  constructor(
    private filterDataService: FilterDataService, 
    private elRef: ElementRef,
    private renderer: Renderer
  ) {
    this.manHeight = 60;
    this.womanHeight = ((60 / 2) + 10);
    console.log('CascadeSearchComponent Component');
  }

  ngOnInit(): void {
    this.setValue();
    this.setDefaultValue();
  }

  ngAfterViewInit() {
    // this.stars_handle = this.elRef.nativeElement.querySelector('.stars .range-slider .range-knob-handle');
    // this.stars_range = this.elRef.nativeElement.querySelector('.stars .range');
    // this.renderer.setElementClass(this.stars_range, 'range-pressed', true);
    // this.renderer.setElementClass(this.stars_handle, 'range-knob-pressed', true);
  }

  private setValue(): void {
    // GETTING SORT DATA FROM SERVICE
    this.sortItems = this.filterDataService.getSortData();
    // GETTING BRAND DATA FROM SERVICE
    this.brandItems = this.filterDataService.getBrandData();
    // GETTING WEBSITE DATA FROM SERVICE
    this.websiteItems = this.filterDataService.getWebsiteData();
    // GETTING CATEGORY DATA FROM SERVICE
    this.categoryItems = this.filterDataService.getCategoryData();
  }

  private setDefaultValue(): void {
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
  private onChangeSortDropdown($event): void {
    this._sortItem = this.filterDataService.getSortDataByIndex($event.target.value.split(':')[0]);
  }
  private onChangeCategoryDropdown($event): void {
    this._categoryItem = this.filterDataService.getCategoryDataByIndex($event.target.value.split(':')[0]);
  }
  private onChangeBrandDropdown($event): void {
    this._brandItem = this.filterDataService.getBrandDataByIndex($event.target.value.split(':')[0]);;
  }
  private onChangeWebsiteDropdown($event): void {
    this._websiteItem = this.filterDataService.getWebsiteDataByIndex($event.target.value.split(':')[0]);
  }

  // STARS SLIDER CHANGE METHOD
  private onStarsChange($event): void {

  }
  // REVIEW SLIDER CHANGE METHOD
  private onReviewChange($event): void {

  }
  // PRICE SLIDER CHANGE METHOD
  private onPriceChange($event): void {
    
  }

  // RESET ALL DROP-DOWN MODEL AND PRICE RANGER VALUE
  private resetFilterValue(): void {
    this.setDefaultValue();
    console.log("Please clear all filter data", this._sortItem);
  }

  // FILTER SEARCH ITEM
  private filterData(): void {
    console.log("Filter data");
  }

  private openFilter(): void {

  }

  private chooseBestDealOption(type: number): void {
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
