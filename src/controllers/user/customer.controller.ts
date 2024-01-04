import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { customerService } from "../../services/user/customer.service";

@injectable()

export class CustomerController{
    constructor(private customerservice: customerService){}
    async getdatabyid(req:Request,res:Response): Promise<void>{
        try{
            const results = await this.customerservice.getdatabyid(req.params.id);      
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
            const data = req.body as {PassWord:any,Anh:any,HoVaTen:any,SoDienThoai:string,Email:any,DiaChi:any}; 
            console.log(data.SoDienThoai);
                      
            const results = await this.customerservice.create(data);
            if(results){
                res.json({message:"Thêm bản ghi thành công",result:true})
            }
            else{
                res.json({message:"Thêm thất bại",result:false})
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }

    async login(req:Request,res:Response):Promise<void>{
        try {
            const data = req.body as {Email:any,PassWord:any};           
            const results = await this.customerservice.login(data);
            
            if(results){
                res.json({message:"Thêm bản ghi thành công",result:results})
            }
            else{
                res.json({message:"Thêm thất bại",result:[]})
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }

    async update(req:Request,res:Response):Promise<void>{
        try {
            console.log(req.body);
            
            const data = req.body as {MaKhachHang:any,PassWord:any,Anh:any,HoVaTen:any,SoDienThoai:any,Email:any,DiaChi:any};          
            const results = await this.customerservice.update(data);
            if(results){
                res.json({message:"Sửa bản ghi thành công",result:true})
            }
            else{
                res.json({message:"Đã có lỗi xảy ra",result:false})
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }

}