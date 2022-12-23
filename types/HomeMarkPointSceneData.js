"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMarkPointSceneData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeMarkPointFurnitureData_1 = require("./HomeMarkPointFurnitureData");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointSceneData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeMarkPointSceneData", [
            { no: 9, name: "teapot_spirit_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 6, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "safe_point_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeMarkPointFurnitureData_1.HomeMarkPointFurnitureData }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, moduleId: 0, furnitureList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector teapot_spirit_pos */ 9:
                    message.teapotSpiritPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.teapotSpiritPos);
                    break;
                case /* uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector safe_point_pos */ 11:
                    message.safePointPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.safePointPos);
                    break;
                case /* uint32 module_id */ 8:
                    message.moduleId = reader.uint32();
                    break;
                case /* repeated HomeMarkPointFurnitureData furniture_list */ 13:
                    message.furnitureList.push(HomeMarkPointFurnitureData_1.HomeMarkPointFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Vector teapot_spirit_pos = 9; */
        if (message.teapotSpiritPos)
            Vector_1.Vector.internalBinaryWrite(message.teapotSpiritPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 6; */
        if (message.sceneId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* Vector safe_point_pos = 11; */
        if (message.safePointPos)
            Vector_1.Vector.internalBinaryWrite(message.safePointPos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 module_id = 8; */
        if (message.moduleId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.moduleId);
        /* repeated HomeMarkPointFurnitureData furniture_list = 13; */
        for (let i = 0; i < message.furnitureList.length; i++)
            HomeMarkPointFurnitureData_1.HomeMarkPointFurnitureData.internalBinaryWrite(message.furnitureList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeMarkPointSceneData
 */
exports.HomeMarkPointSceneData = new HomeMarkPointSceneData$Type();
