import { injectable } from "tsyringe";
import { Database } from "../../config/database";

@injectable()

export class customerService{
    constructor(private db:Database){}

    async getdatabyid(id:any):Promise<any>{
        try{
            const sql = "call getcustomerbyid(?)";
            const [results] = await this.db.query(sql,[id])
            if(Array.isArray(results) && results.length > 0){
                return results;
            }
            return null;
        }
        catch(error:any){
            throw new Error(error.message)
        }
    }

    async create(data:any):Promise<any>{
        try {
            const sql = "call creatcustomer(?,?,?,?,?,?)";
            await this.db.query(sql,[data.PassWord,data.Anh,data.HoVaTen,data.SoDienThoai,data.Email,data.DiaChi])
            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async login(data:any):Promise<any>{
        try {
            const sql = "call logincustomer(?,?)";
            const [results] = await this.db.query(sql,[data.Email,data.PassWord])
            if(Array.isArray(results) && results.length > 0){
                return results;
            }
            return null;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async update(data:any):Promise<any>{
        try {
            const sql = "call updateuser(?,?,?,?,?,?,?)";
            await this.db.query(sql,[data.MaKhachHang,data.PassWord,data.Anh,data.HoVaTen,data.SoDienThoai,data.Email,data.DiaChi]);
            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}