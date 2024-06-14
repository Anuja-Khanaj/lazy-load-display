// import { Component } from '@angular/core';
import { Sort,MatSortModule} from '@angular/material/sort';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const EXAMPLE_DATA: UserData[] = [
  {id: '1', name: 'Hydrogen', progress: '1.0079', color: 'H'},
  {id: '2', name: 'Helium', progress: '4.0026', color: 'He'},
  {id: '3', name: 'Lithium', progress: '6.941', color: 'Li'},
  {id: '4', name: 'Beryllium', progress: '9.0122', color: 'Be'},
  {id: '5', name: 'Boron', progress: '10.811', color: 'B'},
  {id: '6', name: 'Carbon', progress: '12.0107', color: 'C'},
  {id: '7', name: 'Nitrogen', progress: '14.0067', color: 'N'},
  {id: '8', name: 'Oxygen', progress: '15.9994', color: 'O'},
  {id: '9', name: 'Fluorine', progress: '18.9984', color: 'F'},
  {id: '10', name: 'Neon', progress: '20.1797', color: 'Ne'},
];
export interface ClothingSale {
  name: string;
  quantitySold: number;
  revenue: number;
  profit: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  childrenClothingSales: ClothingSale[] = [
    { name: 'Kids T-Shirt', quantitySold: 120, revenue: 3600, profit: 1200 },
    { name: 'Ladies Shorts', quantitySold: 70, revenue: 1400, profit: 420 },
    { name: 'Ladies Shoes', quantitySold: 180, revenue: 18000, profit: 5400 },
    { name: 'Ladies Hat', quantitySold: 50, revenue: 1000, profit: 200 },
    { name: 'Men Hat', quantitySold: 60, revenue: 1200, profit: 240 },
    { name: 'Kids Hoodie', quantitySold: 80, revenue: 6400, profit: 1600 },
    { name: 'Men Belt', quantitySold: 40, revenue: 800, profit: 160 },
    { name: 'Ladies Skirt', quantitySold: 100, revenue: 4000, profit: 1200 },
    { name: 'Men Suit', quantitySold: 80, revenue: 16000, profit: 3200 },
    { name: 'Kids Hoodie', quantitySold: 80, revenue: 6400, profit: 1600 },
    { name: 'Men Belt', quantitySold: 40, revenue: 800, profit: 160 },
    { name: 'Ladies Skirt', quantitySold: 100, revenue: 4000, profit: 1200 },
    { name: 'Men Suit', quantitySold: 80, revenue: 16000, profit: 3200 },
    { name: 'Kids Hoodie', quantitySold: 80, revenue: 6400, profit: 1600 },
    { name: 'Men Belt', quantitySold: 40, revenue: 800, profit: 160 },
    { name: 'Ladies Skirt', quantitySold: 100, revenue: 4000, profit: 1200 },
    { name: 'Men Suit', quantitySold: 80, revenue: 16000, profit: 3200 },
  ];



    sortedData: ClothingSale[];

  constructor() {
    this.sortedData = this.childrenClothingSales.slice();
  }

  sortData(sort: Sort) {
    const data = this.childrenClothingSales.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'revenue':
          return compare(a.revenue, b.revenue, isAsc);
        case ' profit':
          return compare(a. profit, b. profit, isAsc);
        case 'quantitySold':
          return compare(a.quantitySold, b.quantitySold, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

