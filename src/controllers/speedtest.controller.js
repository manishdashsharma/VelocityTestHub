import asyncHandler from '../utils/asyncHandler.js'
import CustomError from '../utils/customError.js'
import {getNetworkDownloadSpeed , getNetworkUploadSpeed} from "../utils/networkSpeed.js"


const getDownloadSpeed = asyncHandler( async( req,res) => {
    const downloadSpeed = await getNetworkDownloadSpeed()
    if (!downloadSpeed.mbps >= "100"){
        throw new CustomError("The download speed is below criteria level",404)
    }
    res
    .status(200)
    .json({
        success: true,
        message: "The download speed is above criteria level",
        downloadSpeed : downloadSpeed.mbps
    })
})
const getUploadSpeed = asyncHandler( async( req,res) => {
    const uploadSpeed = await getNetworkUploadSpeed()
    if (!uploadSpeed.mbps >= "100"){
        throw new CustomError("The upload speed is below criteria level",404)
    }
    res
    .status(200)
    .json({
        success: true,
        message: "The upload speed is above criteria level",
        uploadSpeed : uploadSpeed.mbps
    })
})

export {
    getDownloadSpeed,
    getUploadSpeed

}