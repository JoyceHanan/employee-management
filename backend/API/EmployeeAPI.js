import exp from 'express'
export const empApp=exp.Router()
import {config} from 'dotenv'
import { EmpModel } from '../model/employeemodel.js'

 empApp.post('/employee',async(req,res)=>{
    const newemp=req.body
    const empdoc=EmpModel(newemp)
    await empdoc.save()
    res.status(201).json({message:"new employee created"})
 })
 empApp.get('/employee',async(req,res)=>{
    let emplist=await EmpModel.find()
    res.status(200).json({message:"Employee", payload:emplist})
 })
 empApp.put('/employee/:id',async(req,res)=>{
    const modified=req.body
    const idof=req.params.id
    let update=await EmpModel.findByIdAndUpdate(req.params.id,{$set:{...modified}},{returnDocument:"after"})
      if (!update) {
    return res.status(404).json({ message: "emp not found" });
  }
    res.status(200).json({message:"Employee updated",payload:update})
 })
 empApp.delete('/employee/:id',async(req,res)=>{
    let deleted=await EmpModel.findByIdAndDelete(req.params.id)
     if(!deleted){
       return res.status(404).json({message:"not found"})
    }
    res.status(200).json({message:" deleted" , payload:deleted})
 })