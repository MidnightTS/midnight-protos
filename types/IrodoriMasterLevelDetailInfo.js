"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriMasterLevelDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriMasterLevelDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriMasterLevelDetailInfo", [
            { no: 10, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_have_try", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "min_finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFinish: false, difficulty: 0, isHaveTry: false, minFinishTime: 0 };
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
                case /* bool is_finish */ 10:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 difficulty */ 11:
                    message.difficulty = reader.uint32();
                    break;
                case /* bool is_have_try */ 15:
                    message.isHaveTry = reader.bool();
                    break;
                case /* uint32 min_finish_time */ 12:
                    message.minFinishTime = reader.uint32();
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
        /* bool is_finish = 10; */
        if (message.isFinish !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isFinish);
        /* uint32 difficulty = 11; */
        if (message.difficulty !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.difficulty);
        /* bool is_have_try = 15; */
        if (message.isHaveTry !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isHaveTry);
        /* uint32 min_finish_time = 12; */
        if (message.minFinishTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.minFinishTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriMasterLevelDetailInfo
 */
exports.IrodoriMasterLevelDetailInfo = new IrodoriMasterLevelDetailInfo$Type();
