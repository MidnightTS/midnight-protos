"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessMapData_1 = require("./IrodoriChessMapData");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessLevelData", [
            { no: 6, name: "Unk3300_GCIGNCGOBML", kind: "message", jsonName: "Unk3300GCIGNCGOBML", T: () => IrodoriChessMapData_1.IrodoriChessMapData },
            { no: 14, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_BGINEMHBNAD", kind: "message", jsonName: "Unk3300BGINEMHBNAD", T: () => IrodoriChessMapData_1.IrodoriChessMapData },
            { no: 8, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, openTime: 0 };
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
                case /* IrodoriChessMapData Unk3300_GCIGNCGOBML = 6 [json_name = "Unk3300GCIGNCGOBML"];*/ 6:
                    message.unk3300GCIGNCGOBML = IrodoriChessMapData_1.IrodoriChessMapData.internalBinaryRead(reader, reader.uint32(), options, message.unk3300GCIGNCGOBML);
                    break;
                case /* uint32 level_id */ 14:
                    message.levelId = reader.uint32();
                    break;
                case /* IrodoriChessMapData Unk3300_BGINEMHBNAD = 10 [json_name = "Unk3300BGINEMHBNAD"];*/ 10:
                    message.unk3300BGINEMHBNAD = IrodoriChessMapData_1.IrodoriChessMapData.internalBinaryRead(reader, reader.uint32(), options, message.unk3300BGINEMHBNAD);
                    break;
                case /* uint32 open_time */ 8:
                    message.openTime = reader.uint32();
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
        /* IrodoriChessMapData Unk3300_GCIGNCGOBML = 6 [json_name = "Unk3300GCIGNCGOBML"]; */
        if (message.unk3300GCIGNCGOBML)
            IrodoriChessMapData_1.IrodoriChessMapData.internalBinaryWrite(message.unk3300GCIGNCGOBML, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 14; */
        if (message.levelId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.levelId);
        /* IrodoriChessMapData Unk3300_BGINEMHBNAD = 10 [json_name = "Unk3300BGINEMHBNAD"]; */
        if (message.unk3300BGINEMHBNAD)
            IrodoriChessMapData_1.IrodoriChessMapData.internalBinaryWrite(message.unk3300BGINEMHBNAD, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 open_time = 8; */
        if (message.openTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.openTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessLevelData
 */
exports.IrodoriChessLevelData = new IrodoriChessLevelData$Type();
