import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

export interface ClothingSale {
  name: string;
  quantitySold: number;
  revenue: number;
  profit: number;
}

const CHILDREN_CLOTHING_SALES: ClothingSale[] = [
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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['name', 'quantitySold', 'revenue', 'profit'];
  dataSource = new MatTableDataSource<ClothingSale>(CHILDREN_CLOTHING_SALES);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort) {
    const data = CHILDREN_CLOTHING_SALES.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'revenue':
          return compare(a.revenue, b.revenue, isAsc);
        case 'profit':
          return compare(a.profit, b.profit, isAsc);
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
