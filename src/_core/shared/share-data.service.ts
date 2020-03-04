import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  listDanhSachPhim = new BehaviorSubject([] as any);
  shareListDanhSachPhim = this.listDanhSachPhim.asObservable();

  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  danhSachPhimTimKiem = new BehaviorSubject([] as any);
  shareDanhSachPhimTimKiem = this.danhSachPhimTimKiem.asObservable();

  scrollKey = new BehaviorSubject({} as Object);
  shareKey = this.scrollKey.asObservable();

  trailerPhim = new BehaviorSubject({} as Object);
  shareTrailerPhim = this.trailerPhim.asObservable();

  chiTietUser = new BehaviorSubject({} as Object);
  shareUser: any = this.chiTietUser.asObservable();

  thongTinCaNhan = new BehaviorSubject({} as Object);
  shareThongTinCaNhan: any = this.thongTinCaNhan.asObservable();

  thanhToan = new BehaviorSubject({} as Object);
  shareThanhToan: any = this.thanhToan.asObservable();

  constructor() { }

  sharingDataListDanhSachPhim(listPhim) {
    this.listDanhSachPhim.next(listPhim);
  }

  sharingDataChiTietPhim(phim) {

    this.chiTietPhim.next(phim);
  }

  sharingDataDanhSachPhimTimKiem(ds) {

    this.danhSachPhimTimKiem.next(ds);
  }

  sharingKeyScroll(key) {
    this.scrollKey.next(key);
  }

  sharingDataTrailerPhim(phim) {
    this.trailerPhim.next(phim);
  }

  sharingDataUser(user) {
    this.chiTietUser.next(user);
  }

  sharingDataThongTinCaNhan(user) {
    this.thongTinCaNhan.next(user);
  }

  sharingChiTietThanhToan(chiTietThanhToan) {
    this.thanhToan.next(chiTietThanhToan);
  }
}
