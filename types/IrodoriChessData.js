"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessLevelData_1 = require("./IrodoriChessLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessData$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessData", [
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriChessLevelData_1.IrodoriChessLevelData }
        ]);
    }
    create(value) {
        const message = { isOpen: false, levelDataList: [] };
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
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated IrodoriChessLevelData level_data_list */ 13:
                    message.levelDataList.push(IrodoriChessLevelData_1.IrodoriChessLevelData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOpen);
        /* repeated IrodoriChessLevelData level_data_list = 13; */
        for (let i = 0; i < message.levelDataList.length; i++)
            IrodoriChessLevelData_1.IrodoriChessLevelData.internalBinaryWrite(message.levelDataList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessData
 */
exports.IrodoriChessData = new IrodoriChessData$Type();
