import {Component, OnInit, Input, Output, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {XYZ} from "ol/source";
import {fromLonLat, toLonLat, transform} from 'ol/proj';
import {Overlay} from "ol";


const EVENTS = {
  greeting: 'greeting',
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit ,AfterViewInit{
  @ViewChild('react',{read:ElementRef}) reactComponent: ElementRef | undefined;

  @Input() Latitude = 35.715298;
  @Input() Longitude = 51.404343;
  public map: any;

  ngOnInit(): void {
    this.map = new Map({
      target: 'ol-map',
      // layers: [this.rasterLayer, this.btsLayer],
      layers: [
        new TileLayer({
          source: new XYZ({
            url:
              'http://109.122.208.23/gis/{z}/{x}/{y}.png'
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([this.Longitude, this.Latitude]),
        zoom: 13,
        minZoom: 1,
        maxZoom: 19
      })
    });
  }
  public handleOnClick() {
    console.log("Salam")
  }
  ngAfterViewInit(){
    var overlay = new Overlay({
      // @ts-ignore
      element: this.reactComponent.nativeElement as HTMLElement,
      position: fromLonLat([ 51.404343,35.715298])
    });
    this.map.addOverlay(overlay);
    // @ts-ignore
    console.log(this.reactComponent.nativeElement)
    // this.map.on('singleclick', function (evt: { coordinate: any; }) {
    //   const coordinate = evt.coordinate;
    //   overlay.setPosition(coordinate);
    // });
    //
    // // @ts-ignore
    // const el=this.reactComponent.nativeElement.cloneNode(true)
    // var overlay1 = new Overlay({
    //   element:el ,
    //   position: fromLonLat([10, 0])
    // });
    // this.map.addOverlay(overlay1);
  }
}
