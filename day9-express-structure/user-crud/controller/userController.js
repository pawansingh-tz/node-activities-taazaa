import { UserModel } from "../postgres-connection/postgres.js";
import { Op } from 'sequelize';


//fetch all the users in the table
export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.findAll({
            order: [['id', 'ASC']]
        });
        if (users.length === 0) {
            return res.status(200).json({ "error": "users not found" });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });

    }

}

// add a user in the table where id is auto generated integer
export const addUser = async (req, res) => {
    //const {name,email,age} = req.body;
    try {
        await UserModel.create(req.body);
        return res.status(200).json({ "message": "User added" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });

    }

}


// update the existing using by passing the id in the param  as localhost:8080/user/4   
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findOne({ where: { id: userId } });

        if (user === null || user === undefined) {
            return res.status(200).json({ "message": `User is not found with this id:${userId}` });
        }

        await user.update(req.body, { where: { id: userId } });
        return res.status(200).json({ "message": "User updated successfully" });


    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });

    }
}

//get user by id 
export const getUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findOne({ where: { id: userId } });
        if (user === null || user === undefined) {
            return res.status(200).json({ "message": `User is not found with  id :${userId}` });
        }
        return res.status(200).json({ "User": user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });

    }
}

// delete a user permanently from the table 
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findOne({ where: { id: userId } });
        if (user === null || user === undefined) {
            return res.status(200).json({ "message": `User is not found with this ${userId}` });
        }
        await user.destroy();
        return res.status(200).json({ "message": "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });
    }
}


// to get only the restricted columns of the table 
export const getAllUserAttributes = async (req, res) => {
    try {
        const users = await UserModel.findAll({
            attributes:[ ['id' , 'userId'] ,'name' ,'email'],
            order: [['id', 'ASC']]  //order by id in ascending order
        });
        if (users.length === 0) {
            return res.status(200).json({ "error": "users not found" });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });
    }
}



export const getAllUserOperator = async (req, res) => {
    try {
        const users = await UserModel.findAll({
            where:{
                [Op.and] :[{id:1},{age:21}]
            },
            attributes:[ ['id' , 'userId'] ,'name' ,'age','email'],
            order: [['id', 'ASC']]  //order by id in ascending order
        });
        if (users.length === 0) {
            return res.status(200).json({ "error": "users not found" });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });
    }
}
