import { db_query } from "../configs/db_config.js"

export const test = (req, res)=>{
    res.json({
        "status": "dev"
    })
}

export const getAllStudents = async (req, res)=>{
    try {
        const query = "SELECT * FROM students"
        const result = await db_query(query);
        res.status(200).json({
            students: result.rows
        })
    } catch (error) {
        res.status(500).json({
          message: "Error Occured During Geting Students",
          detail: error  
        })
    }
}

export const getStudentbyId = async(req, res)=>{
        try {
            const { id } = req.params;
            const query = "SELECT * FROM students WHERE reg_no = $1"
            console.log(query, id)
            const result = await db_query(query, [id])
            if(result.rows.length == 0){
                return res.status(404).json({
                    message: "Student Not Found"
                }) 
            } 
            res.status(200).json({
                students: result.rows[0]
            })
        } catch (error) {
            res.status(500).json({
                message: "Error Occured getting student by ID",
                detail: error,
                id: req.params
            })
        }
}


