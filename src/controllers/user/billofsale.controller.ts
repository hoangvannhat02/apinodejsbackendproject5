import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { billofsaleService } from "../../services/user/billofsale.service";

@injectable()

export class BillofsaleController{
    constructor(private billofsaleservice: billofsaleService){}
    async get(req:Request,res:Response): Promise<void>{
        try{
            const results = await this.billofsaleservice.getdata();
            if(results){
                res.json(results);
            }
            else{
                res.json({message:"Bản ghi không tồn tại"})
            }
        }
        catch(error:any){
            res.json({message:error.message})
        }
    }

    async getnew(req:Request,res:Response): Promise<void>{
        try{
            const results = await this.billofsaleservice.getdatanew();
            if(results){
                res.json(results);
            }
            else{
                res.json({message:"Bản ghi không tồn tại"})
            }
        }
        catch(error:any){
            res.json({message:error.message})
        }
    }

    async getdatabyid(req:Request,res:Response): Promise<void>{
        try{
            const results = await this.billofsaleservice.getdatabyid(req.params.id);      
            if(results){
                res.json(results);
            }
            else{
                res.json({message:"Bản ghi không tồn tại"})
            }
        }
        catch(error:any){
            res.json({message:error.message})
        }
    }

    async create(req:Request,res:Response):Promise<void>{
        try {
            const data = req.body as {MaKhachHang:any, NgayTao:any, DiaChiNhan:any, TrangThai:any, MaVanChuyen:any, MaPhieu:any, HinhThucThanhToan:any, TongTien:any,DienThoai:any,NguoiNhan:any};           
            const results = await this.billofsaleservice.create(data);
            if(results){
                res.json({message:"Thêm bản ghi thành công", result:true})
            }
            else{
                res.json({message:"Thêm thất bại",result:false})
            }
        } catch (error:any) {
            res.json({message:error.message,result:false})
        }
    }

    async delete(req:Request,res:Response):Promise<void>{
        try {
            const results = await this.billofsaleservice.delete(req.params.id);
            if(results){
                res.json({message:"Xóa bản ghi thành công",result:true})
            }
            else{
                res.json({message:"Có lỗi xảy ra",result:false})
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }

}