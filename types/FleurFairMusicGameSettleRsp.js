"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairMusicGameSettleRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairMusicGameSettleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairMusicGameSettleRsp", [
            { no: 15, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_unlock_next_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false, isUnlockNextLevel: false, musicBasicId: 0, retcode: 0 };
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
                case /* bool is_new_record */ 15:
                    message.isNewRecord = reader.bool();
                    break;
                case /* bool is_unlock_next_level */ 7:
                    message.isUnlockNextLevel = reader.bool();
                    break;
                case /* uint32 music_basic_id */ 4:
                    message.musicBasicId = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
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
        /* bool is_new_record = 15; */
        if (message.isNewRecord !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* bool is_unlock_next_level = 7; */
        if (message.isUnlockNextLevel !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isUnlockNextLevel);
        /* uint32 music_basic_id = 4; */
        if (message.musicBasicId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.musicBasicId);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairMusicGameSettleRsp
 */
exports.FleurFairMusicGameSettleRsp = new FleurFairMusicGameSettleRsp$Type();
