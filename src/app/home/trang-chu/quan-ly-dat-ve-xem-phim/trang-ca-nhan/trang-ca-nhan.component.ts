import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';
import { DataService } from 'src/_core/services/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-trang-ca-nhan',
  templateUrl: './trang-ca-nhan.component.html',
  styleUrls: ['./trang-ca-nhan.component.scss']
})
export class TrangCaNhanComponent implements OnInit {
  TrangCaNhan: boolean = true;
  LichSuDatVe: boolean = false;
  ChiTietTaiKhoan: boolean = false;
  TaiKhoan: any;
  MatKhau: any;
  Email: any;
  SoDienThoai: number;
  HoTen: any;
  NgaySinh: any;
  PhimDaDat: any = [];
  userForm: any;
  anHien: boolean = false;

  TrangThaitrangcanhan: boolean = true;
  TrangThaichitiettaikhoan: boolean = false;
  TrangThailichsudatve: boolean = false;


  constructor(private shareDataSerVice: ShareDataService, private dataService: DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.layThongTinUser();
    this.getLichSuDatVe();
  }

  ChonThaoTac(value) {
    if (value === "trangcanhan") {
      this.TrangCaNhan = true;
      this.LichSuDatVe = false;
      this.ChiTietTaiKhoan = false;
      this.TrangThaitrangcanhan = true;
      this.TrangThailichsudatve = false;
      this.TrangThaichitiettaikhoan = false;

    }
    if (value === "lichsudatve") {
      this.LichSuDatVe = true;
      this.TrangCaNhan = false;
      this.ChiTietTaiKhoan = false;
      this.TrangThaitrangcanhan = false;
      this.TrangThailichsudatve = true;
      this.TrangThaichitiettaikhoan = false;
    }
    if (value === "chitiettaikhoan") {
      this.ChiTietTaiKhoan = true;
      this.LichSuDatVe = false;
      this.TrangCaNhan = false;
      this.TrangThaitrangcanhan = false;
      this.TrangThailichsudatve = false;
      this.TrangThaichitiettaikhoan = true;
    }

  }

  layThongTinUser() {

    let user = JSON.parse(localStorage.getItem("user"));

    this.shareDataSerVice.shareThongTinCaNhan.subscribe((data) => {
      this.HoTen = data.HoTen;
      this.NgaySinh = data.NgaySinh;

    })

    this.shareDataSerVice.shareUser.subscribe((data) => {

      this.userForm = {
        TaiKhoan: data.TaiKhoan,
        MatKhau: data.MatKhau,
        Email: data.Email,
        SoDT: data.SoDT

      }

    })

    this.TaiKhoan = user.TaiKhoan;
    this.MatKhau = user.MatKhau;
    this.SoDienThoai = user.SoDT;
    this.Email = user.Email;

  }

  getLichSuDatVe() {

    if (this.TaiKhoan !== null) {
      const uri = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${this.TaiKhoan} `;
      this.dataService.post(uri).subscribe((data: any) => {
        this.PhimDaDat = data.DanhSachVeDaDat;
      })

    }

  }

  DangKy(value) {
    var nguoiDung = {
      TaiKhoan: value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    }

    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, nguoiDung).subscribe((data) => {

    })
  }

  AnHien() {
    this.anHien = !this.anHien;
  }


}
