"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriMasterLevelInfo_1 = require("./IrodoriMasterLevelInfo");
const IrodoriPoetryData_1 = require("./IrodoriPoetryData");
const IrodoriFlowerData_1 = require("./IrodoriFlowerData");
const IrodoriChessData_1 = require("./IrodoriChessData");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriActivityDetailInfo", [
            { no: 5, name: "chess_data", kind: "message", T: () => IrodoriChessData_1.IrodoriChessData },
            { no: 3, name: "flower_data", kind: "message", T: () => IrodoriFlowerData_1.IrodoriFlowerData },
            { no: 6, name: "poetry_data", kind: "message", T: () => IrodoriPoetryData_1.IrodoriPoetryData },
            { no: 1, name: "master_level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriMasterLevelInfo_1.IrodoriMasterLevelInfo }
        ]);
    }
    create(value) {
        const message = { masterLevelList: [] };
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
                case /* IrodoriChessData chess_data */ 5:
                    message.chessData = IrodoriChessData_1.IrodoriChessData.internalBinaryRead(reader, reader.uint32(), options, message.chessData);
                    break;
                case /* IrodoriFlowerData flower_data */ 3:
                    message.flowerData = IrodoriFlowerData_1.IrodoriFlowerData.internalBinaryRead(reader, reader.uint32(), options, message.flowerData);
                    break;
                case /* IrodoriPoetryData poetry_data */ 6:
                    message.poetryData = IrodoriPoetryData_1.IrodoriPoetryData.internalBinaryRead(reader, reader.uint32(), options, message.poetryData);
                    break;
                case /* repeated IrodoriMasterLevelInfo master_level_list */ 1:
                    message.masterLevelList.push(IrodoriMasterLevelInfo_1.IrodoriMasterLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* IrodoriChessData chess_data = 5; */
        if (message.chessData)
            IrodoriChessData_1.IrodoriChessData.internalBinaryWrite(message.chessData, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* IrodoriFlowerData flower_data = 3; */
        if (message.flowerData)
            IrodoriFlowerData_1.IrodoriFlowerData.internalBinaryWrite(message.flowerData, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* IrodoriPoetryData poetry_data = 6; */
        if (message.poetryData)
            IrodoriPoetryData_1.IrodoriPoetryData.internalBinaryWrite(message.poetryData, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated IrodoriMasterLevelInfo master_level_list = 1; */
        for (let i = 0; i < message.masterLevelList.length; i++)
            IrodoriMasterLevelInfo_1.IrodoriMasterLevelInfo.internalBinaryWrite(message.masterLevelList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriActivityDetailInfo
 */
exports.IrodoriActivityDetailInfo = new IrodoriActivityDetailInfo$Type();
