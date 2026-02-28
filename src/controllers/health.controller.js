import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/async-handler.js";

const healthCheck = AsyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, "OK", "Health check passed")
    );
});

const healthCheckWithId = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(
        new ApiResponse(200, { id }, `Health check passed for ID: ${id}`)
    );
});

export { healthCheck, healthCheckWithId };