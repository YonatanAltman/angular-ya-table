import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
export interface IColumn {
  matColumnDef: string;
  title: string;
}
export interface IUser {
  firstName: string;
  uid: number;
  lastName: string;
  age: number;
}

const ELEMENT_DATA: IUser[] = [
  { uid: 1, firstName: "Hydrogen", lastName: "somcc", age: 25 },
  { uid: 2, firstName: "Helium", lastName: "dsdsdd", age: 25 },
  { uid: 3, firstName: "Lithium", lastName: "ddd", age: 25 },
  { uid: 4, firstName: "Beryllium", lastName: "sssss", age: 25 },
  { uid: 5, firstName: "Boron", lastName: "qqqqq", age: 25 },
  { uid: 6, firstName: "Carbon", lastName: "eeeee", age: 25 },
  { uid: 7, firstName: "Nitrogen", lastName: "ttttt", age: 25 },
  { uid: 8, firstName: "Oxygen", lastName: "kkkkkk", age: 25 },
  { uid: 9, firstName: "Fluorine", lastName: "yyyyyy", age: 25 },
  { uid: 10, firstName: "Neon", lastName: "gvvvvv", age: 25 }
];

@Component({
  selector: "app-ya-table",
  templateUrl: "./ya-table.component.html",
  styleUrls: ["./ya-table.component.scss"]
})
export class YaTableComponent implements OnInit {
  columns: IColumn[] = [
    { matColumnDef: "uid", title: "ID" },
    { matColumnDef: "firstName", title: "First Name" },
    { matColumnDef: "lastName", title: "Last Name" },
    { matColumnDef: "age", title: "Age" }
  ];
  displayedColumns: string[] = this.columns.map(c => c.matColumnDef);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
