import { injectable } from "tsyringe";
import { Database } from "../../config/database";

@injectable()

export class userService{
    constructor(private db:Database){}
    async getdata():Promise<any>{
        try{
            const sql = "call getusers";
            const [results] = await this.db.query(sql,[])
            if(Array.isArray(results) && results.length > 0){
                return results;
            }
            return null;
        }
        catch(error:any){
            throw new Error(error.message)
        }
    }

    async getdatabyid(id:any):Promise<any>{
        try{
            const sql = "call getusersbyid(?)";
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

    async login(data:any):Promise<any>{
        try{
            const sql = "call loginuser(?,?)";
            const [results] = await this.db.query(sql,[data.Email,data.PassWord])
            if(Array.isArray(results) && results.length > 0){
                return results;
            }
            return null;
        }
        catch(error:any){
            throw new Error(error.message)
        }
    }

    async checkemailuser(email:any):Promise<any>{
        try{
            const sql = "call checkemailuser(?)";
            const [results] = await this.db.query(sql,[email])
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
            const sql = "call creatuser(?,?,?,?,?,?,?,?,?)";
            await this.db.query(sql,[data.PassWord,data.NgaySinh,data.Anh,data.HoTen,data.DienThoai,data.Email,data.DiaChi,data.Quyen,data.TrangThai])
            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async delete(id:any):Promise<any>{
        try {
            const sql = "call deleteuser(?)";
            await this.db.query(sql,[id])
            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async update(data:any):Promise<any>{
        try {
            const sql = "call updateuser(?,?,?,?,?,?,?,?,?,?)";
            await this.db.query(sql,[data.MaNguoiDung,data.PassWord,data.NgaySinh,data.Anh,data.HoTen,data.DienThoai,data.Email,data.DiaChi,data.Quyen,parseInt(data.TrangThai,10)]);
            return true;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async search(search:any):Promise<any>{
        try {
            const sql = "call SearchUsers(?,?,?)";
            const results = await this.db.query(sql,[search.searchkeyword,search.pagenumber,search.itemsperpage]); 
            console.log(results)           
            if(Array.isArray(results) && results.length > 0){                
                return results;
            }
            return null;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}